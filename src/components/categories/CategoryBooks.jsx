/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BooksCard from "../books/BooksCard";

const CategoryBooks = () => {
  const id = useParams();

  const [categoryBooks, setCategoryBooks] = useState();

  useEffect(() => {
    async function load() {
      const data = await axios
        .get(`https://book-hive-server.vercel.app/category/${id?.id}`)
        .then(function (response) {
          setCategoryBooks(response?.data);
        });
    }

    load();
  }, [id]);

  console.log(categoryBooks);
  return (
    <div className="w-full md:w-1/2 lg:w-1/2 mx-auto p-4">
      <h1 className="text-4xl text-center font-semibold mb-4 uppercase text-primary">
        Books by Category
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
        {categoryBooks?.map((book) => (
          <BooksCard key={book?._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default CategoryBooks;
