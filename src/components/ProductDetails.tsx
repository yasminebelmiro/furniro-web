import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaStar, FaRegStar, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import type { ProductType } from '../types/ProductType';
import { toast} from 'react-toastify';

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  const [product, setProduct] = useState<ProductType | null | undefined>(undefined);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  const socialLinks = {
    facebook: 'https://www.facebook.com/compassuol',
    twitter:  'https://x.com/compassuol?t=6MuSOtN28Z7SdtJURMyzTA&s=09',
    linkedin: 'https://www.linkedin.com/company/compass-uol',
  };

  const notifyAddToCart = (name: string) =>
    toast.info(`${name} adicionado ao carrinho!`);

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

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0]);
      setSelectedSize(product.size[0]);
      setSelectedColor(product.colors[0]);
      setQuantity(1);
    }
  }, [product]);

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

  // Garante que mainImage não será string vazia
  const mainImage = selectedImage ?? product.images[0];

  return (
    <section className="font-poppins w-full mx-auto pt-10 flex flex-col items-center sm:flex-row sm:items-start px-4 xl:px-0">

      {/* Grid com imagens */}
      <div className="w-full sm:w-1/2 xl:w-1/2 flex flex-col-reverse sm:flex-row sm:items-start lg:ml-[5%] xl:ml-[10%] 2xl:ml-[20%]">
        <div className="flex flex-row pt-3 justify-center sm:justify-start sm:pt-0 sm:flex-col sm:space-y-3 space-x-3 sm:space-x-0 sm:mr-4 mb-4 sm:mb-0">
          {product.images.map((imgUrl, idx) => {
            return (
              <img
                key={idx}
                src={imgUrl}
                alt={`${product.name} ${idx + 1}`}
                className={`w-20 h-20 object-cover rounded cursor-pointer transition`}
                onClick={() => setSelectedImage(imgUrl)}
              />
            );
          })}
        </div>

        <div className="flex-1 bg-white rounded">
          <img
            src={mainImage}
            alt={product.name}
            className="w-150 h-100 2xl:w-full 2xl:h-110 object-cover rounded"
          />
        </div>
      </div>

      {/* Detalhes do produto */}
      <div className="w-full sm:pl-10 lg:mr-[5%] xl:mr-[15%] 2xl:mr-[20%] sm:w-1/2 xl:w-1/2 pb-10 mt-5 sm:mt-0 xl:pl-12">
      
        {/* Nome do produto */}
        <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>

        {/* Valor do produto */}
        <p className="text-2xl text-gray-800 mb-4">
          R$ {product.price.toFixed(2)}
        </p>

        {/* Avaliação do produto */}
        <div className="flex items-center mb-4">
          {/* Quantidade de estrelas */}
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) =>
              star <= product.rate ? (
                <FaStar key={star} className="text-yellow-500 mr-1" />
              ) : (
                <FaRegStar key={star} className="text-yellow-500 mr-1" />
              )
            )}
          </div>

          {/* Quantidade de reviews */}
          <span className="text-gray-600 ml-1">
            | <b /> {product.reviews} Review{product.reviews > 1 && 's'}
          </span>
        </div>

        {/* Descrição do produto */}
        <div className="mb-4">
          <p className="text-gray-700">{product.resume}</p>
        </div>

        {/* Tamanhos do produto */}
        <div className="mb-4">
          <p className="font-medium mb-2">Size</p>
          <div className="flex space-x-2">
            {product.size.map((sz) => (
              <button
                key={sz}
                onClick={() => setSelectedSize(sz)}
                className={`border cursor-pointer rounded w-12 h-10 text-sm flex items-center justify-center transition ${
                  selectedSize === sz
                    ? 'bg-yellow-500 text-white border-yellow-500'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
                }`}
              >
                {sz}
              </button>
            ))}
          </div>
        </div>

        {/* Cores do produto */}
        <div className="mb-4">
          <p className="font-medium mb-2">Color</p>
          <div className="flex space-x-2">
            {product.colors.map((clr) => (
              <button
                key={clr}
                onClick={() => setSelectedColor(clr)}
                className={`w-8 h-8 rounded-full border-2 transition cursor-pointer ${
                  selectedColor === clr ? 'border-gray-800' : 'border-gray-200'
                }`}
                style={{ backgroundColor: clr }}
              />
            ))}
          </div>
        </div>

        {/* Ações do produto */}
        <div className="flex items-center space-x-4 mb-6">

          {/* Botão de aumentar/diminuir quantidade */}
          <div className="flex items-center border rounded">
            <button
              onClick={() => quantity > 1 && setQuantity((q) => q - 1)}
              className="px-3 py-2 cursor-pointer text-lg hover:bg-gray-100 transition"
            >
              –
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-3 py-2 cursor-pointer text-lg hover:bg-gray-100 transition"
            >
              +
            </button>
          </div>

          {/* Botão de adicionar ao carrinho */}
            <button 
              onClick={() => notifyAddToCart(product.name)}
              className="px-6 py-3 cursor-pointer bg-white border border-gray-800 text-gray-800 rounded hover:bg-gray-100 transition"
            >
            Add To Cart
          </button>
        </div>

        {/* Ficha técnica do produto */}
        <div className="border-t border-gray-200 pt-4">
          {/* ID do produto */}
          <p className="text-gray-600 mb-2">
            <span className="font-medium">SKU:</span> {product.id}
          </p>

          {/* Categoria do produto */}
          <p className="text-gray-600 mb-2">
            <span className="font-medium">Category:</span> {product.category}
          </p>

          {/* Tags do produto */}
          <p className="text-gray-600 mb-2">
            <span className="font-medium">Tags:</span> {product.tags.join(', ')}
          </p>

          {/* Redes sociais */}
          <div className="flex items-center">
            <span className="font-medium text-gray-600 mr-2">Share:</span>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 mr-3 cursor-pointer hover:text-gray-800 transition hover:opacity-70 hover:scale-110 duration-200"
              aria-label="Visitar Facebook da Compass UOL"
            >
              <FaFacebookF />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar LinkedIn da Compass UOL"
              className="text-gray-600 mr-3 cursor-pointer hover:text-gray-800 transition hover:scale-110 duration-200"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar Twitter da Compass UOL"
              className="text-gray-600 cursor-pointer hover:text-gray-800 transition hover:scale-110 duration-200"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
