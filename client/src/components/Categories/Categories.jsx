import React from "react";
import { categories } from "../../Dummydata";
import { useAppContext } from "../../context/AppContext";
const Categories = () => {
  const { navigate } = useAppContext();
  return (
    <div className="mt-16 ml-15">
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl md:text-3xl font-medium">
          Explore Our Print Services{" "}
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mt-6 gap-3 m-10">
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center"
              style={{ backgroundColor: category.bgColor }}
              onClick={() => {
                navigate(`/products/${category.path.toLowerCase()}`);
                scrollTo(0, 0);
              }}
            >
              <img
                src={category.image}
                alt={category.text}
                className="group-hover:scale-108 transition max-w-50"
              />
              <p className="text-sm font-medium">{category.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
