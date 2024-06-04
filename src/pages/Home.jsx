/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import CategoryCard from "../components/categories/CategoryCard";
import Banner from "../components/home/Banner";
import Hero from "../components/home/Hero";
import PricingPlan from "../components/home/PricingPlan";
import axios from "axios";
import BooksCard from "../components/books/BooksCard";

const Home = () => {
  const [categories, setCategories] = useState();

  const [books, setBooks] = useState();

  useEffect(() => {
    async function load() {
      const categoriesRes = await fetch(
        "https://book-hive-server.vercel.app/categories"
      );
      const categoriesData = await categoriesRes.json();
      setCategories(categoriesData);

      const booksData = await axios
        .get("https://book-hive-server.vercel.app/books")
        .then(function (response) {
          setBooks(response?.data);
        });
    }

    load();
  }, []);

  return (
    <div>
      <Hero />
      <div>
        <h2 className="uppercase text-sm text-center mb-4">Books</h2>
        <h1 className="text-4xl font-semibold text-center mb-6 text-primary">
          Book Categories
        </h1>
        <p className="text-center mb-4">
          Certainly! Here&apos;s a subtitle for all the categories combined:
          &quot;Discover a World of Stories, Knowledge, and Inspiration Across
          Various Genres.&quot;
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-16 lg:px-16">
          {categories?.slice(0, 4)?.map((category) => (
            <CategoryCard key={category?.id} category={category} />
          ))}
        </div>
      </div>

      <div className="px-4 md:px-16 lg:px-16 mt-8">
        <p className="text-center text-sm uppercase">Books</p>
        <h1 className="text-4xl font-semibold uppercase text-center text-primary pb-4">
          Books
        </h1>
        <p className="text-center">
          Knowledge is power and Books are the carrier of Knowledge
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {books?.slice(0, 8)?.map((book) => (
            <BooksCard key={book?._id} book={book} />
          ))}
        </div>
      </div>

      <PricingPlan />
      <Banner />
    </div>
  );
};

export default Home;
