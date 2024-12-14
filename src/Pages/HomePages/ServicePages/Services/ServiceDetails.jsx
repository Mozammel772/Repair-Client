import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SectionTittle from "../../../../Components/SectionTittle/SectionTittle";
import useAxioPublic from "../../../../hooks/useAxiosPublic/useAxiosPublic";
import AllServiceDetails from "./AllServiceDetails";

const ServiceDetails = () => {
  const [serviceDetails, setServiceDetails] = useState([]);
  const axiosPublic = useAxioPublic();
  const { id } = useParams();
  console.log("Service Details", id);
  const {
    data: services = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const response = await axiosPublic.get("/services");
      return response.data;
    },
  });

  useEffect(() => {
    if (services.length > 0) {
      const filtered = services.filter((service) => service._id === id);
      setServiceDetails(filtered);
    }
  }, [services]);

  console.log("user Details", serviceDetails);

  return (
    <div className="mt-20">
      <div>
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

        {/* Display Services */}
        <div className="">
          {serviceDetails.map((service) => (
            <AllServiceDetails
              service={service}
              key={service._id}
            ></AllServiceDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
