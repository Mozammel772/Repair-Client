import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
            {/* Email Validation Start  Activer=*/}
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
                  Password :
                </span>
              </label>
              <div>
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
                      <div className="relative">
                        <input
                          {...field}
                          id="password"
                          type="password"
                          className={`w-full border rounded px-3 py-2 text-gray-700 transition-colors hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                            error
                              ? "border-red-500"
                              : field.value
                              ? "border-green-500"
                              : "border-gray-300"
                          }`}
                          placeholder="Enter Password"
                          aria-invalid={!!error}
                          aria-describedby="password-feedback"
                        />
                        {error ? (
                          <p
                            id="password-feedback"
                            className="text-red-500 text-sm mt-1"
                          >
                            {error.message}
                          </p>
                        ) : field.value ? (
                          <p
                            id="password-feedback"
                            className="text-green-500 text-sm mt-1"
                          >
                            Password is strong!
                          </p>
                        ) : null}
                      </div>
                    );
                  }}
                />
              </div>
            </div>
            {/* Password Validation End */}

            <div className="form-control mt-6">
              <input
                className="btn btn-primary text-xl"
                type="submit"
                disabled={false}
                value="Login"
              />
            </div>
          </form>
          <p className="text-xm font-medium text-center mb-3">
            Create a New Account ?{" "}
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
