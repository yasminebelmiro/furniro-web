import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { ProductType } from '../types/ProductType';

interface RelatedProductsProps {
  currentProductId: string;
  category: string;
  products: ProductType[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({
  currentProductId,
  category,
  products,
}) => {
  const navigate = useNavigate();

  const related = products
    .filter((p) => p.category === category && p.id !== currentProductId)
    .slice(0, 4);

  if (!related.length) return null;

  const goToProduct = (id: string) => navigate(`/product/${id}`);
  const showMore = () => navigate('/shop');

  return (
    <div className="w-full max-w-[1440px] mx-auto py-14 px-5 flex flex-col items-center">
      <h2 className="font-poppins font-medium text-3xl text-black mb-8 text-center">
        Related Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 w-full max-w-[1236px] mb-8">
        {related.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => goToProduct(product.id)}
          />
        ))}
      </div>

      <button
        onClick={showMore}
        className="w-[245px] h-12 border border-[var(--color-gold)] text-[var(--color-gold)] font-poppins font-semibold text-base leading-[150%] transition duration-300 flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-white"
      >
        Show More
      </button>
    </div>
  );
};

interface ProductCardProps {
  product: ProductType;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const discounted = product.discount
    ? (product.price * (1 - product.discount / 100)).toFixed(2)
    : null;

  const isNew = (() => {
    const pd = new Date(product.date);
    const diff = (new Date().getTime() - pd.getTime()) / (1000 * 60 * 60 * 24);
    return diff <= 30;
  })();

  return (
    <div
      onClick={onClick}
      className="w-full max-w-[285px] h-[446px] bg-gray-100 relative flex flex-col overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-[1.02] mx-auto"
    >
      <div className="w-full h-[301px] overflow-hidden flex-shrink-0">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {(discounted || isNew) && (
        <div
          className={`absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center text-xs font-medium text-white ${
            isNew ? 'bg-[#2EC1AC]' : 'bg-[#E97171]'
          }`}
        >
          {isNew ? 'New' : `-${product.discount}%`}
        </div>
      )}

      <div className="w-full h-[145px] bg-gray-100 p-4 flex flex-col justify-between flex-shrink-0">
        <div className="flex flex-col justify-start">
          <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-1 truncate">
            {product.name}
          </h3>
          <p className="font-poppins font-medium text-sm text-gray-500 mb-2 line-clamp-2">
            {product.subtitle}
          </p>
        </div>

        <div className="flex items-center flex-wrap gap-2">
          <span className="font-poppins font-semibold text-lg text-gray-800">
            R$ {discounted ?? product.price.toFixed(2)}
          </span>
          {discounted && (
            <span className="font-poppins font-normal text-sm text-gray-400 line-through">
              R$ {product.price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
