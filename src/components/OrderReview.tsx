import { useState } from "react";
import { useSelector } from "react-redux";
import type { ProductType } from "../types/ProductType";
import { useNavigate } from "react-router-dom";

const OrderReview = () => {
  const products = useSelector((state: any) => state.cart.products);
  const totalPrice = useSelector((state: any) => state.cart.productsTotalPrice);
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate()
  return (
    <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-4 mt-20">
      <div className="w-full flex flex-col items-start justify-center gap-4 border-b border-gray-400 pb-5">
        <div className="w-full flex  justify-between items-center">
          <h2 className="text-xl font-bold">Product</h2>
          <h2 className="text-xl font-bold">Subtotal</h2>
        </div>
        {products.map((product: ProductType) => (
          <div className="w-full flex justify-between items-center">
            <p className="text-md text-gray-500 font-semibold">
              {product.name}{" "}
              <span className="text-black font-normal">
                X {product.quantity}{" "}
              </span>
            </p>
            <p className="text-md text-gray-800">R$ {product.price.toFixed(2)}</p>
          </div>
        ))}

        <div className="w-full flex justify-between items-center">
          <h3 className="text-md ">Subtotal</h3>
          <p className="text-sm text-gray-800">R$ {totalPrice.toFixed(2)}</p>
        </div>
        <div className="w-full flex justify-between items-center">
          <h3 className="text-md ">Total</h3>
          <p className="text-2xl text-gold font-bold">R$ {totalPrice.toFixed(2)}</p>
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-center gap-4 mt-10">
        <div className=" flex gap-4 items-center justify-start font-bold ">
          <input
            type="radio"
            name="opcao"
            value="a"
            checked={answer === "a"}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <label
            htmlFor=""
            className={`${answer === "a" ? "text-black" : "text-gray-400"} `}
          >
            Direct Bank Transfer
          </label>
        </div>
        {answer === "a" && (
          <p className="text-gray-400">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
        )}
        <div className=" flex gap-4 items-center justify-start font-bold">
          <input
            type="radio"
            name="opcao"
            value="b"
            checked={answer === "b"}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <label
            htmlFor=""
            className={`${answer === "b" ? "text-black" : "text-gray-400"} `}
          >
            Direct Bank Transfer
          </label>
        </div>
        {answer === "b" && (
          <p className="text-gray-400">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
        )}
        <div className=" flex gap-4 items-center justify-start font-bold">
          <input
            type="radio"
            name="opcao"
            value="c"
            checked={answer === "c"}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <label
            htmlFor=""
            className={`${answer === "c" ? "text-black" : "text-gray-400"} `}
          >
            Cash On Delivery
          </label>
        </div>
        {answer === "c" && (
          <p className="text-gray-400">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
        )}
        <p>
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <strong>privacy policy.</strong>
        </p>

        <div className="w-full flex items-center justify-center">
          <button
            type="submit"
            disabled={answer === ""}
            onClick={() => navigate("/contact")}
            className="w-[70%] text-center  py-3 border rounded-2xl "
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
