import React from "react";
import Banner from "../components/Banner/Banner";
import Categories from "../components/Categories/Categories";
import BestSeller from "../components/BestSeller";
import BottomBanner from "../components/Banner/BottomBanner";
import NewsLetter from "../components/NewsLetter";
const Home = () => {
  return (
    <div className="mt-10">
      <Banner />
      <Categories />
      <BestSeller></BestSeller>
      <BottomBanner />
      <NewsLetter />
    </div>
  );
};

export default Home;
