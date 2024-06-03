import { useEffect, useState } from "react";
import CategoryCard from "../components/categories/CategoryCard";
import Banner from "../components/home/Banner";
import Hero from "../components/home/Hero";
import PricingPlan from "../components/home/PricingPlan";

const Home = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function load() {
      const categoriesRes = await fetch("http://localhost:5000/categories");
      const categoriesData = await categoriesRes.json();
      setCategories(categoriesData);
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 w-11/12 mx-auto">
          {categories?.map((item) => (
            <CategoryCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <PricingPlan />
      <Banner />
    </div>
  );
};

export default Home;
