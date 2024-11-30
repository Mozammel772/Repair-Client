import React from "react";
import image from "../../../assets/about/about.jpg";
import image1 from "../../../assets/about/ac-repair.jpg";
import CoverSection from "../../../Components/CoverSection/CoverSection";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import Button from "../../../Shared/Button/Button";
const AboutBanner = () => {
  return (
    <div>
      <div className="mt-20 bg-cover bg-no-repeat">
        <CoverSection img={image} tittle={"About Us "}></CoverSection>
      </div>
      <div>
        <SectionTittle
          heading={"About Us"}
          subHeading={"About Us More Information"}
        />
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={image1}
            className="max-w-sm lg:max-w-2xl rounded-lg shadow-2xl bg-cover bg-no-repeat"
          />
          <div>
            <h1 className="text-5xl font-bold w-full">
              {" "}
              Expert AC Repair Service!
            </h1>
            <p className="py-6  text-xl ">
              Air conditioners are essential for maintaining comfort during hot
              weather, and proper maintenance ensures their optimal performance.
              AC repair services are designed to diagnose, fix, and prevent
              issues in air conditioning systems, ensuring a cool and
              comfortable environment for homes and businesses.
            </p>
            <Button>
              <h2 className="text-xl px-20">
                Contact Now
              </h2>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
