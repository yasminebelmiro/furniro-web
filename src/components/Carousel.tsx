import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Carousel.css';
import quarto1 from '../assets/images/carousel-images/carousel-bedroom.svg';
import quarto2 from '../assets/images/carousel-images/carousel-living.svg';
import quarto3 from '../assets/images/carousel-images/carousel-dining.svg';

interface RoomSlide {
  id: string;
  image: string;
  roomNumber: string;
  roomType: string;
  title: string;
}

const roomSlides: RoomSlide[] = [
  {
    id: '1',
    image: quarto1,
    roomNumber: '01',
    roomType: 'Bedroom',
    title: 'Inner Peace'
  },
  {
    id: '2',
    image: quarto2,
    roomNumber: '02',
    roomType: 'Living Room',
    title: 'Modern Space'
  },
  {
    id: '3',
    image: quarto3,
    roomNumber: '03',
    roomType: 'Dining Room',
    title: 'Cozy Corner'
  }
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
    const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % roomSlides.length);
  };

  const handleNextSlideClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    nextSlide();
    
    e.currentTarget.blur();
  };
  
  const handleExploreMore = () => {
    navigate('/shop');
  };

  const handleBedroomNavigation = () => {
    navigate('/shop/bedroom');
  };
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

// função para organizar os slides em ordem circular
  const getSlideOrder = () => {
    const slides = [];
    for (let i = 0; i < roomSlides.length; i++) {
      const index = (currentSlide + i) % roomSlides.length;
      slides.push({ ...roomSlides[index], originalIndex: index });
    }
    return slides;
  };

  return (
    <section 
      className="carousel-container w-full max-w-screen-2xl mx-auto py-6 sm:py-8 lg:py-11 font-poppins"
      aria-label="Room inspiration showcase"
    >
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-0 px-4 sm:px-6 md:px-8 lg:px-[6.25rem]">
{/*seção de texto */}
        <header className="w-full lg:w-2/5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left mb-4 lg:mb-0">
          <h1 className="font-bold text-xl xs:text-2xl sm:text-3xl lg:text-[2.5rem] leading-tight text-[#3A3A3A] mb-3 sm:mb-4 max-w-full lg:max-w-none">
            50+ Beautiful rooms <br className="hidden sm:block" />
            <span className="sm:hidden">inspiration</span>
            <span className="hidden sm:inline">inspiration</span>
          </h1>
          
          <p className="font-medium text-xs xs:text-sm sm:text-base leading-relaxed text-[#616161] max-w-full sm:max-w-[20rem] lg:max-w-[23rem] mb-6 sm:mb-8 px-4 sm:px-0">
            Our designer already made a lot of beautiful prototypes of rooms that inspire you
          </p>
          
          <button 
            onClick={handleExploreMore}
            className="w-36 sm:w-40 lg:w-44 h-10 sm:h-11 lg:h-12 bg-[var(--color-gold)] border-none text-white font-semibold text-sm sm:text-base cursor-pointer transition-colors duration-300 hover:bg-[var(--color-primary-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2"
            aria-label="Explore more room inspirations"          >
            Explore More
          </button>
        </header>

{/* Seção Carrossel*/}
        <main className="w-full lg:w-3/5 relative overflow-hidden">
          <div 
            className="flex items-start gap-3 sm:gap-4 lg:gap-6 transition-transform duration-500 ease-in-out"
            role="region"
            aria-label="Room inspiration carousel"
          >
            {getSlideOrder().map((slide, index) => (
              <article 
                key={slide.id}
                className={`carousel-slide relative flex-shrink-0 transition-all duration-500 ${
                  index === 0 ? 'scale-100' : 'scale-90 sm:scale-88 opacity-100'
                }`}
                aria-label={`Room ${slide.roomNumber}: ${slide.title}`}
              >
                <img 
                  src={slide.image}                  alt={`${slide.roomType} interior design showcasing ${slide.title} - Room ${slide.roomNumber}`}
                  className="w-full h-full object-cover rounded-md sm:rounded-lg"                />
                
{/*cartão de informações e seta de navegação - somente no slide ativo*/}
                {index === 0 && (
                  <>
                    <div className="carousel-info absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 p-4 sm:p-6 lg:p-8 backdrop-blur-sm rounded-md">
                      <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2" role="complementary">
                        <span className="text-xs sm:text-sm text-[#616161]" aria-label={`Room number ${slide.roomNumber}`}>
                          {slide.roomNumber}
                        </span>
                        <div className="carousel-separator" aria-hidden="true" />
                        <span className="text-xs sm:text-sm text-[#616161]" aria-label={`Room type: ${slide.roomType}`}>
                          {slide.roomType}
                        </span>
                      </div>                      <h2 className="font-semibold text-base sm:text-lg lg:text-xl text-[#3A3A3A] m-0 leading-tight">
                        {slide.title}
                      </h2>
                    </div>
                    
{/* botão laranja ao lado dos cards da img */}
                    <button 
                      onClick={handleBedroomNavigation}
                      className="carousel-nav-btn absolute bottom-3 sm:bottom-4 lg:bottom-6 left-[12rem] sm:left-[13rem] lg:left-[15.1rem] w-10 sm:w-11 lg:w-12 h-10 sm:h-11 lg:h-12 border-none cursor-pointer flex items-center justify-center z-10 rounded-md transition-all duration-300 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2"
                      aria-label="Explore bedroom collection"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white sm:w-4 sm:h-4 lg:w-[18px] lg:h-[18px]"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 12H19M13 6L19 12L13 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"                        />
                      </svg>
                    </button>
                  </>
                )}
              </article>
            ))}          </div>

{/* botão branco entre as imagens do carrossel */}
          <button 
            onClick={handleNextSlideClick}
            className="carousel-nav-button-white absolute top-1/2 right-0 sm:right-1 lg:right-2 transform -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-white rounded-full border-none cursor-pointer flex items-center justify-center z-20 shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Go to next room inspiration"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[var(--color-gold)] sm:w-3 sm:h-3 lg:w-4 lg:h-4"
              aria-hidden="true"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />            </svg>
          </button>

{/*indicadores de paginação*/}
          <nav 
            className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 sm:left-[55%] lg:left-[60%] transform -translate-x-1/2 carousel-indicators-container"
            aria-label="Carousel pagination"
          >
            {roomSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`carousel-indicator cursor-pointer transition-all duration-300 ${
                  currentSlide === index ? 'active' : ''
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentSlide === index ? 'true' : 'false'}
              />
            ))}
          </nav>
        </main>
      </div>
    </section>
  );
};

export default Carousel;