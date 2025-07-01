import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { categories } from "../Dummydata";
import ProductCard from "../components/ProductCard";

const ProductCategory = () => {
  const { category } = useParams();
  const { products } = useAppContext();

  // 🟨 Debug logs to check what’s happening
  console.log("URL Param Category:", category);
  console.log("All Products:", products);

  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category.toLowerCase()
  );

  console.log("Matched Category from Dummydata:", searchCategory);

  const filteredProducts = products.filter(
    (product) =>
      searchCategory &&
      product.category.toLowerCase() === searchCategory.path.toLowerCase()
  );

  console.log("Filtered Products:", filteredProducts);

  // ✅ Return UI
  return (
    <div className="mt-16 px-4 md:px-10">
      {searchCategory && (
        <div className="flex flex-col items-start mb-6">
          <p className="text-2xl font-semibold text-gray-800">
            {searchCategory.text.toUpperCase()}
          </p>
          <div className="w-16 h-0.5 bg-primary mt-1 rounded-full"></div>
        </div>
      )}

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[60vh]">
          <p className="text-gray-500 text-center mt-10">
            No products found in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
