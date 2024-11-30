import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      {<HashLoader color="#fa01ff" loading size={50} />}
    </div>
  );
};

export default Loading;
