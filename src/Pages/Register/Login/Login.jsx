import React, { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((data) => {
        const user = data.user;
        console.log(user);
        Swal.fire({
          title: "Login Successful!",
          text: "Welcome back!",
          icon: "success",
        });

        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log("Failed to", err.code);
        let errorMessage = "An unexpected error occurred. Please try again.";
        if (err.code === "auth/invalid-email") {
          errorMessage = "Invalid email address. Please enter a valid email.";
        } else if (err.code === "auth/invalid-credential") {
          errorMessage = "Incorrect password. Please try again.";
        } else if (err.code === "auth/user-not-found") {
          errorMessage = "No user found with this email. Please sign up.";
        } else if (err.code === "auth/wrong-password") {
          errorMessage = "Incorrect password. Please try again.";
        } else if (err.code === "auth/network-request-failed") {
          errorMessage =
            "Network error. Please check your internet connection.";
        } else if (err.code === "auth/too-many-requests") {
          errorMessage = "Too many attempts. Try again later.";
        }

        setError(errorMessage);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: errorMessage,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="flex flex-col justify-center items-center  ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* Email Field */}
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text text-lg font-semibold">Email:</span>
              </label>
              <div>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field, fieldState }) => {
                    const { error } = fieldState;
                    return (
                      <div className="relative">
                        <input
                          {...field}
                          id="email"
                          className={`w-full border rounded px-3 py-2 text-gray-700 transition-colors hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                            error ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="Enter Email ID"
                          aria-invalid={!!error}
                          aria-describedby="email-feedback"
                        />
                        {error && (
                          <p
                            id="email-feedback"
                            className="text-red-500 text-sm mt-1"
                          >
                            {error.message}
                          </p>
                        )}
                      </div>
                    );
                  }}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text text-lg font-semibold">
                  Password:
                </span>
              </label>
              <div className="relative">
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                      message:
                        "Password must be at least 8 characters long, include uppercase, lowercase, and a number",
                    },
                  }}
                  render={({ field, fieldState }) => {
                    const { error } = fieldState;
                    return (
                      <div>
                        <input
                          {...field}
                          id="password"
                          type={showPassword ? "text" : "password"}
                          className={`w-full border rounded px-3 py-2 text-gray-700 transition-colors hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                            error ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="Enter Password"
                          aria-invalid={!!error}
                          aria-describedby="password-feedback"
                        />
                        <span
                          onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                        >
                          {showPassword ? (
                            <AiFillEyeInvisible size={20} />
                          ) : (
                            <AiFillEye size={20} />
                          )}
                        </span>
                        {error && (
                          <p
                            id="password-feedback"
                            className="text-red-500 text-sm mt-1"
                          >
                            {error.message}
                          </p>
                        )}
                      </div>
                    );
                  }}
                />
              </div>
              <div>
                <Link to={"/forgot-password"} className="text-sm text-blue-500">
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <input
                className="btn btn-primary text-xl"
                type="submit"
                disabled={isSubmitting || Object.keys(errors).length > 0} // Disable if submitting or form is invalid
                value={isSubmitting ? "Logging in..." : "Login"}
              />
            </div>
          </form>
          <p className="text-xm font-medium text-center mb-3">
            Create a New Account?{" "}
            <Link to={"/register"}>
              <span className="font-bold text-orange-600"> Register Now</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
