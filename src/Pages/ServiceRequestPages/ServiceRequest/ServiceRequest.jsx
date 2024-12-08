import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import image from "../../../assets/about/ac-repair.jpg";
import CoverSection from "../../../Components/CoverSection/CoverSection";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import {
  AuthContext,
} from "../../Register/AuthProvider/AuthProvider";
const ServiceRequest = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
  console.log("register", user);
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="mt-20">
        <CoverSection
          img={image}
          tittle={"Request Your Repair Items"}
          subTittle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veritatis perferendis aut quasi quam corrupti adipisci error velit quas, omnis reprehenderit similique earum necessitatibus expedita minus, enim maiores incidunt neque."
          }
        />
      </div>
      <div>
        <SectionTittle
          heading={"Your Repair Items"}
          subHeading={"Request Your Repair Items"}
        />
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="flex flex-col justify-center items-center  ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">Register Now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* Name Validation Start */}
              <div className="flex justify-between  items-center max-w-xl ">
                <div className="form-control w-full mr-2">
                  <label className="label" htmlFor="fname">
                    <span className="label-text text-lg font-semibold">
                      First Name :
                    </span>
                  </label>
                  <div>
                    <Controller
                      name="fname"
                      control={control}
                      rules={{
                        required: "First name is required",
                        pattern: {
                          value: {},
                          message: "Name can only contain letters and spaces",
                        },
                      }}
                      render={({ field, fieldState }) => {
                        return (
                          <div className="relative">
                            <input
                              id="fname"
                              className={`w-full border rounded px-3 py-2 text-gray-700 transition-colors hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 `}
                              placeholder="Enter Your Name"
                              aria-describedby="name-feedback"
                            />
                          </div>
                        );
                      }}
                    />
                  </div>
                </div>
                <div className="form-control w-full ">
                  <label className="label" htmlFor="lname">
                    <span className="label-text text-lg font-semibold">
                      Last Name :
                    </span>
                  </label>
                  <div>
                    <Controller
                      name="lname"
                      control={control}
                      rules={{
                        required: "Last Name is required",
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
                              id="lname"
                              className={`w-full border rounded px-3 py-2 text-gray-700 transition-colors hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
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
              {/* Option Sectecd */}
              <div className="form-control">
                <label className="label" htmlFor="category">
                  <span className="label-text text-lg font-semibold">
                    Service Category :
                  </span>
                </label>
                <Controller
                  name="category"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Service category is required",
                  }}
                  render={({ field, fieldState }) => {
                    const { error } = fieldState;

                    return (
                      <div className="relative">
                        <select
                          {...field}
                          className={`select select-primary w-full border rounded px-3 py-2 text-gray-700 transition-colors hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                            error ? "border-red-500" : "border-gray-300"
                          }`}
                        >
                          <option value="" disabled>
                            Choose Your Service Category?
                          </option>
                          <option value="game">Game of Thrones</option>
                          <option value="lost">Lost</option>
                          <option value="bad">Breaking Bad</option>
                          <option value="dead">Walking Dead</option>
                        </select>
                        {error && (
                          <p className="text-red-500 text-sm mt-1">
                            {error.message}
                          </p>
                        )}
                      </div>
                    );
                  }}
                />
              </div>

              <div className="form-control">
                <label className="label" htmlFor="text">
                  <span className="label-text text-lg font-semibold">
                    Message :
                  </span>
                </label>
                <Controller
                  name="text"
                  control={control}
                  rules={{
                    required: "Message is required",
                    pattern: {
                      value: /^[a-zA-Z\s]+$/, // শুধু অক্ষর ও স্পেসের জন্য প্যাটার্ন
                      message: "Message must contain only letters",
                    },
                  }}
                  render={({ field, fieldState }) => {
                    const { error } = fieldState;

                    return (
                      <div className="relative">
                        <input
                          {...field}
                          id="text"
                          className={`w-full h-20 border rounded px-3 py-2 text-gray-700 transition-colors hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                            error
                              ? "border-red-500"
                              : field.value
                              ? "border-green-500"
                              : "border-gray-300"
                          }`}
                          placeholder="Enter Repair Requirements"
                          aria-invalid={!!error}
                          aria-describedby="text-feedback"
                        />
                        {error ? (
                          <p
                            id="text-feedback"
                            className="text-red-500 text-sm mt-1"
                          >
                            {error.message}
                          </p>
                        ) : field.value ? (
                          <p
                            id="text-feedback"
                            className="text-green-500 text-sm mt-1"
                          >
                            Message is valid!
                          </p>
                        ) : null}
                      </div>
                    );
                  }}
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceRequest;
