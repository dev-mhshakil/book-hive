/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AddBook = () => {
  const [categories, setCategories] = useState();

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function load() {
      const categoriesData = await axios
        .get("https://book-hive-server.onrender.com/categories")
        .then(function (resposnse) {
          setCategories(resposnse?.data);
        });
    }
    load();
  }, []);

  const handlePost = async (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const author = form.author.value;
    const category = form.category.value;
    const description = form.description.value;
    const image = form.image.value;
    const drive_link = form.drive_link.value;
    const rating = form.rating.value;

    const bookInfo = {
      title: title,
      author: author,
      category: category,
      description: description,
      image: image,
      drive_link: drive_link,
      rating: rating,
    };

    await axios
      .post("https://book-hive-server.onrender.com/books", bookInfo, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        if (response.status === 200) {
          form.reset();
          toast.success("Book has been added to the database.");
        } else {
          toast.warning("Something went wrong. Try again!");
        }
      });
  };
  return (
    <div className="w-full px-16 mt-10">
      <div>
        <h1 className="text-4xl text-semibold text-center mt-4">Add Book</h1>
      </div>
      <div>
        <form
          onSubmit={handlePost}
          className="w-full md:max-w-sm lg:max-w-sm p-4 mx-auto mt-8"
        >
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Book Title
            </label>
            <input
              type="text"
              id="title"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Book Author
            </label>
            <input
              type="text"
              id="author"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Book Category
            </label>
            <select
              type="text"
              id="category"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            >
              {categories?.map((category) => (
                <option key={category?.id} value={category?.name}>
                  {category?.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Book Description
            </label>
            <textarea
              type="text"
              id="description"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Book Image URL
            </label>
            <input
              type="text"
              id="image"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Book Drive URL
            </label>
            <input
              type="text"
              id="drive_link"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Book Rating
            </label>
            <input
              type="text"
              id="rating"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
