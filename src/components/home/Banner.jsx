const Banner = () => {
  return (
    <div className="px-6 mb-12 flex flex-col w-full md:w-3/4 lg:w-3/4 mx-auto justify-center">
      <h1 className="text-2xl md:text-4xl lg:text-4xl text-center font-semibold pb-4 text-primary">
        Welcome to our Book Review and Recommendation Platform
      </h1>
      <p className="text-center">
        Explore a wide range of book reviews, curated recommendations, and
        engage with a community of book lovers. Whether you&apos;re looking for
        your next adventure, romance, mystery, or self-help read, we&apos;ve got
        you covered.
      </p>
      <div className="mt-4 flex justify-center">
        <button className="btn bg-secondary rounded-sm text-white">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner;
