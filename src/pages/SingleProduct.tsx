import { useParams } from "react-router-dom";
import type { ProductType } from "../types/ProductType";
import data from "../services/db.json";
import CascadeHeader from '../components/CascadeHeader'
import RelatedProducts from "../components/RelatedProducts";

const SingleProduct = () => {
  const { productId } = useParams<{ productId: string }>();
    //aqui vai buscar o produto atual pelo ID
  const currentProduct = data.products.find((product: ProductType) => product.id === productId);
  
  // Se não encontrar o produto, mostrar página de erro
  if (!currentProduct) {
    return (
      <>
        <CascadeHeader />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Produto não encontrado</h1>
            <p className="text-gray-600 mb-6">O produto que você está procurando não existe.</p>
            <button 
              onClick={() => window.history.back()}
              className="bg-gold text-white px-6 py-2 rounded hover:bg-gold/80"
            >
              Voltar
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <CascadeHeader />
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
      </div>
    </>
  );
};

export default SingleProduct
