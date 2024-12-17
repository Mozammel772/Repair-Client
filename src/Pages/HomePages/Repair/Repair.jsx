import React from "react";
import image from "../../../assets/repair/acrepair.jpg";
import CoverSection from "../../../Components/CoverSection/CoverSection";
const Repair = () => {
  return (
    <div className="my-10">
      <CoverSection
        img={image}
        tittle={"Ac Repair"}
        subTittle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, molestiae. Voluptatibus labore eligendi perspiciatis sit eius error totam veritatis! Sint minima animi laudantium maxime placeat repellendus temporibus architecto sapiente voluptas."
        }
      ></CoverSection>
    </div>
  );
};

export default Repair;
