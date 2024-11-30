import React from "react";

const Button = ({ children }) => {
  return (
    <div>
      <button className="btn btn-secondary ">{children}</button>
    </div>
  );
};

export default Button;
