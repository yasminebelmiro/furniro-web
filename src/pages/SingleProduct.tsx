import { useParams } from "react-router-dom";
import type { ProductType } from "../types/ProductType";
import data from "../services/db.json";
import RelatedProducts from "../components/Relatedproducts";
import Footer from "../components/Footer";

const SingleProduct = () => {
  const { productId } = useParams<{ productId: string }>();
  
  //aqui vai buscar o produto atual pelo ID
  let currentProduct = data.products.find((product: ProductType) => product.id === productId);
  
  // Se não encontrar o produto (para teste), usar o primeiro produto da lista
  if (!currentProduct) {
    currentProduct = data.products[0]; // Produto padrão para teste
  }

  return (
    <div>
      {/* Aqui você pode adicionar o conteúdo principal da página do produto */}
      <div className="min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-4">{currentProduct.name}</h1>
        <p className="text-lg text-gray-600 mb-8">{currentProduct.description}</p>
        {/* Adicione mais detalhes do produto aqui conforme necessário */}
      </div>
      
      {/* Componente de Produtos Relacionados */}
      <RelatedProducts 
        currentProductId={currentProduct.id}
        category={currentProduct.category}
        products={data.products}
      />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SingleProduct