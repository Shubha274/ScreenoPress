import React from "react";
import "./Banner.css";
import bannerImage from "../../assets/banner5.png"; // ✅ preferred import

const Banner = () => {
  return (
    <div className="responsive flex  justify-center">
      <img className="img-fluid object-cover" src={bannerImage} alt="banner2" />
      <div className="absolute inset-0 text-white flex flex-col m-30 items-center md:text-left md:items-start md:justify-center px-4 pb-12 md:pb-0 md:pl-16 lg:pl-24 space-y-2 md:space-y-4">
        <p className="text-xl md:text-3xl lg:text-5xl font-semibold text-center md:text-left leading-snug">
          From Thought to Print <br></br> We Make It Real.
        </p>
        {/* <p className="text-sm md:text-base lg:text-lg text-center md:text-left leading-snug">
          Enjoy Your Custom Prints
        </p>
        <p className="text-sm md:text-base lg:text-lg text-center md:text-left leading-snug">
          T-Shirts, Books, Cards & More — Printed Your Way.
        </p> */}
      </div>
    </div>
  );
};

export default Banner;
