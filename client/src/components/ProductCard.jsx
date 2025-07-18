import React from "react";

import { useAppContext } from "../context/AppContext";
const ProductCard = ({ product }) => {
  const { currencySymbol, navigate } = useAppContext();
  //   const product = {
  //     name: "Casual Shoes",
  //     category: "Sports",
  //     price: 100,
  //     offerPrice: 80,
  //     rating: 4,
  //     image:
  //       "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png",
  //   };

  return (
    product && (
      <div
        onClick={() => {
          navigate(
            `/products/${product.category.toLowerCase()}/${product._id}`
          );
          scrollTo(0, 0);
        }}
        className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full"
      >
        <div className="group cursor-pointer flex items-center justify-center px-2">
          <img
            className="w-36 h-36 object-cover group-hover:scale-105 transition rounded-md"
            src={product.images[0]}
            alt={product.name}
          />
        </div>
        <div className="text-gray-500/60 text-sm text-center">
          <p className="text-gray-700 font-medium text-lg truncate w-full">
            {product.name}
          </p>
          <div className="mt-3 flex justify-center">
            <p className="text-base md:text-lg font-medium text-primary">
              {currencySymbol}
              {product.price}
            </p>
          </div>

          {/* <div className="flex items-center gap-0.5">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <img
                  src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                  alt=""
                  className="md:w-3.5 w3"
                  key={i}
                />
              ))}
            <p>({4})</p>
          </div> */}
          {/* <div className="flex items-end justify-between mt-3">
            <p className="md:text-xl text-base font-medium text-indigo-500">
              {currencySymbol} ${product.offerPrice}{" "}
              <span className="text-gray-500/60 md:text-sm text-xs line-through">
                {currencySymbol} ${product.price}
              </span>
            </p>
            <div className="text-indigo-500">
              {count === 0 ? (
                <button
                  className="flex items-center justify-center gap-1 bg-indigo-100 border border-indigo-300 md:w-[80px] w-[64px] h-[34px] rounded text-indigo-600 font-medium"
                  onClick={() => setCount(1)}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
                      stroke="#615fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Add
                </button>
              ) : (
                <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-indigo-500/25 rounded select-none">
                  <button
                    onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
                    className="cursor-pointer text-md px-2 h-full"
                  >
                    -
                  </button>
                  <span className="w-5 text-center">{count}</span>
                  <button
                    onClick={() => setCount((prev) => prev + 1)}
                    className="cursor-pointer text-md px-2 h-full"
                  >
                    +
                  </button>
                </div>
              )}
            </div> */}
        </div>
      </div>
    )
  );
};
export default ProductCard;
