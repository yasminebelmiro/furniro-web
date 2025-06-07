import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import quarto1 from "../assets/images/carousel-images/carousel-bedroom.svg";
import quarto2 from "../assets/images/carousel-images/carousel-living.svg";
import quarto3 from "../assets/images/carousel-images/carousel-dining.svg";

import { FaArrowRight } from "react-icons/fa";

interface RoomSlide {
  id: string;
  image: string;

  roomType: string;
  title: string;
}

const roomSlides: RoomSlide[] = [
  {
    id: "01",
    image: quarto1,
    roomType: "Bedroom",
    title: "Inner Peace",
  },
  {
    id: "02",
    image: quarto2,
    roomType: "Living Room",
    title: "Modern Space",
  },
  {
    id: "03",
    image: quarto3,
    roomType: "Dining Room",
    title: "Cozy Corner",
  },
];

const Carousel = () => {
  return (
    <div className="w-[60%] font-poppins">
      <Splide
        options={{
          type: "slide",
          perPage: 2,
          perMove: 1,
          gap: "2px",
          pagination: true,
          arrows: false,
          autoplay: false,
          breakpoints: {
            500: {
              perPage: 1,
            },
            1024: {
              perPage: 2,
            },
          },
        }}
        aria-label="Meu carrossel de imagens"
      >
        {roomSlides.map((slide) => (
          <SplideSlide key={slide.id}>
            {/*Overlay */}
            <div className="relative">
              <img src={slide.image} alt="Slide 1" />
              <div className=" absolute bottom-0 flex p-10 items-end">
                <div className="bg-white/70 p-6">
                  <p>
                    {slide.id} - {slide.roomType}
                  </p>
                  <h1 className="text-2xl font-bold">{slide.title} </h1>
                </div>
                <button className="bg-gold h-[10%] text-white p-4">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carousel;
