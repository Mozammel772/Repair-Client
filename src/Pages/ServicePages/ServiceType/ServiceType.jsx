import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/about/ac-repair.jpg";
import CoverSection from "../../../Components/CoverSection/CoverSection";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import useAxiosrepair from "../../../hooks/useCategory/useCategory";
import Loading from "../../../Shared/Loading/Loading";

const ServiceType = () => {
  const repairData = useAxiosrepair();

  const {
    data: category = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await repairData.get("/category");
      if (!res.data) {
        throw new Error("No data found!");
      }
      return res.data;
    },
  });

  const handleimage = (id) => {
    
    console.log(id);
  };

  return (
    <div>
      {/* Cover Section */}
      <div className="mt-20">
        <CoverSection
          img={image}
          tittle="Repair Service"
          subTittle="Mend, repair, patch, rebuild mean to put into good order something that is injured, damaged, or defective. Mend implies making whole or sound something broken, torn, or injured. Repair applies to the fixing of more extensive damage or dilapidation."
        />
      </div>

      {/* Section Title */}
      <div>
        <SectionTittle
          heading="All Repair Service"
          subHeading="24 Hours All Repair Service"
        />
      </div>

      {/* Main Content */}
      <div>
        {/* Loading State */}
        {isLoading && <Loading />}

        {/* Error State */}
        {isError && (
          <p className="text-red-500 text-center text-xl font-bold py-5">
            {error?.response?.data?.message ||
              error?.message ||
              "Something went wrong!"}
          </p>
        )}

        {/* No Data Available */}
        {!isLoading && !isError && !category?.length > 0 && (
          <p className="text-gray-500 text-center text-lg font-medium py-5">
            No Available Data
          </p>
        )}

        {/* Data Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {category.map((item, index) => (
            <Link
              onClick={() => handleimage(item._id)}
              key={index}
              to={item._id ? `/all-category-repair/${item._id}` : "#"}
              className="card card-compact bg-base-100 w-full shadow-xl"
            >
              <figure>
                <img
                  src={item.image}
                  alt={`Repair Service for ${item.service}`}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl font-bold font-serif text-center">
                  {item.service}
                </h2>
                <p className="text-md font-medium text-center">
                  {item.totalService} + Service
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceType;
