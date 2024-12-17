import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import image from "../../../../assets/about/ac-repair.jpg";
import ac from "../../../../assets/all-service-image/ac.png";
import electrical from "../../../../assets/all-service-image/electrical.png";
import refrigerator from "../../../../assets/all-service-image/refegaretor.png";
import CoverSection from "../../../../Components/CoverSection/CoverSection";
import SectionTittle from "../../../../Components/SectionTittle/SectionTittle";
const AllServices = () => {
  const navigate = useNavigate();
  
  const handleElectricalbtn = () => {
    navigate("/all-repair-services/electrical-repair-service");
  };
  const handleAcbtn = () => {
    navigate("all-repair-service/ac-repair-service");
  };
  const handleRefrigeratorbtn = () => {
    navigate("all-repair-service/refrigerator-repair-service");
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
          heading={"All Repair Service"}
          subHeading={"All Repair Service Items"}
        />
      </div>
      {/* Display Services */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div
          onClick={handleElectricalbtn}
          className="card bg-base-100 shadow-2xl hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          <figure>
            <img
              className="w-full h-64 object-cover"
              src={electrical}
              alt="Electrical Service"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl uppercase text-orange-500">
              Electrical Service <FaArrowRight className="ml-2" />
            </h2>
          </div>
        </div>
        
        <div
          onClick={handleAcbtn}
          className="card bg-base-100 shadow-2xl hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          <figure>
            <img
              className="w-full h-64 object-cover"
              src={ac}
              alt="Ac Service"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl uppercase text-orange-500">
              Ac Repair Service <FaArrowRight className="ml-2" />
            </h2>
          </div>
        </div>
        <div
          onClick={handleRefrigeratorbtn}
          className="card bg-base-100 shadow-2xl hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          <figure>
            <img
              className="w-full h-64 object-cover"
              src={refrigerator}
              alt="Refrigerator Service"
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-xl uppercase text-orange-500">
              Refrigerator Service <FaArrowRight className="ml-2" />
            </h2>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default AllServices;
