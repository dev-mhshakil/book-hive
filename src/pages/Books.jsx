import { useEffect, useState } from "react";
import BooksCard from "../components/books/BooksCard";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    async function load() {
      const data = await axios.get("https://book-hive-server.vercel.app/books");
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {books?.map((book) => (
          <BooksCard key={book?.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
