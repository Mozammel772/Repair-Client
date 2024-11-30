import React from "react";
import notFound from "../../assets/notFound/NotFound.gif";
const ErrorPages = () => {
  return (
    <div className="mt-20">
      <img className="w-full max-h-screen mx-auto" src={notFound} alt="not-found" />
    </div>
  );
};

export default ErrorPages;
