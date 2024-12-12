import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleForgotPassword = () => {
    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Email is required",
        text: "Please enter your email address to reset your password.",
      });
      return;
    }

    const auth = getAuth();
    setLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Password Reset Email Sent",
          text: "Check your inbox for the password reset link.",
        });
        setEmail(""); // Clear the email field
      })
      .catch((error) => {
        let errorMessage = "An error occurred. Please try again.";
        if (error.code === "auth/invalid-email") {
          errorMessage = "Invalid email address.";
        } else if (error.code === "auth/user-not-found") {
          errorMessage = "No account found with this email.";
        }

        Swal.fire({
          icon: "error",
          title: "Error",
          text: errorMessage,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-4">
              Forgot Password
            </h1>

            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text text-lg font-semibold">Email:</span>
              </label>
              <input
                type="email"
                id="email"
                defaultValue={email}
                // value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={`w-full border rounded px-3 py-2 text-gray-700 transition-colors hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 `}
              />
            </div>
            <div className="form-control mt-4">
              <button
                onClick={handleForgotPassword}
                className={`btn btn-secondary ${loading ? "loading" : ""}`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
            </div>
            <p className="mt-4 text-center">
              Remembered your password?{" "}
              <Link to="/login" className="text-blue-500 font-bold">
                Login Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
