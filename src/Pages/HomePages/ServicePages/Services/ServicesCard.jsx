// import { useQuery } from "@tanstack/react-query";
// import React from "react";
// import CoverSection from "../../../../Components/CoverSection/CoverSection";
// import SectionTittle from "../../../../Components/SectionTittle/SectionTittle";
// import image from "../../../../assets/about/ac-repair.jpg";
// import useAxioPublic from "../../../../hooks/useAxiosPublic/useAxiosPublic";

// const ServicesCategory = () => {
//   const axiosPublic = useAxioPublic();
//   const {
//     data: servicesCategory = [],
//     isLoading,
//     isError,
//     error,
//     refetch,
//   } = useQuery({
//     queryKey: ["servicesCategory"],
//     queryFn: async () => {
//       const response = await axiosPublic.get("/category");
//       return response.data;
//     },
//   });

//   const handleAddtoCard = (id) => {
//     console.log("first add to card", id);
//   };

//   return (
//     <div>
//       {/* Cover Section */}
//       <div className="mt-20">
//         <CoverSection
//           img={image}
//           tittle={"All Repair Items Post"}
//           subTittle={
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veritatis perferendis aut quasi quam corrupti adipisci error velit quas, omnis reprehenderit similique earum necessitatibus expedita minus, enim maiores incidunt neque."
//           }
//         />
//       </div>

//       {/* Section Title */}
//       <div>
//         <SectionTittle
//           heading={"Ac Repair Service"}
//           subHeading={"All Repair Service Items"}
//         />
//       </div>

//       {/* Loading State */}
//       {isLoading && (
//         <div className="flex justify-center items-center h-40">
//           <div className="loader border-t-4 border-blue-500 w-10 h-10 rounded-full animate-spin"></div>
//         </div>
//       )}

//       {/* Error State */}
//       {isError && (
//         <div className="text-center py-5 font-bold text-red-500 text-lg mt-5">
//           {error?.message || "Failed to load services. Please try again later."}
//           <button
//             onClick={refetch}
//             className="ml-3 text-blue-500 underline btn"
//           >
//             Retry
//           </button>
//         </div>
//       )}

//       {/* No Data State */}
//       {!isLoading && !isError && servicesCategory.length === 0 && (
//         <div className="text-center text-gray-500 text-lg m-5">
//           No service items available at the moment.
//         </div>
//       )}

//       {/* Display Services */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 my-20">
//         {servicesCategory.map((service) => (
//           <div
//             key={service._id}
//             className="card card-compact bg-base-100 w-full shadow-xl "
//           >
//             <figure>
//               <img
//                 className="w-full "
//                 src={
//                   service.image || "https://i.ibb.co.com/KrRmZk7/Ac-repair.jpg"
//                 }
//                 alt="Service Item"
//               />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title ">
//                 <span className="text-xl font-mono">Service Name: </span>
//                 <span className="uppercase text-orange-500 font-bold ">
//                   {service.service}!
//                 </span>
//               </h2>
//               <p>
//                 <span className="text-md">{service.description}</span>
//               </p>
//               <p>{service.email}</p>
//               <p>
//                 <span className="text-md font-serif">Published Date : </span>
//                 {service.createdAt}
//               </p>
//               <button
//                 className="btn btn-secondary w-full"
//                 onClick={() => handleAddtoCard(service)}
//               >
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicesCategory;

import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
  const { image, title, location, price, providerLogo } = service;

  const handleCardClick = () => {
    navigate(`/all-repair-services/${service._id}`);
  };

  return (
    <div>
      <div className="card card-compact bg-base-500 w-full shadow-xl h-full">
        <figure className="cursor-pointer" onClick={handleCardClick}>
          <img src={image} alt={title} className="w-full h-52 object-cover" />
        </figure>
        <div className="card-body">
          <p className="text-orange-500 text-md mb-2 flex items-center gap-2">
            <FaLocationDot />
            {location || "Location not available"}
          </p>
          <h3
            onClick={handleCardClick}
            className="text-2xl font-bold text-gray-800 cursor-pointer"
          >
            {title}
          </h3>
          <p className="text-green-600  font-medium ">
            <span className="text-xl">Starting at</span>{" "}
            <span className="text-2xl font-bold text-orange-500">
              ৳ {price}
            </span>
          </p>
          <div className="divider mb-0"></div>
          <div className="flex justify-between items-center ">
            <div className="flex items-center">
              <div class="avatar online">
                <div class="w-12 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <p className="ml-2 text-gray-500 text-2xl uppercase font-semibold">
                {service.providerName || "Repair"}
              </p>
            </div>
            <div>
              <p>{"Rating"}</p>
            </div>
          </div>
          <div className="divider mt-0"></div>
          <div className="card-actions">
            <button
              onClick={() => console.log("Service added to cart:", service)}
              className="flex justify-center items-start gap-2 mt-4 w-full bg-orange-500 text-xl font-semibold text-white py-3 px-4 rounded-lg shadow hover:bg-orange-600"
            ><span>
                <FaShoppingCart className="mt-1"></FaShoppingCart>
              </span>
              <span> Add To Card</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
