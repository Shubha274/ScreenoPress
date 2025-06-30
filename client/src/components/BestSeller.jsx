import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";
const BestSeller = () => {
  const { products } = useAppContext();
  return (
    <div className="m-16 ">
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl md:text-3xl font-medium">Top Categories</p>
      </div>
      <div>
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
