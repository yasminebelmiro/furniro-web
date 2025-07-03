import { BsBagX } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { ProductType } from "../types/ProductType";
import { IoCloseCircle } from "react-icons/io5";
import { removeProductToCart } from "../redux/cart/actions";

type SlideBarCartProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SlideBarCart = ({ isOpen, onClose }: SlideBarCartProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state: any) => state.cart.products);
  const totalPrice = useSelector((state: any) => state.cart.productsTotalPrice);

  if (!isOpen) return null;

  const handleDeleteClick = (id: string) => {
    dispatch(removeProductToCart(id));
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-60">
      <div className="font-poppins fixed top-0 right-0 w-full md:w-[50%] lg:w-[40%] xl:w-[30%] h-auto bg-white flex flex-col items-start justify-between z-50">
        <div className="w-full flex items-start justify-between p-10 gap-14">
          <h1 className="w-full pb-4 border-b-1 border-gray-400 text-2xl font-bold">
            Shopping Cart
          </h1>
          <button className="text-lg text-gray-400" onClick={onClose}>
            <BsBagX />
          </button>
        </div>

        {products.map((product: ProductType) => {
          return (
            <div
              className="w-[80%] flex  items-center m-10 my-5"
              key={product.id}
            >
              <img
                className="w-[8rem] h-[8rem] md:h-[5rem] md:w-[5rem] object-cover"
                src={product.thumbnail}
                alt={`Imagem de ${product.name}`}
              />
              <div className="w-full flex items-center justify-between">
                <div className="flex flex-col flex-wrap ml-10">
                  <p>{product.name}</p>
                  <p>
                    <span>{product.quantity}</span> X{" "}
                    <span className="text-gold">R$ {product.price} </span>
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteClick(product.id)}
                  className=" text-2xl text-gray-500 cursor-pointer"
                >
                  <IoCloseCircle />
                </button>
              </div>
            </div>
          );
        })}

        <div className="w-full flex flex-col items-start justify-between">
          {products.length < 1 ? (
            <p className="px-10 pb-10">Não há produtos no carrinho!</p>
          ) : (
            <div className=" w-full flex justify-between p-10">
              <p>Subtotal</p>
              <p className="text-gold">R${totalPrice}</p>
            </div>
          )}

          <div className="w-full flex items-start justify-between p-5 border-t-1 border-gray-400">
            <div className="w-full flex flex-row items-center justify-between gap-4">
              <button
                onClick={() => {
                  navigate("/cart");
                  onClose();
                }}
                className="text-sm px-4 py-1 border-1 border-black rounded-2xl cursor-pointer"
              >
                Cart
              </button>
              <button
                onClick={() => {
                  navigate("/checkout");
                  onClose();
                }}
                className="text-sm px-4 py-1 border-1 border-black rounded-2xl cursor-pointer"
              >
                Checkout
              </button>
              <span className="text-sm px-4 py-1 border-1 border-black rounded-2xl">
                Comparison
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideBarCart;
