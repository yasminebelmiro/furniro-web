import ListProduct from "./ListProduct";
import data from "../services/db.json";
import { useNavigate } from "react-router-dom";
const ProductsHome = () => {
  const navigate = useNavigate();
  return (
    <div className="font-poppins flex flex-col items-center justify-evenly">
      <h3
        className="
            text-[2rem] font-bold text-[#333333] 
            leading-normal py-10
          "
      >
        Our Products
      </h3>
      <ListProduct productsList={data.products} cardCount={8} />      <button
        className="border-gold border-1 py-4 px-30 m-10 text-gold cursor-pointer"
        onClick={() => navigate("/shop")}
      >
        Show More
      </button>
    </div>
  );
};

export default ProductsHome;
