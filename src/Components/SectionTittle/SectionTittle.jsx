import React from "react";

const SectionTittle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mx-auto my-10">
    <p className="text-orange-500 text-xl font-mono ">---   {subHeading}  ---</p>
    <div className="divider w-4/12 mx-auto"></div>
    <h3 className="text-4xl uppercase font-bold font-mono ">{heading}</h3>
    <div className="divider w-4/12 mx-auto"></div>
  </div>
  );
};

export default SectionTittle;
