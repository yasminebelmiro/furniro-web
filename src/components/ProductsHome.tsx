import { useState } from "react";
import ListProduct from "./ListProduct";
import data from "../services/db.json";
const ProductsHome = () => {

//potencial para ser um hook personalizado
  const [cards, setCards] = useState(8);
  const totalProducts = data.products.length;
  const handleShowMore = () => {
    return setCards(cards + 4);
  };
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
      <ListProduct productsList={data.products} cardCount={cards} />
      {cards !== totalProducts ? (
        <button
          className=" border-gold border-1 py-4 px-30 m-10 text-gold hover:bg-gold hover:text-white cursor-pointer"
          onClick={handleShowMore}
        >
          Show More
        </button>
      ) : null}
    </div>
  );
};

export default ProductsHome;
