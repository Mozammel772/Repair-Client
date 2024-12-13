import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import image from "../../../assets/about/ac-repair.jpg";
import CoverSection from "../../../Components/CoverSection/CoverSection";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import useAuth from "../../../hooks/useAuth/useAuth";
import useAxioPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";

const ServicePost = () => {
  const axiosPublic = useAxioPublic();
  const { user } = useAuth();

  const [acrepairService, setAcrepairService] = useState([]);
  const [electricalService, setElectricalService] = useState([]);
  // electricalservice
  const {
    data: services = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const response = await axiosPublic.get("/serviceposts");
      return response.data;
    },
  });

  // Filter services where ServiceType is "Ac-Repair"
  useEffect(() => {
    if (services.length > 0) {
      const filtered = services.filter(
        (service) => service.ServiceType === "ac-repair"
      );
      setAcrepairService(filtered);
    }
  }, [services]);

  useEffect(() => {
    if (services.length > 0) {
      const filtered = services.filter(
        (service) => service.ServiceType === "electrical-services"
      );
      setElectricalService(filtered);
    }
  }, [services]);

  return (
    <div>
      {/* Cover Section */}
      <div className="mt-20">
        <CoverSection
          img={image}
          tittle={"All Repair Items Post"}
          subTittle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veritatis perferendis aut quasi quam corrupti adipisci error velit quas, omnis reprehenderit similique earum necessitatibus expedita minus, enim maiores incidunt neque."
          }
        />
      </div>

      {/* Section Title */}
      <div>
        <SectionTittle
          heading={"Ac Repair Service"}
          subHeading={"All Repair Service Items"}
        />
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center h-40">
          <div className="loader border-t-4 border-blue-500 w-10 h-10 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="text-center py-5 font-bold text-red-500 text-lg mt-5">
          {error?.message || "Failed to load services. Please try again later."}
          <button
            onClick={refetch}
            className="ml-3 text-blue-500 underline btn"
          >
            Retry
          </button>
        </div>
      )}

      {/* No Data State */}
      {!isLoading && !isError && services.length === 0 && (
        <div className="text-center text-gray-500 text-lg m-5">
          No service items available at the moment.
        </div>
      )}

      {/* Display Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 my-20">
        {acrepairService.map((post) => (
          <div
            key={post._id}
            className="card card-compact bg-base-100 w-full shadow-2xl shadow-black"
          >
            <figure>
              <img
                className="w-full "
                src={post.image || "https://i.ibb.co.com/KrRmZk7/Ac-repair.jpg"}
                alt="Service Item"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title ">
                <span className="text-xl font-mono">Service Name: </span>
                <span className="uppercase text-orange-500 font-bold ">
                  {post.ServiceType}!
                </span>
              </h2>
              <p>
                <span className="text-md">{post.Description}</span>
              </p>
              <p>{post.email}</p>
              <p>
                <span className="text-md font-serif">Published Date : </span>
                {post.createdAt}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Eletrical service Type */}
      <div>
        {/* Section Title */}
        <div>
          <SectionTittle
            heading={"Electrical Service"}
            subHeading={"Electrical All Repair Service Items"}
          />
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center h-40">
            <div className="loader border-t-4 border-blue-500 w-10 h-10 rounded-full animate-spin"></div>
          </div>
        )}

        {/* Error State */}
        {isError && (
          <div className="text-center py-5 font-bold text-red-500 text-lg mt-5">
            {error?.message ||
              "Failed to load services. Please try again later."}
            <button
              onClick={refetch}
              className="ml-3 text-blue-500 underline btn"
            >
              Retry
            </button>
          </div>
        )}

        {/* No Data State */}
        {!isLoading && !isError && services.length === 0 && (
          <div className="text-center text-gray-500 text-lg m-5">
            No service items available at the moment.
          </div>
        )}

        {/* Display Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 my-20">
          {electricalService.map((post) => (
            <div
              key={post._id}
              className="card card-compact bg-base-100 w-full shadow-2xl shadow-black"
            >
              <figure>
                <img
                  className="w-full "
                  src={
                    post.image ||
                    "https://i.ibb.co.com/Th1rFWC/electricity.webp"
                  }
                  alt="Service Item"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title ">
                  <span className="text-xl font-mono">Service Name: </span>
                  <span className="uppercase text-orange-500 font-bold ">
                    {post.ServiceType}!
                  </span>
                </h2>
                <p>
                  <span className="text-md">{post.Description}</span>
                </p>
                <p>{post.email}</p>
                <p>
                  <span className="text-md font-serif">Published Date : </span>
                  {post.createdAt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePost;
