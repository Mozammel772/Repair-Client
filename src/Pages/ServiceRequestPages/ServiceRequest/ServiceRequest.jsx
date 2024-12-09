import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import image from "../../../assets/about/ac-repair.jpg";
import CoverSection from "../../../Components/CoverSection/CoverSection";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import useAxioPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import { AuthContext } from "../../Register/AuthProvider/AuthProvider";
const ServiceRequest = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxioPublic();

  const onSubmit = (data) => {
    console.log(data);
    const postInfo = {
      Name: data.name,
      Phone: data.phone,
      Address: data.address,
      Email: data.email,
      ServiceType: data.serviceType,
      Description: data.message,
    };
    axiosPublic.post("/servicepost", postInfo).then((res) => {
      console.log("Success", res.data);

      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Post successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
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
              {/* Name Validation End */}
              <div className="form-control">
                <label className="label" htmlFor="name">
                  <span className="label-text text-lg font-semibold">
                    Phone :
                  </span>
                </label>
                <div>
                  <Controller
                    name="phone"
                    control={control}
                    rules={{
                      required: "Phone Number is required",
                      pattern: {
                        value: /^[0-9]{11}$/, // A basic phone number pattern (10 digits)
                        message:
                          "Invalid phone number. Please enter a 11-digit number.",
                      },
                    }}
                    render={({ field, fieldState }) => {
                      const { error } = fieldState;

                      return (
                        <div className="relative">
                          <input
                            {...field}
                            id="phone"
                            className={`w-full border rounded px-3 py-2 text-gray-700 transition-colors hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                              error
                                ? "border-red-500"
                                : field.value
                                ? "border-green-500"
                                : "border-gray-300"
                            }`}
                            placeholder="+880"
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
                              Phone Number is valid!
                            </p>
                          ) : null}
                        </div>
                      );
                    }}
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label" htmlFor="name">
                  <span className="label-text text-lg font-semibold">
                    Address :
                  </span>
                </label>
                <div>
                  <Controller
                    name="address"
                    control={control}
                    rules={{
                      required: "Address is required",
                      minLength: {
                        value: 10,
                        message: "Address must be at least 10 characters long",
                      },
                      maxLength: {
                        value: 100,
                        message: "Address cannot exceed 100 characters",
                      },
                    }}
                    render={({ field, fieldState }) => {
                      const { error } = fieldState;

                      return (
                        <div className="relative">
                          <input
                            {...field}
                            id="address"
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
                              id="address-feedback"
                              className="text-red-500 text-sm mt-1"
                            >
                              {error.message}
                            </p>
                          ) : field.value ? (
                            <p
                              id="name-feedback"
                              className="text-green-500 text-sm mt-1"
                            >
                              Address is valid!
                            </p>
                          ) : null}
                        </div>
                      );
                    }}
                  />
                </div>
              </div>
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
                  name="serviceType"
                  control={control}
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
                  name="message"
                  control={control}
                  rules={{
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                    maxLength: {
                      value: 1000,
                      message: "Message cannot exceed 1000 characters",
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
                  className="btn btn-primary text-xl"
                  type="submit"
                  value="Service Requst"
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
