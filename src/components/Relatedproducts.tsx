import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { ProductType } from '../types/ProductType';
import ListProduct from './ListProduct';

interface RelatedProductsProps {
  currentProductId: string;
  category: string;
  products: ProductType[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ 
  currentProductId, 
  category, 
  products 
}) => {
  const navigate = useNavigate();

  //Filtra produtos da mesma categoria, excluindo o produto atual
  const relatedProducts = products
    .filter(product => 
      product.category === category && 
      product.id !== currentProductId
    )
    .slice(0, 4); // Mostra apenas 4 produtos

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