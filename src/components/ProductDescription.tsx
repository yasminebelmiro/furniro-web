import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import type { ProductType } from '../types/ProductType';

const ProductDescription = () => {
  const { productId } = useParams<{ productId: string }>();
  const [activeTab, setActiveTab] = useState<'description' | 'additional'>('description');
  const [product, setProduct] = useState<ProductType | null | undefined>(undefined);

  useEffect(() => {
    if (!productId) {
      setProduct(null);
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await axios.get<ProductType>(
          `http://localhost:3000/products/${productId}`
        );
        setProduct(response.data);
      } catch {
        setProduct(null);
      }
    };

    fetchProduct();
  }, [productId]);

  if (product === undefined) {
    return (
      <div className="p-5 text-center text-gray-600">
        Carregando o produto…
      </div>
    );
  }

  if (product === null) {
    return (
      <div className="p-5 text-center text-red-600">
        Produto não encontrado.
      </div>
    );
  }

  return (
    <section className='font-poppins'>
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        
        {/* Abas de navegação */}
        <div className="mb-16">
          <div className="flex justify-center pl-8 mr-10 gap-10 sm:pl-0 sm:mr-0 sm:gap-20 mb-14">
            <button
              className={`text-2xl transition-colors duration-300 cursor-pointer ${
                activeTab === 'description'
                  ? 'text-black'
                  : 'text-[#9F9F9F] hover:text-gray-600'
              }`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={`text-2xl transition-colors duration-300 cursor-pointer ${
                activeTab === 'additional'
                  ? 'text-black'
                  : 'text-[#9F9F9F] hover:text-gray-600'
              }`}
              onClick={() => setActiveTab('additional')}
            >
              Additional Information
            </button>
          </div>

          {/* Seção de texto */}
          <div className="text-[#9F9F9F] text-xl leading-relaxed max-w-4xl mx-auto">
            {activeTab === 'description' ? (
              <>
                <p className="mb-8">{product.description}</p>
                <p>{product.resume}</p>
              </>
            ) : (
              <p>{product.adicionalDescription}</p>
            )}
          </div>
        </div>        
          {/* Seção de imagens */}
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          <div className="bg-[#F9F1E7] p-3 rounded-lg">
            <div className="w-[100%] h-[250px] sm:w-[300px] sm:h-[200px] lg:w-[400px] lg:h-[250px] xl:w-[500px] xl:h-[300px]">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          {product.images[1] && (
            <div className="bg-[#F9F1E7] p-3 rounded-lg">
              <div className="w-full h-[250px] sm:w-[300px] sm:h-[200px] lg:w-[400px] lg:h-[250px] xl:h-[300px]">
                <img
                  src={product.images[1]}
                  alt={`${product.name} view 2`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          )}
        </div>
      </div>    
    </section>
  );
};

export default ProductDescription;