import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../firebase/auth";
import { useAuth } from "../../hooks/useAuth";
import "./signUp.css";

function SignUp() {
  const navigate = useNavigate();
  const { userSignedUp } = useAuth();
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    isSigningUp: false,
    error: "",
  });

  const handleSignUp = async (e, method) => {
    e.preventDefault();
    if (state.isSigningUp) return;

    setState((prev) => ({ ...prev, isSigningUp: true, error: "" }));

    try {
      if (method === "email") {
        await doCreateUserWithEmailAndPassword(state.email, state.password);
      } else {
        await doSignInWithGoogle();
      }
      navigate("/home");
    } catch (error) {
      setState((prev) => ({ ...prev, error: error.message }));
    } finally {
      setState((prev) => ({ ...prev, isSigningUp: false }));
    }
  };

  const isValid = {
    passwordMatch: state.password === state.confirmPassword,
    passwordLength: state.password.length >= 6,
  };

  if (userSignedUp) return <Navigate to="/home" replace />;

  return (
    <div className="login-container">
      <div className="login-header">
        <h2>
          <strong>Sign Up</strong>
        </h2>
        <p>Create an account and join us now!</p>
      </div>

      <form onSubmit={(e) => handleSignUp(e, "email")}>
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
            placeholder="Create a password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={state.confirmPassword}
            onChange={(e) =>
              setState((prev) => ({ ...prev, confirmPassword: e.target.value }))
            }
            placeholder="Confirm your password"
          />
        </div>

        <div className="validation">
          {state.password && <p>✓ Password must be at least 6 characters</p>}
          {state.confirmPassword && <p>✓ Passwords must match</p>}
        </div>

        {state.error && <div className="error-message">{state.error}</div>}

        <button
          type="submit"
          className="login-btn"
          disabled={
            state.isSigningUp ||
            !isValid.passwordMatch ||
            !isValid.passwordLength
          }
        >
          {state.isSigningUp ? "Signing up..." : "Sign up"}
        </button>

        <div className="auth-navigation">
          Already have an account? <Link to="/login">Log in</Link>
        </div>

        <div className="divider">
          <span>OR</span>
        </div>

        <button
          type="submit"
          onClick={(e) => handleSignUp(e, "google")}
          disabled={state.isSigningUp}
        >
          Continue with Google
        </button>
      </form>
    </div>
  );
}

export default SignUp;
