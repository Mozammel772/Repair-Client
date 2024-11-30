import React from "react";
import { Parallax } from "react-parallax";

const CoverSection = ({ img, tittle, subTittle }) => {
  return (
    <Parallax
      className="rounded-md"
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-[500px] ">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{tittle}</h1>
            <p className="mb-5">{subTittle}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default CoverSection;
