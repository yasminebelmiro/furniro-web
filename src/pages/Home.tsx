import CategorySection from "../components/CategorySection";
import Mosaic from "../components/Mosaic";
import HeroSection from "../components/HeroSection";
import ProductsHome from "../components/ProductsHome";
import CarouselContainer from "../components/CarouselContainer";


const Home = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <ProductsHome />
      <CarouselContainer />
      <Mosaic />
    </>
  );
};

export default Home;
