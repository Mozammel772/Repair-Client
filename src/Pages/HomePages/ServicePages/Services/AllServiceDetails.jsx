// import { useQuery } from "@tanstack/react-query";
// import React, { useEffect, useState } from "react";
// import { Controller, useForm } from "react-hook-form";
// import { FcRating } from "react-icons/fc";
// import { TiTickOutline } from "react-icons/ti";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import Swal from "sweetalert2";
// import useAuth from "../../../../hooks/useAuth/useAuth";
// import useAxioPublic from "../../../../hooks/useAxiosPublic/useAxiosPublic";

// const AllServiceDetails = ({ service }) => {
//   const [review, setReviws] = useState([]);
//   const { title, image, price } = service;
//   const { user } = useAuth();
//   const axiosPublic = useAxioPublic();
//   const {
//     control,
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const handleBookAppointment = (service) => {
//     console.log(service);
//   };

//   // Reviwes Post
//   const onSubmit = (data) => {
//     console.log(data);
//     const postInfo = {
//       rating: data.rating,
//       ratingmessage: data.ratingMessage,
//       email: user?.email,
//       name: user?.displayName || user?.name || "unknown Users",
//       photo:
//         user?.photoURL || "https://i.ibb.co.com/Qfy0YwR/react-developer.jpg",
//       service: service._id,
//     };
//     console.log("postInfo: ", postInfo);
//     axiosPublic.post(`/reviews`, postInfo).then((res) => {
//       console.log("Success", res.data);
//       if (res.data.insertedId) {
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "Post successfully",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//       }
//     });
//   };
//   // reviwes get
//   const {
//     data: reviews = [],
//     isLoading,
//     isError,
//     error,
//     refetch,
//   } = useQuery({
//     queryKey: ["reviews"],
//     queryFn: async () => {
//       const response = await axiosPublic.get("/reviews");
//       refetch();
//       return response.data;
//     },
//   });
//   console.log(reviews);

//   useEffect(() => {
//     if (reviews.length > 0) {
//       refetch();
//       setReviws(reviews.filter((rev) => rev.service === service._id));
//     }
//   }, [reviews, service._id]);

//   // Calculate average rating
//   const calculateAverageRating = () => {
//     const totalRating = review.reduce((acc, rev) => acc + rev.rating, 0);
//     return totalRating / review.length || 0;
//   };

//   return (
//     <div>
//       <div className="bg-base-200 mb-20 rounded-md">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <div className="w-full lg:w-[500px] lg:mt-16">
//             <div className="card bg-base-100 lg:w-[500px] lg:h-[360px] shadow-xl">
//               <div className="flex justify-between items-center p-10">
//                 <h2 className="card-title text-2xl font-bold uppercase">
//                   Package
//                 </h2>
//                 <h2 className="text-2xl font-bold">
//                   <span className="text-4xl">৳</span>{" "}
//                   {price || "No Available Price"}
//                 </h2>
//               </div>
//               <div className="text-xl font-semibold px-10">
//                 <h1 className="my-2">Available Service Packages</h1>
//                 <div className="flex items-center gap-2">
//                   <span className="my-2">
//                     <TiTickOutline color="orange" size="30" />
//                   </span>
//                   <h2 className="text-gray-500">{title}</h2>
//                 </div>
//                 <div className="card-actions my-10">
//                   <button
//                     onClick={() => handleBookAppointment(service)}
//                     className="mt-4 w-full bg-orange-500 text-xl font-semibold text-white py-3 px-4 rounded-lg shadow hover:bg-orange-600"
//                   >
//                     <span>Book Appointment</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="lg:w-[500px] shadow-xl">
//               <div className="flex items-center gap-2 bg-green-200 text-xl font-semibold py-5 rounded-md my-5 px-10">
//                 <h1>
//                   <TiTickOutline color="orange" size="30"></TiTickOutline>
//                 </h1>
//                 <h1>20 Order Completed</h1>
//               </div>
//             </div>
//             <div className="lg:w-[500px] shadow-xl">
//               <div className="flex items-center gap-2 bg-red-200 text-xl font-semibold py-5 rounded-md my-5 px-10">
//                 <h1>
//                   <FcRating color="orange" size="30"></FcRating>
//                 </h1>
//                 <h1>Seller Rating : 100 %</h1>
//               </div>
//             </div>
//           </div>

//           <div className="w-full lg:w-[700px]">
//             <div>
//               <figure>
//                 <img className="w-full rounded-md" src={image} alt="Album" />
//               </figure>
//               <div>
//                 <div className="flex items-center my-5">
//                   <div className="flex items-center">
//                     <div class="avatar online">
//                       <div class="w-12 rounded-full">
//                         <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//                       </div>
//                     </div>
//                     <p className="ml-2 text-gray-500 text-2xl uppercase font-semibold">
//                       Repair
//                     </p>
//                   </div>
//                   <div className="ml-20">
//                     <p>Rating:{review.length}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Overview Section */}
//         <div className="w-full lg:w-[55%]">
//           <div className="divider"></div>
//           <div className="h-full mb-52">
//             <Tabs>
//               <TabList className="flex gap-10 text-xl text-gray-500 border-b-2 border-orange-500 pb-2">
//                 <Tab className="cursor-pointer py-2 px-4 hover:bg-orange-500 rounded-md transition-all duration-300 ease-in-out">
//                   Overview
//                 </Tab>
//                 <Tab className="cursor-pointer py-2 px-4 hover:bg-orange-500 rounded-md transition-all duration-300 ease-in-out">
//                   About Seller
//                 </Tab>
//                 <Tab className="cursor-pointer py-2 px-4 hover:bg-orange-500 rounded-md transition-all duration-300 ease-in-out">
//                   Reviews
//                 </Tab>
//               </TabList>

//               <TabPanel>
//                 <h2 className="text-lg text-gray-700 bg-white p-10 rounded-md">
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's
//                   standard dummy text ever since the 1500s, when an unknown
//                   printer took a galley of type and scrambled it to make a type
//                   specimen book.
//                 </h2>
//               </TabPanel>
//               <TabPanel>
//                 <h2 className="text-lg text-gray-700 bg-white p-10 rounded-md">
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's
//                   standard dummy text ever since the 1500s, when an unknown
//                   printer took a galley of type and scrambled it to make a type
//                   specimen book.
//                 </h2>
//               </TabPanel>
//               <TabPanel>
//                 <h2 className="text-lg text-gray-700 bg-white p-10 rounded-md">
//                   <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//                     {/* Star Rating */}
//                     <div className="form-control">
//                       <label className="label" htmlFor="rating">
//                         <span className="label-text text-lg font-semibold">
//                           Rating:
//                         </span>
//                       </label>
//                       <Controller
//                         name="rating"
//                         control={control}
//                         rules={{
//                           required: "Please select a rating",
//                           min: {
//                             value: 1,
//                             message: "Please select at least 1 star",
//                           },
//                           max: {
//                             value: 5,
//                             message: "Please select no more than 5 stars",
//                           },
//                         }}
//                         render={({ field, fieldState }) => {
//                           const { error } = fieldState;
//                           return (
//                             <div className="relative flex space-x-2">
//                               {[1, 2, 3, 4, 5].map((star) => (
//                                 <svg
//                                   key={star}
//                                   onClick={() => field.onChange(star)}
//                                   className={`w-8 h-8 cursor-pointer ${
//                                     star <= (field.value || 0)
//                                       ? "text-yellow-500"
//                                       : "text-gray-300"
//                                   }`}
//                                   fill="currentColor"
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   viewBox="0 0 24 24"
//                                 >
//                                   <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                                 </svg>
//                               ))}
//                               {error && (
//                                 <p className="text-red-500 text-sm mt-1">
//                                   {error.message}
//                                 </p>
//                               )}
//                             </div>
//                           );
//                         }}
//                       />
//                     </div>

//                     {/* Message */}
//                     {/* <div className="form-control">
//                       <label className="label" htmlFor="message">
//                         <span className="label-text text-lg font-semibold">Message:</span>
//                       </label>
//                       <Controller
//                         name="message"
//                         control={control}
//                         rules={{
//                           required: "Message is required",
//                           minLength: { value: 10, message: "Message must be at least 10 characters" },
//                           maxLength: { value: 1000, message: "Message cannot exceed 1000 characters" },
//                         }}
//                         render={({ field, fieldState }) => {
//                           const { error } = fieldState;
//                           return (
//                             <div className="relative">
//                               <textarea
//                                 {...field}
//                                 id="message"
//                                 className={`w-full h-20 border rounded px-3 py-2 text-gray-700 transition-colors hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
//                                   error ? "border-red-500" : field.value ? "border-green-500" : "border-gray-300"
//                                 }`}
//                                 placeholder="Enter Repair Requirements"
//                                 aria-invalid={!!error}
//                                 aria-describedby="message-feedback"
//                               />
//                               {error ? (
//                                 <p id="message-feedback" className="text-red-500 text-sm mt-1">
//                                   {error.message}
//                                 </p>
//                               ) : field.value ? (
//                                 <p id="message-feedback" className="text-green-500 text-sm mt-1">
//                                   Message is valid!
//                                 </p>
//                               ) : null}
//                             </div>
//                           );
//                         }}
//                       />
//                     </div> */}
//                     <div className="form-control">
//                       <label className="label" htmlFor="ratingMessage">
//                         <span className="label-text text-lg font-semibold">
//                           Your Review Message:
//                         </span>
//                       </label>
//                       <Controller
//                         name="ratingMessage"
//                         control={control}
//                         rules={{
//                           required: "Message is required",
//                           minLength: {
//                             value: 10,
//                             message: "Message must be at least 10 characters",
//                           },
//                           maxLength: {
//                             value: 1000,
//                             message: "Message cannot exceed 1000 characters",
//                           },
//                         }}
//                         render={({ field, fieldState }) => {
//                           const { error } = fieldState;
//                           return (
//                             <div className="relative">
//                               <textarea
//                                 {...field}
//                                 id="ratingMessage"
//                                 className={`w-full h-20 border rounded px-3 py-2 text-gray-700 transition-colors hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
//                                   error
//                                     ? "border-red-500"
//                                     : field.value
//                                     ? "border-green-500"
//                                     : "border-gray-300"
//                                 }`}
//                                 placeholder="Enter your message or review"
//                                 aria-invalid={!!error}
//                                 aria-describedby="rating-message-feedback"
//                               />
//                               {error ? (
//                                 <p
//                                   id="rating-message-feedback"
//                                   className="text-red-500 text-sm mt-1"
//                                 >
//                                   {error.message}
//                                 </p>
//                               ) : field.value ? (
//                                 <p
//                                   id="rating-message-feedback"
//                                   className="text-green-500 text-sm mt-1"
//                                 >
//                                   Message is valid!
//                                 </p>
//                               ) : null}
//                             </div>
//                           );
//                         }}
//                       />
//                     </div>

//                     <div className="form-control mt-6">
//                       <input
//                         className="mt-4 w-full bg-orange-500 text-xl font-semibold text-white py-3 px-4 rounded-lg shadow hover:bg-orange-600"
//                         type="submit"
//                         value="Submit Message"
//                       />
//                     </div>
//                   </form>
//                 </h2>
//               </TabPanel>
//             </Tabs>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllServiceDetails;

// import { useQuery } from "@tanstack/react-query";
// import React, { useEffect, useState } from "react";
// import { Controller, useForm } from "react-hook-form";
// import { FaRegStar, FaStar } from "react-icons/fa"; // Importing star icons
// import { TiTickOutline } from "react-icons/ti";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import Swal from "sweetalert2";
// import useAuth from "../../../../hooks/useAuth/useAuth";
// import useAxioPublic from "../../../../hooks/useAxiosPublic/useAxiosPublic";

// const AllServiceDetails = ({ service }) => {
//   const [review, setReviws] = useState([]);
//   const { title, image, price } = service;
//   const { user } = useAuth();
//   const axiosPublic = useAxioPublic();
//   const {
//     control,
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const handleBookAppointment = (service) => {
//     console.log(service);
//   };

//   // Reviwes Post
//   const onSubmit = (data) => {
//     console.log(data);
//     const postInfo = {
//       rating: data.rating,
//       ratingmessage: data.ratingMessage,
//       email: user?.email,
//       name: user?.displayName || user?.name || "unknown Users",
//       photo:
//         user?.photoURL || "https://i.ibb.co.com/Qfy0YwR/react-developer.jpg",
//       service: service._id,
//     };
//     console.log("postInfo: ", postInfo);
//     axiosPublic.post(`/reviews`, postInfo).then((res) => {
//       console.log("Success", res.data);
//       if (res.data.insertedId) {
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "Post successfully",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//         refetch(); // Fetch the latest reviews after posting a new one
//       }
//     });
//   };

//   // Reviews get
//   const {
//     data: reviews = [],
//     isLoading,
//     isError,
//     error,
//     refetch,
//   } = useQuery({
//     queryKey: ["reviews", service._id], // To refetch reviews specific to a service
//     queryFn: async () => {
//       const response = await axiosPublic.get("/reviews");
//       return response.data;
//     },
//   });

//   useEffect(() => {
//     if (reviews.length > 0) {
//       setReviws(reviews.filter((rev) => rev.service === service._id));
//     }
//   }, [reviews, service._id]);

//   // Calculate average rating
//   const calculateAverageRating = () => {
//     const totalRating = review.reduce((acc, rev) => acc + rev.rating, 0);
//     return totalRating / review.length || 0;
//   };

//   return (
//     <div>
//       <div className="bg-base-200 mb-20 rounded-md">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <div className="w-full lg:w-[500px] lg:mt-16">
//             <div className="card bg-base-100 lg:w-[500px] lg:h-[360px] shadow-xl">
//               <div className="flex justify-between items-center p-10">
//                 <h2 className="card-title text-2xl font-bold uppercase">Package</h2>
//                 <h2 className="text-2xl font-bold">
//                   <span className="text-4xl">৳</span> {price || "No Available Price"}
//                 </h2>
//               </div>
//               <div className="text-xl font-semibold px-10">
//                 <h1 className="my-2">Available Service Packages</h1>
//                 <div className="flex items-center gap-2">
//                   <span className="my-2">
//                     <TiTickOutline color="orange" size="30" />
//                   </span>
//                   <h2 className="text-gray-500">{title}</h2>
//                 </div>
//                 <div className="card-actions my-10">
//                   <button
//                     onClick={() => handleBookAppointment(service)}
//                     className="mt-4 w-full bg-orange-500 text-xl font-semibold text-white py-3 px-4 rounded-lg shadow hover:bg-orange-600"
//                   >
//                     <span>Book Appointment</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//             {/* Order completed */}
//             <div className="lg:w-[500px] shadow-xl">
//               <div className="flex items-center gap-2 bg-green-200 text-xl font-semibold py-5 rounded-md my-5 px-10">
//                 <h1>
//                   <TiTickOutline color="orange" size="30" />
//                 </h1>
//                 <h1>20 Order Completed</h1>
//               </div>
//             </div>
//             {/* Seller Rating */}
//             <div className="lg:w-[500px] shadow-xl">
//               <div className="flex items-center gap-2 bg-red-200 text-xl font-semibold py-5 rounded-md my-5 px-10">
//                 <h1>
//                   <FaStar color="orange" size="30" />
//                 </h1>
//                 <h1>Seller Rating: {calculateAverageRating().toFixed(1)} / 5</h1>
//               </div>
//             </div>
//           </div>

//           <div className="w-full lg:w-[700px]">
//             <div>
//               <figure>
//                 <img className="w-full rounded-md" src={image} alt="Service" />
//               </figure>
//               <div>
//                 <div className="flex items-center my-5">
//                   <div className="flex items-center">
//                     <div className="avatar online">
//                       <div className="w-12 rounded-full">
//                         <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//                       </div>
//                     </div>
//                     <p className="ml-2 text-gray-500 text-2xl uppercase font-semibold">
//                       Repair
//                     </p>
//                   </div>
//                   <div className="ml-20">
//                     <p>{calculateAverageRating().toFixed(1)} / 5</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Overview Section */}
//         <div className="w-full lg:w-[55%]">
//           <div className="divider"></div>
//           <div className="h-full mb-52">
//             <Tabs>
//               <TabList className="flex gap-10 text-xl text-gray-500 border-b-2 border-orange-500 pb-2">
//                 <Tab className="cursor-pointer py-2 px-4 hover:bg-orange-500 rounded-md transition-all duration-300 ease-in-out">
//                   Overview
//                 </Tab>
//                 <Tab className="cursor-pointer py-2 px-4 hover:bg-orange-500 rounded-md transition-all duration-300 ease-in-out">
//                   About Seller
//                 </Tab>
//                 <Tab className="cursor-pointer py-2 px-4 hover:bg-orange-500 rounded-md transition-all duration-300 ease-in-out">
//                   Reviews
//                 </Tab>
//               </TabList>

//               <TabPanel>
//                 <h2 className="text-lg text-gray-700 bg-white p-10 rounded-md">
//                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 </h2>
//               </TabPanel>
//               <TabPanel>
//                 <h2 className="text-lg text-gray-700 bg-white p-10 rounded-md">
//                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 </h2>
//               </TabPanel>
//               <TabPanel>
//                 <h2 className="text-lg text-gray-700 bg-white p-10 rounded-md">
//                   <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//                     {/* Star Rating */}
//                     <div className="form-control">
//                       <label className="label" htmlFor="rating">
//                         <span className="label-text text-lg font-semibold">
//                           Rating:
//                         </span>
//                       </label>
//                       <Controller
//                         name="rating"
//                         control={control}
//                         rules={{
//                           required: "Please select a rating",
//                           min: { value: 1, message: "Please select at least 1 star" },
//                           max: { value: 5, message: "Please select no more than 5 stars" },
//                         }}
//                         render={({ field, fieldState }) => {
//                           const { error } = fieldState;
//                           return (
//                             <div className="relative flex space-x-2">
//                               {[1, 2, 3, 4, 5].map((star) => (
//                                 <div
//                                   key={star}
//                                   onClick={() => field.onChange(star)}
//                                   className="cursor-pointer"
//                                 >
//                                   {star <= (field.value || 0) ? (
//                                     <FaStar size={30} color="orange" />
//                                   ) : (
//                                     <FaRegStar size={30} />
//                                   )}
//                                 </div>
//                               ))}
//                               {error && <p className="text-red-500 text-sm">{error.message}</p>}
//                             </div>
//                           );
//                         }}
//                       />
//                     </div>

//                     {/* Rating Message */}
//                     <div className="form-control">
//                       <label className="label" htmlFor="ratingMessage">
//                         <span className="label-text">Review Message:</span>
//                       </label>
//                       <textarea
//                         {...register("ratingMessage", { required: true })}
//                         placeholder="Share your experience"
//                         className="textarea textarea-bordered"
//                       />
//                     </div>

//                     {/* Submit */}
//                     <div className="form-control mt-6">
//                       <button type="submit" className="btn btn-primary text-xl">
//                         Submit Review
//                       </button>
//                     </div>
//                   </form>

//                   <div className="reviews-section">
//                     {review.length === 0 && <p>No reviews yet.</p>}
//                     {review.map((rev, index) => (
//                       <div key={index} className="review-card my-4">
//                         <div className="flex justify-between">
//                           <p className="font-bold">{rev.name}</p>
//                           <div className="flex items-center">
//                             {[1, 2, 3, 4, 5].map((star) => (
//                               <div key={star}>
//                                 {star <= rev.rating ? (
//                                   <FaStar size={20} color="orange" />
//                                 ) : (
//                                   <FaRegStar size={20} />
//                                 )}
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                         <p>{rev.ratingmessage}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </h2>
//               </TabPanel>
//             </Tabs>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllServiceDetails;

import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaRegStar, FaStar } from "react-icons/fa"; // Importing star icons
import { FcRating } from "react-icons/fc";
import { TiTickOutline } from "react-icons/ti";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth/useAuth";
import useAxioPublic from "../../../../hooks/useAxiosPublic/useAxiosPublic";

const AllServiceDetails = ({ service }) => {
  const [review, setReviws] = useState([]);
  const { title, image, price } = service;
  const { user } = useAuth();
  const axiosPublic = useAxioPublic();
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleBookAppointment = (service) => {
    console.log(service);
  };

  // Reviwes Post
  const onSubmit = (data) => {
    console.log(data);
    const postInfo = {
      rating: data.rating,
      ratingmessage: data.ratingMessage,
      email: user?.email,
      name: user?.displayName || user?.name || "unknown Users",
      photo:
        user?.photoURL || "https://i.ibb.co.com/Qfy0YwR/react-developer.jpg",
      service: service._id,
    };
    console.log("postInfo: ", postInfo);
    axiosPublic.post(`/reviews`, postInfo).then((res) => {
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

  // Reviews Get
  const {
    data: reviews = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const response = await axiosPublic.get("/reviews");
      refetch();
      return response.data;
    },
  });

  useEffect(() => {
    if (reviews.length > 0) {
      refetch();
      setReviws(reviews.filter((rev) => rev.service === service._id));
    }
  }, [reviews, service._id]);

  // Calculate average rating
  const calculateAverageRating = () => {
    const totalRating = review.reduce((acc, rev) => acc + rev.rating, 0);
    return totalRating / review.length || 0;
  };

  // Render star rating
  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} size={20} color="orange" />); // Filled star
      } else {
        stars.push(<FaRegStar key={i} size={20} color="orange" />); // Empty star
      }
    }
    return stars;
  };

  return (
    <div>
      <div className="bg-base-200 mb-20 rounded-md">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-full lg:w-[500px] lg:mt-16">
            <div className="card bg-base-100 lg:w-[500px] lg:h-[360px] shadow-xl">
              <div className="flex justify-between items-center p-10">
                <h2 className="card-title text-2xl font-bold uppercase">
                  Package
                </h2>
                <h2 className="text-2xl font-bold">
                  <span className="text-4xl">৳</span>{" "}
                  {price || "No Available Price"}
                </h2>
              </div>
              <div className="text-xl font-semibold px-10">
                <h1 className="my-2">Available Service Packages</h1>
                <div className="flex items-center gap-2">
                  <span className="my-2">
                    <TiTickOutline color="orange" size="30" />
                  </span>
                  <h2 className="text-gray-500">{title}</h2>
                </div>
                <div className="card-actions my-10">
                  <button
                    onClick={() => handleBookAppointment(service)}
                    className="mt-4 w-full bg-orange-500 text-xl font-semibold text-white py-3 px-4 rounded-lg shadow hover:bg-orange-600"
                  >
                    <span>Book Appointment</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-[500px] shadow-xl">
              <div className="flex items-center gap-2 bg-green-200 text-xl font-semibold py-5 rounded-md my-5 px-10">
                <h1>
                  <TiTickOutline color="orange" size="30" />
                </h1>
                <h1>20 Order Completed</h1>
              </div>
            </div>
            <div className="lg:w-[500px] shadow-xl">
              <div className="flex items-center gap-2 bg-red-200 text-xl font-semibold py-5 rounded-md my-5 px-10">
                <h1>
                  <FcRating color="orange" size="30" />
                </h1>
                <h1>Seller Rating : 100 %</h1>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[700px]">
            <div>
              <figure>
                <img className="w-full rounded-md" src={image} alt="Album" />
              </figure>
              <div>
                <div className="flex items-center my-5">
                  <div className="flex items-center">
                    <div class="avatar online">
                      <div class="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <p className="ml-2 text-gray-500 text-2xl uppercase font-semibold">
                      Repair
                    </p>
                  </div>
                  <div className="ml-20">
                    <p className="flex items-center gap-2">
                      {renderRatingStars(calculateAverageRating())}
                      <span className="font-bold">({review.length})</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="w-full lg:w-[55%]">
          <div className="divider"></div>
          <div className="h-full mb-52">
            <Tabs>
              <TabList className="flex gap-10 text-xl text-gray-500 border-b-2 border-orange-500 pb-2">
                <Tab className="cursor-pointer py-2 px-4 hover:bg-orange-500 rounded-md transition-all duration-300 ease-in-out">
                  Overview
                </Tab>
                <Tab className="cursor-pointer py-2 px-4 hover:bg-orange-500 rounded-md transition-all duration-300 ease-in-out">
                  About Seller
                </Tab>
                <Tab className="cursor-pointer py-2 px-4 hover:bg-orange-500 rounded-md transition-all duration-300 ease-in-out">
                  Reviews
                </Tab>
              </TabList>

              <TabPanel>
                <h2 className="text-lg text-gray-700 bg-white p-10 rounded-md">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </h2>
              </TabPanel>
              <TabPanel>
                <h2 className="text-lg text-gray-700 bg-white p-10 rounded-md">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </h2>
              </TabPanel>
              <TabPanel>
                <h2 className="text-lg text-gray-700 bg-white p-10 rounded-md">
                  <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    {/* Star Rating */}
                    <div className="form-control">
                      <label className="label" htmlFor="rating">
                        <span className="label-text text-lg font-semibold">
                          Rating:
                        </span>
                      </label>
                      <Controller
                        name="rating"
                        control={control}
                        rules={{
                          required: "Please select a rating",
                          min: {
                            value: 1,
                            message: "Rating must be at least 1",
                          },
                          max: {
                            value: 5,
                            message: "Rating can't be more than 5",
                          },
                        }}
                        render={({ field }) => (
                          <input
                            type="number"
                            className="input input-bordered"
                            {...field}
                            min="1"
                            max="5"
                            placeholder="Enter Rating"
                          />
                        )}
                      />
                      {errors.rating && (
                        <p className="text-red-500">{errors.rating.message}</p>
                      )}
                    </div>

                    {/* Rating Message */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-lg font-semibold">
                          Message:
                        </span>
                      </label>
                      <textarea
                        className="textarea textarea-bordered h-32"
                        placeholder="Your review"
                        {...register("ratingMessage")}
                      ></textarea>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary" type="submit">
                        Submit Review
                      </button>
                    </div>
                  </form>
                </h2>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServiceDetails;
