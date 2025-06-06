
import CategorySection from '../components/CategorySection'
import Mosaic from '../components/Mosaic'
import Carousel from '../components/Carousel'
import HeroSection from '../components/HeroSection'
import ProductsHome from '../components/ProductsHome'

const Home = () => {
  
  return (
     <>
      <HeroSection/>
      <CategorySection />
      <ProductsHome />
      <Carousel />
      <Mosaic />
    </>
  )
}

export default Home