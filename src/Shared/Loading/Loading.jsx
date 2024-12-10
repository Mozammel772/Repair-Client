import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      {<HashLoader color="#fa01ff" loading size={50} />}
    </div>
    // <div className="flex justify-center items-center h-40">
    //   <div className="loader border-t-4 border-blue-500 w-10 h-10 rounded-full animate-spin"></div>
    // </div>
  );
};

export default Loading;
