import React from 'react';
import { Product } from '../types/product';
import '../styles/product-card.scss';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  const priceWithDiscount = Math.round(product.price * 0.8); // 20% discount
  const installments = Math.ceil(product.price / 12);
  const hasDiscount = true;

  return (
    <div className="product-card" onClick={() => onProductClick(product)}>
      <div className="product-card__image-wrapper">
        <img src={product.photo} alt={product.productName} className="product-card__image" />
      </div>
      
      <div className="product-card__content">
        <h3 className="product-card__name">{product.productName}</h3>
        <p className="product-card__description">{product.descriptionShort}</p>
        
        <div className="product-card__price-section">
          {hasDiscount && (
            <span className="product-card__price-original">R$ {(product.price / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          )}
          <span className="product-card__price">R$ {(priceWithDiscount / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>

        <div className="product-card__installments">
          ou {Math.ceil(product.price / 12000)}x de R$ {(installments / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} sem juros
        </div>

        <div className="product-card__shipping">
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
            <path d="M1 13H14V11.5C14 11.2239 13.7761 11 13.5 11H13V5C13 4.44772 12.5523 4 12 4H2C1.44772 4 1 4.44772 1 5V11H0.5C0.223858 11 0 11.2239 0 11.5V13H1ZM2 5H12V11H2V5Z" fill="#E71837"/>
            <circle cx="3.5" cy="12" r="1" fill="#E71837"/>
            <circle cx="11.5" cy="12" r="1" fill="#E71837"/>
          </svg>
          <span>Frete grátis</span>
        </div>

        <button className="product-card__button">COMPRAR</button>
      </div>
    </div>
  );
};
