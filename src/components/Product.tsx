import { useNavigate } from "react-router-dom";
import type { ProductType } from "../types/ProductType";
import Discount from "./Discount";

type ProductProps = {
  product: ProductType;
};

const Product = ({ product }: ProductProps) => {
  const navigate = useNavigate();
  const discount = product.discount ?? 0;

  const discountedPrice = (product.price * (1 - discount / 100)).toFixed(2);

  return (
    <div className="font-poppins relative w-[80%] bg-gray-100 lg:w-[285px] md:h-[450px] flex flex-col xl:w-[80%] cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
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
    </div>
  );
};

export default Product;
