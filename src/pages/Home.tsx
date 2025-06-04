import React from 'react'
import CategorySection from '../components/CategorySection'
import ListProduct from '../components/ListProduct'


const Home = () => {
  
  return (
    <>
      <CategorySection />
      <ListProduct cardCount={8} />
    </>
  )

  
}

export default Home