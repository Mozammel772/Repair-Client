import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
  const { image, title, location, price, providerLogo } = service;

  const handleCardClick = () => {
    navigate(`/all-repair-services/${service._id}`);
  };

  const handleBookAppointment = (service) => {
    console.log(service);
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
              onClick={() => handleBookAppointment(service)}
              className="mt-4 w-full bg-orange-500 text-xl font-semibold text-white py-3 px-4 rounded-lg shadow hover:bg-orange-600"
            >
              <span>Book Appoinment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
