import React from "react";
import Category from "./Category";
import AddCategory from "../AddCategory/AddCategory";
import { useSelector } from "react-redux";

function Categories() {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <div className="categories">
      <div className="container">
        <div className="row justify-content-center">
          {categories.map((category, index) => {
            return <Category key={index} category={category} />;
          })}
          <AddCategory />
        </div>
      </div>
    </div>
  );
}

export default Categories;
