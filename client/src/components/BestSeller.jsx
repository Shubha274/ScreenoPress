import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";
const BestSeller = () => {
  const { products } = useAppContext();
  return (
    <div className="m-16 ">
      <div className="flex flex-col justify-center items-center">
        <p id="bestSeller" className="text-2xl md:text-3xl font-medium">
          Best Sellers
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-10 mt-6">
        {products
          .filter((product) => product.inStock)
          .slice(0, 5)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default BestSeller;
