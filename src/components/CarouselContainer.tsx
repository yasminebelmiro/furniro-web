import Carousel from "./Carousel";

const CarouselContainer = () => {
  return (
    <div
      className="font-poppins w-full h-auto bg-creme flex flex-col md:flex-row justify-center md:justify-between items-center px-5 py-25 md:p-10 lg:p-25 gap-9"
      aria-label="Room inspiration showcase"
    >
      <div className="flex flex-col w-full p-4 items-center md:w-105  md:items-start gap-5">
        <h3 className="text-3xl md:text-4xl font-bold">50+ Beautiful rooms inspiration</h3>

        <p className="text-base">
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you
        </p>

        <button
          className="bg-gold text-white text-base py-3 px-9 cursor-pointer "
          aria-label="Explore more room inspirations"
        >
          Explore More
        </button>
      </div>
      <Carousel  />
    </div>
  );
};

export default CarouselContainer;
