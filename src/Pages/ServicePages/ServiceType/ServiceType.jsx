import React from "react";
import image from "../../../assets/about/ac-repair.jpg";
import CoverSection from "../../../Components/CoverSection/CoverSection";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import useAxiosrepair from "../../../hooks/useCategory/useCategory";
const ServiceType = () => {
  const repairData = useAxiosrepair();
  console.log(repairData);
  return (
    <div>
      <div className="mt-20">
        <CoverSection img={image} tittle={"Repair Service"}></CoverSection>
      </div>
      <div>
        <SectionTittle
          heading={"All Repair Service"}
          subHeading={"24 Hours All Repair Service"}
        ></SectionTittle>
      </div>
    </div>
  );
};

export default ServiceType;
