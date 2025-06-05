import { useEffect, useState } from "react";
import data from "../services/db.json";
import ListProduct from "./ListProduct";
import type { ProductType } from "../types/ProductType";
import { useParams } from "react-router-dom";
import Search from "./Search";

const ProductsShop = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    if (category) {
      const filtered = data.products.filter(
        (product: ProductType) => product.category === category
      );
      console.log(filtered);

      setProducts(filtered);
    } else {
      setProducts(data.products);
    }
  }, [category]);

  return (
    <>
      <Search qtyProducts={products.length} />
      <div className="my-10">
        <ListProduct productsList={products} cardCount={16} />
      </div>
    </>
  );
};

export default ProductsShop;
