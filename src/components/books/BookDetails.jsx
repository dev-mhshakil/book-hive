/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const BookDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const bookId = id;

  const token = localStorage.getItem("token");

  const [book, setBook] = useState(null);
  const [bookStatus, setBookStatus] = useState(null);

  useEffect(() => {
    async function loadBookData() {
      const response = await axios.get(
        `https://book-hive-server.onrender.com/books/${bookId}`
      );
      setBook(response?.data);
    }
    loadBookData();
  }, [bookId]);

  useEffect(() => {
    async function loadBookStatus() {
      if (bookId && user?.email) {
        const response = await axios.get(
          `https://book-hive-server.onrender.com/reading-list/status/${bookId}`
        );
        setBookStatus(response?.data);
      }
    }
    loadBookStatus();
  }, [bookStatus, bookId, user]);

  const handleReadingList = async (bookListId) => {
    const response = await axios.post(
      `https://book-hive-server.onrender.com/reading-list/${bookListId}`,
      user,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    setBookStatus(response?.data);
  };

  return (
    <div className="min-h-screen w-full md:w-3/4 lg:w-3/4 mx-auto p-4">
      <div className="flex flex-col justify-center items-center">
        <div>
          <img
            className="h-96 md:h-[35rem]"
            src={book?.image}
            alt={book?.title}
          />
        </div>
        <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-center mt-6">
          {book?.title}
        </h1>
        <p className="pb-3 text-primary font-semibold">{book?.author}</p>

        <div>
          <h2>{book?.description}</h2>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row gap-4 mt-4">
          <p>
            <span className="font-medium">Category:</span> {book?.category}
          </p>
          <div className="flex justify-center items-center gap-2">
            <p>
              <span className="font-medium">Ratings:</span> {book?.rating}
            </p>
            <FaStar className="text-primary" />
            <FaStar className="text-primary" />
            <FaStar className="text-primary" />
            <FaStar className="text-primary" />
            <FaStarHalf className="text-primary" />
          </div>
        </div>
        <div className="mt-6 flex justify-center items-center gap-3">
          <button className="btn bg-primary">Preview Book</button>
          {bookStatus?.bookData?._id === book?._id ? (
            <BsFillBookmarkCheckFill />
          ) : (
            <button
              onClick={() => handleReadingList(book?._id)}
              className="btn bg-primary"
            >
              Add to Reading List
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
