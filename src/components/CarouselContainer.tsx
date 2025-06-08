import Carousel from "./Carousel";

const CarouselContainer = () => {
  return (
    <div className="bg-[#FCF8F3] py-10 px-4 sm:px-8 lg:px-12 h-170">
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-screen-xl mx-auto">
        <div className="lg:w-[35%] text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3A3A3A] mb-2">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-[#616161] mb-6 text-sm sm:text-base">
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you
          </p>
          <button className="bg-[#B88E2F] text-white font-bold py-3 px-10 hover:bg-[#9e7a2d] transition-colors text-sm sm:text-base">
            Explore More
          </button>
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default CarouselContainer;
