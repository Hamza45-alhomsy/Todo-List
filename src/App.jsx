import { Route, Routes } from "react-router-dom";
import Home from "./components/layouts/Home/Home.jsx";
import MainApp from "./components/layouts/Main_app/MainApp.jsx";
import Footer from "./components/layouts/Navbar/Footer.tsx";
import LogIn from "./routes/log_in/LogIn.jsx";
import Sign_out from "./routes/sign_out/Sign_out.jsx";
import SignUp from "./routes/sign_up/SignUp.jsx";
import Header from "./components/layouts/Navbar/Header.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<Sign_out />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
