import { useEffect, useState } from "react";
import data from "../services/db.json";
import ListProduct from "./ListProduct";
import type { ProductType } from "../types/ProductType";
import { useParams } from "react-router-dom";
import Search from "./Search";

const ProductsShop = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 16;

  const totalPages = Math.ceil(products.length / productsPerPage);
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  //verifica a categoria
  useEffect(() => {
    if (category) {
      const filtered = data.products.filter(
        (product: ProductType) => product.category === category
      );
      setProducts(filtered);
    } else {
      setProducts(data.products);
    }
    setCurrentPage(1);
  }, [category]);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  //Contra a paginação
  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <>
      {/* Passa atributos para o search*/}
      <Search
        qtyProductsShow={currentProducts.length}
        totalQtyProducts={products.length}
      />
      <div className="font-poppins my-10 ">
        {/*Lista de produtos */}
        <ListProduct
          productsList={currentProducts}
          cardCount={productsPerPage}
        />

        {/* Botões de paginação*/}
        <div className="flex justify-center items-center gap-2 mt-8">
          {pagesArray.slice(0, 3).map((page) => (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={` p-4 md:p-5 rounded-2xl cursor-pointer ${
                currentPage === page ? "bg-gold text-white" : "bg-creme"
              }`}
            >
              {page}
            </button>
          ))}

          {currentPage < totalPages && (
            <button
              onClick={handleNext}
              className="p-4 md:p-5 rounded-2xl cursor-pointer bg-creme"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductsShop;
