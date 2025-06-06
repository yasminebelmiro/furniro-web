import { useEffect, useState, useMemo } from "react";
import data from "../services/db.json";
import ListProduct from "./ListProduct";
import type { ProductType } from "../types/ProductType";
import { useParams } from "react-router-dom";
import Search from "./Search";

const ProductsShop = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 8;

  const [filters, setFilters] = useState<{ rate: number | null; size: string | null }>({
    rate: null,
    size: null,
  });

  useEffect(() => {
    const filteredByCategory = category
      ? data.products.filter(
          (product: ProductType) => product.category === category
        )
      : data.products;
    
    const filtered = filteredByCategory.filter(product => {
        const rateMatch = filters.rate ? product.rate === filters.rate : true;
        const sizeMatch = filters.size ? product.size?.includes(filters.size) : true;
        return rateMatch && sizeMatch;
    });

    setProducts(filtered);
    setCurrentPage(1);
  }, [category, filters]);

  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return products.slice(startIndex, endIndex);
  }, [products, currentPage]);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageClick = (page: number) => setCurrentPage(page);
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      <Search
        qtyProductsShow={currentProducts.length}
        totalQtyProducts={products.length}
        setFilters={setFilters}
        currentPage={currentPage}
        productsPerPage={productsPerPage}
      />
      <div className="font-poppins my-10">
        {products.length > 0 ? (
          <>
            <ListProduct
              productsList={currentProducts}
              cardCount={productsPerPage}
            />
            <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageClick(page)}
                  className={`cursor-pointer p-4 rounded-xl ${
                    currentPage === page ? "bg-gold text-white" : "bg-creme"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="cursor-pointer p-3 rounded-xl bg-creme"
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center h-40">
            <p className="text-xl text-gray-500 font-medium">
              Nenhum item encontrado.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsShop;