import React from 'react'
import CategorySection from '../components/CategorySection'
import ListProduct from '../components/ListProduct'

const Home = () => {
  
  return (
    <div>
      <CategorySection />
      <ListProduct cardCount={8} />
    </div>
  )

  
}

export default Home