import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth/useAuth";
import useAxioPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
const Register = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting, isLoading },
  } = useForm();
  const { createUser } = useAuth();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const axiosPublic = useAxioPublic();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        const userInfo = {
          name: data?.name || "Anonymous", // Access the 'name' field
          email: data?.email,
          password: data?.password || "", // Access the 'password' field
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Create User successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          }
        });
      })
      .catch((err) => {
        let errorMessage = "An unexpected error occurred. Please try again.";
        if (err.code === "auth/invalid-email") {
          errorMessage = "Invalid email address. Please enter a valid email.";
        } else if (err.code === "auth/invalid-credential") {
          errorMessage = "No user found with this email. Please sign up.";
        } else if (err.code === "auth/email-already-in-use") {
          errorMessage = "Already account create Your email. Please sign up.";
        } else if (err.code === "auth/wrong-password") {
          errorMessage = "Incorrect password. Please try again.";
        } else if (err.code === "auth/network-request-failed") {
          errorMessage =
            "Network error. Please check your internet connection.";
        } else if (err.code === "auth/too-many-requests") {
          errorMessage = "Too many attempts. Try again later.";
        }

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
    <div>
      <div></div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="flex flex-col justify-center items-center w-full max-w-md  ">
          {/* <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-center">Register Now!</h1>
            <p className="py-6">Welcome to Repair Website bangladesh</p>
          </div> */}
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <h1 className="text-4xl font-bold text-center mt-5 text-orange-600">
              Register Now!
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* Name Validation Start */}
              <div className="form-control">
                <label className="label" htmlFor="name">
                  <span className="label-text text-lg font-semibold">
                    Name :
                  </span>
                </label>
                <div>
                  <Controller
                    name="name"
                    control={control}
                    rules={{
                      required: "Name is required",
                      pattern: {
                        value: /^[a-zA-Z\s]+$/,
                        message: "Name can only contain letters and spaces",
                      },
                    }}
                    render={({ field, fieldState }) => {
                      const { error } = fieldState;
                      return (
                        <div className="relative">
                          <input
                            {...field}
                            id="name"
                            className={`w-full border rounded px-3 py-2 text-gray-700 transition-colors hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                              error
                                ? "border-red-500"
                                : field.value
                                ? "border-green-500"
                                : "border-gray-300"
                            }`}
                            placeholder="Enter Your Name"
                            aria-invalid={!!error}
                            aria-describedby="name-feedback"
                          />
                          {error ? (
                            <p
                              id="name-feedback"
                              className="text-red-500 text-sm mt-1"
                            >
                              {error.message}
                            </p>
                          ) : field.value ? (
                            <p
                              id="name-feedback"
                              className="text-green-500 text-sm mt-1"
                            >
                              Name is valid!
                            </p>
                          ) : null}
                        </div>
                      );
                    }}
                  />
                </div>
              </div>
              {/* Name Validation End */}

              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text text-lg font-semibold">
                    Email :
                  </span>
                </label>
                <div>
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
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
                            className={`w-full border rounded px-3 py-2 text-gray-700 transition-colors hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                              error
                                ? "border-red-500"
                                : field.value
                                ? "border-green-500"
                                : "border-gray-300"
                            }`}
                            placeholder="Enter Email ID"
                            aria-invalid={!!error}
                            aria-describedby="email-feedback"
                          />
                          {error ? (
                            <p
                              id="email-feedback"
                              className="text-red-500 text-sm mt-1"
                            >
                              {error.message}
                            </p>
                          ) : field.value ? (
                            <p
                              id="email-feedback"
                              className="text-green-500 text-sm mt-1"
                            >
                              Email is valid!
                            </p>
                          ) : null}
                        </div>
                      );
                    }}
                  />
                </div>
              </div>
              {/* Password Validation Start */}
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
                            id="registerPassword"
                            type={showPassword ? "text" : "password"}
                            className={`w-full border rounded px-3 py-2 text-gray-700 transition-colors hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
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
                              <AiFillEyeInvisible size={20} color="orange" />
                            ) : (
                              <AiFillEye size={20} color="orange" />
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
              </div>
              {/* Password Validation End */}
              <div className="form-control mt-6">
                <input
                  className="mt-4 w-full bg-orange-500 text-xl font-semibold text-white py-3 px-4 rounded-lg shadow hover:bg-orange-600"
                  type="submit"
                  disabled={isSubmitting || Object.keys(errors).length > 0} // Disable if submitting or form is invalid
                  value={isSubmitting ? "Processing..." : "Register"}
                />
              </div>
            </form>
            <p className="text-xm font-medium text-center mb-3">
              Already Account ?{" "}
              <Link to={"/login"}>
                <span className="text-orange-600 font-bold">Login</span>
              </Link>
            </p>
            {/* Social Login */}
            <div>
              <GoogleLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
