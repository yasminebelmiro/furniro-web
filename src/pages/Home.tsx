
import CategorySection from '../components/CategorySection'
import Mosaic from '../components/Mosaic'
import HeroSection from '../components/HeroSection'
import ProductsHome from '../components/ProductsHome'
import Carousel from '../components/Carousel';


const Home = () => {
  
  return (
     <>
      <HeroSection/>
      <CategorySection />
      {/* <ProductsHome /> */}
      <Carousel />
      <Mosaic />
    </>
  )
}

export default Home