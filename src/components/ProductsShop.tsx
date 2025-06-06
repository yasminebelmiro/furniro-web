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

  // NOVO ESTADO: Armazena os filtros ativos de 'rate' e 'size'.
  const [filters, setFilters] = useState<{ rate: number | null; size: string | null }>({
    rate: null,
    size: null,
  });

  useEffect(() => {
    // A variável agora é 'const'
    const filteredByCategory = category
      ? data.products.filter(
          (product: ProductType) => product.category === category
        )
      : data.products;
    
    // LÓGICA ADICIONADA: Aplica os filtros de 'rate' e 'size' na lista.
    const filtered = filteredByCategory.filter(product => {
        // Filtro por avaliação exata (===). Retorna 'true' se o filtro não estiver ativo.
        const rateMatch = filters.rate ? product.rate === filters.rate : true;
        
        // Filtro por tamanho. Retorna 'true' se o filtro não estiver ativo.
        const sizeMatch = filters.size ? product.size?.includes(filters.size) : true;
            
        return rateMatch && sizeMatch;
    });

    setProducts(filtered);
    setCurrentPage(1);
    // DEPENDÊNCIA ADICIONADA: O 'useEffect' agora re-executa quando os 'filters' mudam.
  }, [category, filters]);

  // O resto do componente (useMemo, paginação) não foi alterado.
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
      {/* PROP ADICIONADA: Passa a função 'setFilters' para o Search atualizar o estado deste componente (pai). */}
      <Search
        qtyProductsShow={currentProducts.length}
        totalQtyProducts={products.length}
        setFilters={setFilters}
      />
      <div className="font-poppins my-10">
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
      </div>
    </>
  );
};

export default ProductsShop;