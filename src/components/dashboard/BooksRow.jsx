/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BooksRow = ({ book, index }) => {
  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:5000/books/${id}`)
      .then(function (response) {
        if (response?.status == 200) {
          toast.success("Recipe Deleted Successfully");
        }
      });
  };
  return (
    <tr>
      <td>{index}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td className="flex gap-4">
        {/* Add actions like edit or delete buttons here */}
        <Link
          to={`/dashboard/edit-book/${book?._id}`}
          className="btn btn-success text-white btn-sm"
        >
          Edit
        </Link>
        <button
          onClick={() => handleDelete(book?._id)}
          className="btn btn-error text-white btn-sm btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BooksRow;
