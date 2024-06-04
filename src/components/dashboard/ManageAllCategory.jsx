import axios from "axios";
import { useEffect, useState } from "react";
import CategoryRow from "./CategoryRow";

const ManageAllCategory = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function load() {
      await axios
        .get("http://localhost:5000/categories")
        .then(function (response) {
          setCategories(response?.data);
        });
    }
    load();
  }, [categories]);

  return (
    <div className="overflow-x-auto w-full px-2 md:px-16 lg:px-16 mt-10">
      <h1 className="text-4xl mb-4">Manage All Categories</h1>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories?.map((category, index) => (
            <CategoryRow
              key={category?._id}
              category={category}
              index={index + 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllCategory;
