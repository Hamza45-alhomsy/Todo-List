import "./home.css";
////
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth.jsx";
import AddTask from "../../lists/AddTask.jsx";
import TodoList from "../../lists/TodoList.jsx";
import TotalCompleteItems from "../../lists/TotalCompleteItems.jsx";

////
function Home() {
  const auth = getAuth();
  const [userInfo, setUserInfo] = useState(null);

  const navigate = useNavigate();
  const { currentUser } = useAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL, // This is the profile photo URL
          emailVerified: user.emailVerified,
        });
      } else {
        setUserInfo(null);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!userInfo)
    return (
      <div style={{ fontSize: 25, minHeight: "600px" }}>
        Please log in to add your tasks !{" "}
      </div>
    );

  return (
    <div style={{ margin: 10, display: "flex" }} className="home-page">
      <div>
        {userInfo.photoURL && (
          <img
            src={userInfo.photoURL}
            alt="Profile"
            style={{ width: 40, height: 40, borderRadius: "50%" }}
          />
        )}
        <h2>{userInfo.displayName || "No name set"}</h2>
        <p>{userInfo.email}</p>{" "}
        {currentUser ? (
          <div>
            {" "}
            <button
              type="submit"
              style={{ backgroundColor: " #90e0ef" }}
              onClick={() => navigate("/signout")}
            >
              Sign_out
            </button>
          </div>
        ) : (
          ""
        )}
      </div>

      <AddTask />
      <TodoList>
        <TotalCompleteItems />
      </TodoList>
    </div>
  );
}

export default Home;
