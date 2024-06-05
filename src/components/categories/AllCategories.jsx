/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const AllCategories = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function load() {
      await axios
        .get("https://book-hive-server.onrender.com/categories")
        .then(function (response) {
          setCategories(response?.data);
          console.log(response?.data);
        });
    }

    load();
  }, []);
  return (
    <div className="w-full md:w-3/4 lg:w-3/4 mx-auto p-4 ">
      <h1 className="text-4xl font-semibold text-center py-4 uppercase">
        Book Categories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories?.map((category) => (
          <CategoryCard key={category?._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
