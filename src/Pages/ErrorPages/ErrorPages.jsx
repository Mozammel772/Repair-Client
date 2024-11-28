import React from "react";
import { Link } from "react-router-dom";

const ErrorPages = () => {
  return (
    <div>
      <h1>Error Pages</h1>
      <button className="btn btn-secondary">
        {" "}
        <Link to={"/"}></Link>
      </button>
    </div>
  );
};

export default ErrorPages;
