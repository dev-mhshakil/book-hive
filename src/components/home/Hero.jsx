const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row lg:flex-row h-screen md:h-screen justify-center items-center p-4">
      <div>
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold pb-3">
          Books Worth Reading, <br />
          <span className="text-primary"> Recommendations Worth Sharing.</span>
        </h1>
        <p className="pb-3 md:pb-8 lg:pb-8">
          Share your thoughts on the latest books and classics.
        </p>
        <button className="btn bg-secondary text-white">Learn More</button>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2">
        <img src="https://i.ibb.co/0MBrkXS/heroimage.jpg" className="" alt="" />
      </div>
    </section>
  );
};

export default Hero;
