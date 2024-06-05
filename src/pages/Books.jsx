import { useEffect, useState } from "react";
import BooksCard from "../components/books/BooksCard";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState();
  const [search, setSearch] = useState("");

  console.log(search);

  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:5000/books");
      setBooks(data?.data);
    }
    load();
  }, []);
  return (
    <div className="w-full md:w-5/6 lg:w-5/6 mx-auto mb-8">
      <div>
        <h1 className="text-4xl text-center text-semibold uppercase text-primary  py-8">
          Books Collections
        </h1>
      </div>
      <div className="mb-4">
        <form
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md mx-auto"
        >
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Books..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {books
          ?.filter((book) => {
            return search.toLowerCase() === ""
              ? book
              : book.title.toLowerCase().includes(search);
          })
          ?.map((book) => (
            <BooksCard key={book?.id} book={book} />
          ))}
      </div>
    </div>
  );
};

export default Books;
