import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/api";

const CascadeHeader = () => {
  const location = useLocation();
  const { productId } = useParams();
  const [productName, setProductName] = useState("");

  useEffect(() => {
    if (productId) {
      getProductById(productId)
        .then((product) => {
          setProductName(product?.name?.trim() || "Produto");
        })
        .catch(() => {
          setProductName("Produto");
        });
    }
  }, [productId]);

  const isProductPage = location.pathname.startsWith("/product");

  return (
    <div className="w-full bg-[#F9F1E7] flex-shrink-0 pt-24">
      <div
        className="mx-auto max-w-[90rem] w-full flex items-center px-4 sm:px-8 py-6 sm:py-8"
        style={{ lineHeight: "normal" }}
      >
        <nav className="flex items-center flex-wrap gap-2 font-poppins text-base font-normal text-[#9F9F9F]">
          <Link to="/" className="hover:underline text-[#9F9F9F]">
            Home
          </Link>
          <span className="text-black">{`>`}</span>
          <Link to="/shop" className="hover:underline text-[#9F9F9F]">
            Shop
          </Link>

          {isProductPage && productName && (
            <>
              <span className="text-black">{`>`}</span>
              <div className="flex items-center gap-2">
                <div className="w-[0.125rem] h-[2.3125rem] bg-[#9F9F9F]" />
                <span className="text-black font-poppins text-[1rem] font-normal leading-normal">
                  {productName}
                </span>
              </div>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default CascadeHeader;
