import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../firebase/auth";
import { useAuth } from "../../hooks/useAuth";
import "./logIn.css";

function LogIn() {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  const [state, setState] = useState({
    email: "",
    password: "",
    isSigningIn: false,
    error: "",
  });

  const handleSignIn = async (method) => {
    try {
      setState((prev) => ({ ...prev, isSigningIn: true, error: "" }));

      if (method === "email") {
        await doSignInWithEmailAndPassword(state.email, state.password);
      } else {
        await doSignInWithGoogle();
      }

      navigate("/home");
    } catch (error) {
      setState((prev) => ({ ...prev, error: error.message }));
    } finally {
      setState((prev) => ({ ...prev, isSigningIn: false }));
    }
  };

  if (userLoggedIn) return <Navigate to="/home" replace />;

  return (
    <div className="login-container">
      <div className="login-header">
        <h2>Log in</h2>
      </div>

      <div className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={state.email}
            onChange={(e) =>
              setState((prev) => ({ ...prev, email: e.target.value }))
            }
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={state.password}
            onChange={(e) =>
              setState((prev) => ({ ...prev, password: e.target.value }))
            }
            placeholder="Enter your password"
          />
        </div>

        {state.error && <div className="error-message">{state.error}</div>}

        <button
          type="button"
          className="login-btn"
          onClick={() => handleSignIn("email")}
          disabled={state.isSigningIn}
        >
          {state.isSigningIn ? "Logging in..." : "Log in"}
        </button>

        <div>
          Don't have an account?{" "}
          <Link style={{ color: "#f7f4f4" }} to="/signup">
            Sign up
          </Link>
        </div>

        <div className="divider">
          <span>OR</span>
        </div>

        <button
          type="button"
          onClick={() => handleSignIn("google")}
          disabled={state.isSigningIn}
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default LogIn;
