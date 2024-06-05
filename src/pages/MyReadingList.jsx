import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import BooksCard from "../components/books/BooksCard";
import { Link } from "react-router-dom";

const MyReadingList = () => {
  const { user } = useAuth();

  const [readingListBooks, setReadingListBooks] = useState();

  useEffect(() => {
    async function load() {
      await axios
        .get(
          `https://book-hive-server.onrender.com/reading-list/${user?.email}`
        )
        .then(function (response) {
          setReadingListBooks(response?.data);
        });
    }
    load();
  }, [user?.email]);

  return (
    <div className="py-8">
      <h1 className="text-4xl text-center font-semibold">My Reading List</h1>
      {readingListBooks?.length === 0 ? (
        <>
          <div className="h-screen flex justify-center items-center">
            <h1 className="text-2xl text-center">
              Please bookmark your favourite book.{" "}
              <span>
                <Link to="/books" className="text-primary hover:underline">
                  Books List
                </Link>
              </span>
            </h1>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-16 lg:px-16">
              {readingListBooks?.map((book) => (
                <BooksCard key={book?.bookData?._id} book={book?.bookData} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyReadingList;
