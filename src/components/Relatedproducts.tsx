import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { ProductType } from '../types/ProductType';

import ListProduct from './ListProduct';

import data from '../services/db.json';

const RelatedProducts: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();

  const current = data.products.find(
    (p) => p.id === productId
  ) as ProductType | undefined;
  if (!current) return null;
  
  const handleShowMore = () => {
    navigate('/shop');
  };
  if (relatedProducts.length === 0) {
    return null;
  }
    return (
    <div className="font-poppins flex flex-col items-center justify-evenly">
      <h3 className="text-[2rem] font-bold text-[#333333] leading-normal py-10">
        Related Products
      </h3>
      
      <ListProduct 
        productsList={relatedProducts} 
        cardCount={4} 
      />      <button
        className="border-gold border-1 py-4 px-30 m-10 text-gold cursor-pointer"
        onClick={handleShowMore}
      >
        Show More
      </button>
    </div>
  );
};

export default RelatedProducts;
