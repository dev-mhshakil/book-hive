/* eslint-disable react/prop-types */
const CategoryCard = ({ item }) => {
  console.log(item);

  return (
    <div className="w-full p-6 rounded-md shadow-md">
      <img
        src="https://source.unsplash.com/random/300x300/?1"
        alt=""
        className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
          Book
        </span>
        <h2 className="text-xl font-semibold tracking-wide">{item.name}</h2>
      </div>
      <p className="dark:text-gray-800">{item.description}</p>
    </div>
  );
};

export default CategoryCard;
