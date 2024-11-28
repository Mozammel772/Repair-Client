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
            {/* Email Validation Start */}
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text text-lg font-semibold ">
                  Email :
                </span>
              </label>
              <div>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is Required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <div className="relative">
                      <input
                        {...field}
                        id="email"
                        className={`w-full border rounded px-3 py-2 text-gray-700 transition-colors hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Enter Email ID"
                        aria-invalid={!!errors.email}
                        aria-describedby="email-feedback"
                      />
                      {errors.email ? (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      ) : (
                        field.value && (
                          <p className="text-green-500 text-sm mt-1">
                            Email is valid!
                          </p>
                        )
                      )}
                    </div>
                  )}
                />
              </div>
            </div>
            {/* Email Validation End */}

            {/* Password validation start */}
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
                    required: "Password is Required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  }}
                  render={({ field }) => (
                    <div>
                      <input
                        {...field}
                        id="password"
                        type="password"
                        className={`w-full border rounded px-3 py-2 text-gray-700 transition-colors hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                          errors.password ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Enter Password"
                        aria-invalid={!!errors.password}
                        aria-describedby="password-feedback"
                      />
                      {errors.password ? (
                        <p
                          id="password-feedback"
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.password.message}
                        </p>
                      ) : null}
                    </div>
                  )}
                />
              </div>
            </div>
            {/* Password Validation End */}
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                disabled={false}
                value="login"
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
