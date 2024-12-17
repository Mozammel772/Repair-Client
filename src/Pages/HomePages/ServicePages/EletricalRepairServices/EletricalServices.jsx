import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import image from "../../../../assets/about/ac-repair.jpg";
import CoverSection from "../../../../Components/CoverSection/CoverSection";
import SectionTittle from "../../../../Components/SectionTittle/SectionTittle";
import useAxioPublic from "../../../../hooks/useAxiosPublic/useAxiosPublic";
import ServiceCard from "../Services/ServicesCard";

const EletricalServices = () => {
  const [service, setService] = useState([]);
  const axiosPublic = useAxioPublic();
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
      const servicesFilter = services.filter(
        (service) => service.serviceType === "Eletrical"
      );
      setService(servicesFilter);
    }
  }, [services]);

  const handleAddtoCard = (id) => {
    console.log("first add to card", id);
  };

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
          heading={"Electrical Repair Service"}
          subHeading={"Electrical Repair Service Items"}
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
        {service.map((service) => (
          <ServiceCard service={service} key={service._id}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default EletricalServices;
