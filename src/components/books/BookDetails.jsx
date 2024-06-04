/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const id = useParams();
  const bookId = id?.id;

  const [book, setBook] = useState();

  useEffect(() => {
    async function load() {
      const bookData = await axios
        .get(`http://localhost:5000/books/${bookId}`)
        .then(function (response) {
          setBook(response?.data);
        });
    }
    load();
  }, [bookId]);

  return (
    <div className="min-h-screen w-full md:w-3/4 lg:w-3/4 mx-auto p-4">
      <div className="flex flex-col justify-center items-center">
        <div>
          <img className="h-96 md:h-[35rem]" src={book?.image} alt="" />
        </div>
        <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-center mt-6 ">
          {book?.title}
        </h1>
        <p className="pb-3 text-primary font-semibold">{book?.author}</p>

        <div>
          <h2>{book?.description}</h2>
        </div>
        <div className="flex gap-4 mt-4">
          <p>
            <span className="font-medium">Category :</span> {book?.category}
          </p>
          <div className="flex justify-center items-center gap-2">
            <p>
              <span className="font-medium">Ratings :</span> {book?.rating}
            </p>
            <FaStar className="text-primary" />
            <FaStar className="text-primary" />
            <FaStar className="text-primary" />
            <FaStar className="text-primary" />
            <FaStarHalf className="text-primary" />
          </div>
        </div>
        <div className="mt-6">
          <button className="btn bg-primary ">Preview Book</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
