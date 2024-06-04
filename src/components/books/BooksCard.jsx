import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BooksCard = ({ book }) => {
  return (
    <div>
      <div className="w-full h-[600px] lg:h-[670px] p-6 rounded-md shadow-md">
        <img
          src={book?.image}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
            Book
          </span>
          <div className="h-14">
            <h2 className="text-xl font-semibold tracking-wide">
              {book.title}
            </h2>
          </div>
        </div>
        <p className="pb-2 text-primary ">{book.author}</p>
        <p className="h-16">{book.description}</p>
        <div className="mt-5 lg:mt-20 flex justify-between items-center">
          <Link
            to={`/books/details/${book?._id}`}
            className="btn bg-secondary text-white rounded-sm"
          >
            Details
          </Link>
          <div className="flex justify-center items-center gap-1">
            <p>{book.rating}</p>
            <FaStar className="text-primary" />
            <FaStar className="text-primary" />
            <FaStar className="text-primary" />
            <FaStar className="text-primary" />
            <FaStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
