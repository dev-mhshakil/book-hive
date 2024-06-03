import axios from "axios";
import { useEffect, useState } from "react";
import BooksRow from "./BooksRow";

const ManageAllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function load() {
      await axios.get("http://localhost:5000/books").then(function (response) {
        setBooks(response?.data);
      });
    }
    load();
  }, []);

  return (
    <div className="overflow-x-auto w-full px-16 mt-10">
      <h1 className="text-4xl mb-4">Manage All Books</h1>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book, index) => (
            <BooksRow key={book?._id} book={book} index={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllBooks;