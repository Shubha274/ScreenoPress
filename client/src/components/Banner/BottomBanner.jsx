import React from "react";
import bottomBanner from "../../assets/bottombanner.png";
import { features } from "../../Dummydata";
const BottomBanner = () => {
  return (
    <div className="responsive flex justify-center relative">
      <img className="img-fluid " src={bottomBanner} alt="banner2" />

      <div className="absolute inset-0 flex flex-col items-center ml-50 md:items-start md:justify-center pt-16  md:pt-0 md:mt-0 md:pr-24">
        <h1 className="text-2xl md:text-3xl font-semibold text-black mb-6 ">
          Why We Are the Best?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-[auto_1fr] items-center gap-3"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-9 md:w-11"
              />

              <div className="flex flex-col">
                <h3 className="text-sm md:text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className="text-gray-500/70 text-xs md:text-sm hidden md:block">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
