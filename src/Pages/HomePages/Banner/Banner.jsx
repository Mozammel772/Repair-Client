import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import img1 from "../../../assets/banner/01.jpg";
import img2 from "../../../assets/banner/02.jpg";
import img3 from "../../../assets/banner/03.png";
const Banner = () => {
  return (
    <div className="mt-20 relative">
      <Carousel>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
