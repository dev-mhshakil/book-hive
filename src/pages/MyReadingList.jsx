import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import BooksCard from "../components/books/BooksCard";

const MyReadingList = () => {
  const { user } = useAuth();

  const [readingListBooks, setReadingListBooks] = useState();

  useEffect(() => {
    async function load() {
      await axios
        .get(`http://localhost:5000/reading-list/${user?.email}`)
        .then(function (response) {
          setReadingListBooks(response?.data);
        });
    }
    load();
  }, [user?.email]);

  return (
    <div className="py-8">
      <h1 className="text-4xl text-center font-semibold mt-4">
        My Reading List
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-16 lg:px-16">
        {readingListBooks?.map((book) => (
          <BooksCard key={book?.bookData?._id} book={book?.bookData} />
        ))}
      </div>
    </div>
  );
};

export default MyReadingList;
