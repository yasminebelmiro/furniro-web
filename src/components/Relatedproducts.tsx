import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { ProductType } from '../types/ProductType';

interface RelatedProductsProps {
  currentProductId: string;
  category: string;
  products: ProductType[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ 
  currentProductId, 
  category, 
  products 
}) => {
  const navigate = useNavigate();

  //Filtra produtos da mesma categoria, excluindo o produto atual
  const relatedProducts = products
    .filter(product => 
      product.category === category && 
      product.id !== currentProductId
    )
    .slice(0, 4); // Mostra apenas 4 produtos

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  const handleShowMore = () => {
    navigate('/shop');
  };

  if (relatedProducts.length === 0) {
    return null;
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: '1440px',
      margin: '0 auto',
      padding: '56px 20px'
    }}>      <h2 style={{
        fontFamily: 'var(--font-poppins)',
        fontWeight: 500,
        fontSize: '36px',
        color: '#000000',
        marginBottom: '32px',
        textAlign: 'center'
      }}>
        Related Products
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(285px, 1fr))',
        gap: '32px',
        width: '100%',
        maxWidth: '1236px',
        marginBottom: '32px'
      }}>
        {relatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleProductClick(product.id)}
          />
        ))}
      </div>      <button
        onClick={handleShowMore}
        style={{
          width: '245px',
          height: '48px',
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--color-gold)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-poppins)',
          fontSize: '16px',
          fontWeight: 600,
          lineHeight: '150%',
          color: 'var(--color-gold)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          const target = e.currentTarget;
          const goldColor = getComputedStyle(document.documentElement).getPropertyValue('--color-gold').trim();
          target.style.backgroundColor = goldColor;
          target.style.color = '#FFFFFF';
        }}
        onMouseLeave={(e) => {
          const target = e.currentTarget;
          const goldColor = getComputedStyle(document.documentElement).getPropertyValue('--color-gold').trim();
          target.style.backgroundColor = '#FFFFFF';
          target.style.color = goldColor;
        }}>
        Show More
      </button>
    </div>
  );
};

interface ProductCardProps {
  product: ProductType;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const discountedPrice = product.discount 
    ? (product.price * (1 - product.discount / 100)).toFixed(2)
    : null;

  const isNew = () => {
    const productDate = new Date(product.date);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - productDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 30; // aqui vai considera um novo se foi adicionado nos últimos 30 dias
  };

  return (
    <div 
      onClick={onClick}
      style={{
        width: '100%',
        maxWidth: '285px',
        height: '446px',
        position: 'relative',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        margin: '0 auto',
        backgroundColor: '#F4F5F7',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.02)';
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
      }}
    >
      <div style={{
        width: '100%',
        height: '301px',
        overflow: 'hidden',
        flexShrink: 0
      }}>
        <img 
          src={product.thumbnail} 
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      {(product.discount || isNew()) && (
        <div style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          backgroundColor: isNew() ? '#2EC1AC' : '#E97171',          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-poppins)',
          fontWeight: 500,
          fontSize: '12px',
          color: '#FFFFFF',
          zIndex: 1
        }}>
          {isNew() ? 'New' : `-${product.discount}%`}
        </div>
      )}

      <div style={{
        width: '100%',
        height: '145px',
        backgroundColor: '#F4F5F7',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        flexShrink: 0
      }}>
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start'
        }}>
          <h3 style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 600,
            fontSize: '20px',
            color: '#3A3A3A',
            margin: '0 0 4px 0',
            lineHeight: '1.2',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>
            {product.name}
          </h3>
          <p style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 500,
            fontSize: '14px',
            color: '#898989',
            margin: '0 0 8px 0',
            lineHeight: '1.3',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}>
            {product.subtitle}
          </p>
        </div>
        <div style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <span style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 600,
            fontSize: '18px',
            color: '#3A3A3A'
          }}>
            R$ {discountedPrice || product.price.toFixed(2)}
          </span>
          {discountedPrice && (
            <span style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 400,
              fontSize: '14px',
              color: '#B0B0B0',
              textDecoration: 'line-through'
            }}>
              R$ {product.price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;