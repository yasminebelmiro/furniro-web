import { useDispatch, useSelector } from "react-redux";
import CurrentPage from "../components/CurrentPage";
import type { ProductType } from "../types/ProductType";
import { FaTrash } from "react-icons/fa";
import CartActionTypes from "../redux/cart/action-type";
import { useNavigate } from "react-router-dom";
import { SignedIn, useUser } from "@clerk/clerk-react";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state: any) => state.cart.products);
  const totalPrice = useSelector((state: any) => state.cart.productsTotalPrice);

  const { isSignedIn } = useUser();

  const handleIsSignedIn = () => {
    if (!isSignedIn) {
      navigate("/login");
      return;
    }

    navigate("/checkout");
  };

  const handleMore = (id: string, currentQuantity: number) => {
    dispatch({
      type: CartActionTypes.UPDATE_PRODUCT_QUANTITY,
      payload: {
        id,
        quantity: currentQuantity + 1,
      },
    });
  };

  const handleLess = (id: string, currentQuantity: number) => {
    if (currentQuantity <= 1) {
      dispatch({
        type: CartActionTypes.REMOVE_PRODUCT,
        payload: { id },
      });
    } else {
      dispatch({
        type: CartActionTypes.UPDATE_PRODUCT_QUANTITY,
        payload: {
          id,
          quantity: currentQuantity - 1,
        },
      });
    }
  };

  const handleRemove = (id: string) => {
    dispatch({
      type: CartActionTypes.REMOVE_PRODUCT,
      payload: { id },
    });
  };

  return (
    <div className="font-poppins mt-24">
      <CurrentPage currentPage="Cart" />
      <div className="flex flex-col lg:flex-row py-4 px-2 lg:m-4">
        <div className="w-full lg:w-[70%] flex flex-col  items-center justify-start mr-6">
          <ul className="w-full  flex items-center justify-between gap-4 py-7 bg-creme">
            <li className="w-[20%] text-s"></li>
            <li className="w-[20%] text-s">Product</li>
            <li className="w-[20%] text-s">Price</li>
            <li className="w-[20%] text-s">Quantity</li>
            <li className="w-[20%] text-s">Subtotal</li>
            <li className="w-[20%] text-s"></li>
          </ul>
          {products.length < 1 && (
            <p className="mt-5">Não há produtos no carrinho! </p>
          )}
          {products.map((product: ProductType) => (
            <ul
              className="w-full h-auto flex items-center justify-between gap-4 my-4"
              key={product.id}
            >
              <li className="w-[20%] text-[0.6rem]">
                <img
                  className="min-w-[3rem] h-[3rem] md:w-[7rem] md:h-[7rem] object-cover rounded-xl"
                  src={product.thumbnail}
                  alt={product.name}
                />
              </li>
              <li className="w-[20%] text-xs text-gray-500">{product.name}</li>
              <li className="w-[20%] text-xs text-gray-500">
                R$ {product.price.toFixed(2)}
              </li>
              <li className="w-[20%] text-xs  text-center ">
                <div className="lg:w-[40%] border-1 border-gray-400 rounded-2xl flex justify-between px-1">
                  <button
                    className="cursor-pointer"
                    onClick={() =>
                      handleLess(product.id, product.quantity ?? 1)
                    }
                  >
                    -
                  </button>
                  {product.quantity}
                  <button
                    className="cursor-pointer"
                    onClick={() =>
                      handleMore(product.id, product.quantity ?? 1)
                    }
                  >
                    +
                  </button>
                </div>
              </li>
              <li className="w-[20%] text-xs ">
                R$ {(product.price * product.quantity).toFixed(2)}
              </li>
              <li className="w-[20%] text-[1rem] text-gold text-center">
                <button onClick={() => handleRemove(product.id)}>
                  <FaTrash />
                </button>
              </li>
            </ul>
          ))}
        </div>
        <div className="w-full h-auto bg-creme px-6 py-10 flex flex-col items-center justify-start lg:w-[30%]">
          <h1 className="font-bold mb-10 text-2xl">Cart Totals</h1>
          <div className="flex w-full justify-between items-center mb-3">
            <p className="text-sm md:text-lg">Subtotal</p>
            <p className="text-sm md:text-lg text-gray-500">
              {totalPrice.toFixed(2)}
            </p>
          </div>
          <div className="flex w-full justify-between items-center mb-5">
            <p className="text-sm md:text-lg">Total</p>
            <p className="text-lg md:text-xl text-gold">
              {totalPrice.toFixed(2)}
            </p>
          </div>

          <button
            onClick={handleIsSignedIn}
            disabled={products.length < 1}
            className="w-[80%] px-5 py-2 border rounded-2xl mt-7 cursor-pointer"
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
