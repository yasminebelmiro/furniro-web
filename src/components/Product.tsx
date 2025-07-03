import { useNavigate } from "react-router-dom";
import type { ProductType } from "../types/ProductType";
import Discount from "./Discount";
import { IoShareSocial } from "react-icons/io5";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/cart/actions";

type ProductProps = {
  product: ProductType;
};

const Product = ({ product }: ProductProps) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const discount = product.discount ?? 0;
  const notifyAddToCart = (productName: string) =>
    toast.info(`${productName} adicionado ao carrinho!`);

  const discountedPrice = (product.price * (1 - discount / 100)).toFixed(2);

  const handleProductClick = () => {
    dispatch(addProductToCart(product));
  }

  return (
    <div
      className="z-10 font-poppins relative w-[80%] bg-gray-100 lg:w-[285px] md:h-[450px] flex flex-col xl:w-[80%] cursor-pointer"
      onClick={() => {
        navigate(`/product/${product.id}`);
      }}
    >
      <img
        className="w-full min-h-[300px] object-cover object-center"
        src={product.thumbnail}
        alt={product.name}
      />
      {discountedPrice && (
        <Discount discount={product.discount} date={product.date} />
      )}

      <div className="font-poppins p-4 h-full">
        <h3 className="text-gray-900 font-bold ">{product.name} </h3>
        <p className="text-gray-500 text-[.8rem]">{product.subtitle} </p>
        <div className="w-full flex text-gray-900 justify-between py-5">
          <p className="font-bold">R$ {product.price.toFixed(2)} </p>
          {discountedPrice && (
            <p className="text-gray-300 line-through">R$ {discountedPrice}</p>
          )}
        </div>
      </div>
      {/*Overlay */}
      <div className="z-20 absolute w-full h-full flex flex-col gap-6 items-center justify-center bg-[#3A3A3A]/70 opacity-0 hover:opacity-100 transition-opacity">
        <button
          className="w-[70%] bg-white py-3 text-gold cursor-pointer z-100"
          onClick={(e) => {
            e.stopPropagation();
            notifyAddToCart(product.name);
            handleProductClick();
          }}
        >
          Add to cart
        </button>
        <ul className="flex gap-2 text-white">
          <li className="flex items-center text-[15px]">
            <span className="pr-1 text-[15px]">
              <IoShareSocial />
            </span>
            Share
          </li>
          <li className="flex items-center text-[15px]">
            <span className="pr-1 text-[15px]">
              <MdOutlineCompareArrows />
            </span>
            Compare
          </li>
          <li className="flex items-center text-[15px]">
            <span className="pr-1 text-[15px]">
              <FaRegHeart />
            </span>
            Like
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
