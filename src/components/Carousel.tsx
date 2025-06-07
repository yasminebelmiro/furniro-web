import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import quarto1 from "../assets/images/carousel-images/carousel-bedroom.svg";
import quarto2 from "../assets/images/carousel-images/carousel-living.svg";
import quarto3 from "../assets/images/carousel-images/carousel-dining.svg";

import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

interface RoomSlide {
  id: string;
  image: string;

  roomType: string;
  title: string;
  link: string;
}

const roomSlides: RoomSlide[] = [
  {
    id: "01",
    image: quarto1,
    roomType: "Bedroom",
    title: "Inner Peace",
    link: "/shop/bedroom",
  },
  {
    id: "02",
    image: quarto2,
    roomType: "Living Room",
    title: "Modern Space",
    link: "/shop/living",
  },
  {
    id: "03",
    image: quarto3,
    roomType: "Dining Room",
    title: "Cozy Corner",
    link: "/shop/dining",
  },
];

const Carousel = () => {
  return (
    <div className="font-poppins">
      <Splide
        options={{
          type: "slide",
          perPage: 2,
          perMove: 1,
          gap: "1rem",
          pagination: true,
          arrows: false,
          autoplay: false,
          breakpoints: {
           "767": {
              perPage: 1,
            },
          },
        }}
        aria-label="Meu carrossel de imagens"
      >
        {roomSlides.map((slide) => (
          <SplideSlide key={slide.id}>
            {/*Overlay */}
            <Link to={slide.link} className="relative h-full w-full">
              <img src={slide.image} alt="Slide 1" />
              <div className=" absolute bottom-0 flex  md:p-4  md:items-end">
                <div className="bg-white/70 p-2 py-6 md:px-2 lg:px-6">
                  <p className="text-sm">
                    {slide.id} - {slide.roomType}
                  </p>
                  <h1 className="text-sm md:text-base lg:text-lg xl:text-2xl font-bold">
                    {slide.title}
                  </h1>
                </div>
                <button className=" md:block bg-gold h-[10%] text-white p-2 md:p-4">
                  <FaArrowRight />
                </button>
              </div>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carousel;
