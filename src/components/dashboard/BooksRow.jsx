import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BooksRow = ({ book, index }) => {
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
        <button className="btn btn-error text-white btn-sm btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BooksRow;
