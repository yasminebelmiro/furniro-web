import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { ProductType } from '../types/ProductType';
import data from '../services/db.json';
import CascadeHeader from '../components/CascadeHeader';
import ProductDetails from '../components/ProductDetails';
import RelatedProducts from '../components/RelatedProducts';
import ProductDescription from '../components/ProductDescription';

const SingleProduct: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();

  const product = data.products.find(
    (p) => p.id === productId
  ) as ProductType | undefined;

  return (
    <>
      {product ? (
        <>
          <CascadeHeader />
          <ProductDetails />
          <ProductDescription />
          <RelatedProducts />
        </>
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Produto não encontrado
          </h1>
          <p className="text-gray-600 mb-6">
            O produto que você procura não existe.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="bg-gold cursor-pointer text-white px-6 py-2 rounded hover:bg-gold/80"
          >
            Voltar
          </button>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
