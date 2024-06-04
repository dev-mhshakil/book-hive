import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/category/${category?.name}`}
      className="w-full p-6 rounded-md shadow-md hover:cursor-pointer"
    >
      <img
        src={category?.image}
        alt=""
        className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
          Book
        </span>
        <h2 className="text-xl font-semibold tracking-wide">
          {category?.name}
        </h2>
      </div>
      <p className="dark:text-gray-800">{category?.description}</p>
    </Link>
  );
};

export default CategoryCard;
