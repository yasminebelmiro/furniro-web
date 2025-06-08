import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Splide,
  SplideSlide,
  Splide as ReactSplide,
} from "@splidejs/react-splide";
import type SplideInstance from "@splidejs/splide";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "@splidejs/splide/dist/css/splide.min.css";
import bedroomImg from "../assets/images/carousel-images/carousel-bedroom.svg";
import diningImg from "../assets/images/carousel-images/carousel-dining.svg";
import livingImg from "../assets/images/carousel-images/carousel-living.svg";

const slidesData = [
  {
    id: 1,
    image: bedroomImg,
    number: "01",
    category: "Bed Room",
    title: "Inner Peace",
    link: "/shop/bedroom",
  },
  {
    id: 2,
    image: livingImg,
    number: "02",
    category: "Living Room",
    title: "Modern Vibe",
    link: "/shop/living",
  },
  {
    id: 3,
    image: diningImg,
    number: "03",
    category: "Dining Area",
    title: "Cozy Meals",
    link: "/shop/dining",
  },
];

const Carousel = () => {
  const splideRef = useRef<typeof ReactSplide | any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const splideOptions = {
    type: "loop",
    autoWidth: true,
    gap: "2rem",
    pagination: false,
    arrows: false,
    focus: 0,
    padding: { right: "8rem" },
  };

  return (
    <div className="w-full lg:w-[70%] relative h-[32rem]">
      <Splide
        options={splideOptions}
        ref={splideRef}
        className="items-start"
        aria-label="Room inspiration carousel"
        onMoved={(splide: SplideInstance) => setActiveIndex(splide.index)}
      >
        {slidesData.map((slide) => (
          <SplideSlide
            key={slide.id}
            className="relative cursor-pointer group flex-shrink-0"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 p-2 sm:p-4 bg-white/75 backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:bottom-6 flex items-end justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#616161] text-sm sm:text-base">
                  <span>{slide.number}</span>
                  <div className="w-4 h-px bg-[#616161]"></div>
                  <span>{slide.category}</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#3A3A3A] mt-1">
                  {slide.title}
                </h3>
              </div>

              <Link to={slide.link}>
                <div className="bg-[#B88E2F] text-white p-3 shadow-lg hover:bg-[#9e7a2d]">
                  <FaArrowRight size={18} />
                </div>
              </Link>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 sm:px-0 sm:-mx-6 pointer-events-none">
        <button
          onClick={() => splideRef.current?.splide?.go("<")}
          className="bg-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-md hover:bg-gray-100 transition pointer-events-auto"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="text-[#B88E2F]" />
        </button>
        <button
          onClick={() => splideRef.current?.splide?.go(">")}
          className="bg-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-md hover:bg-gray-100 transition pointer-events-auto"
          aria-label="Next slide"
        >
          <FaChevronRight className="text-[#B88E2F]" />
        </button>
      </div>

      <div className="absolute mt-5 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        {slidesData.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => splideRef.current?.splide?.go(index)}
            className={`transition-all duration-300 rounded-full ${
              activeIndex === index
                ? "w-4 h-4 bg-[#B88E2F] ring-2 ring-offset-2 ring-[#B88E2F] ring-offset-[#FCF8F3]"
                : "w-3 h-3 bg-[#D8D8D8] hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
