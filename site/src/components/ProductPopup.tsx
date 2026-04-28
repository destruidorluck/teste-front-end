import React, { useState } from 'react';
import { Product } from '../types/product';
import '../styles/product-popup.scss';

interface ProductPopupProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart?: (product: Product) => void;
}

export const ProductPopup: React.FC<ProductPopupProps> = ({ 
  product, 
  isOpen, 
  onClose,
  onAddToCart 
}) => {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const priceWithDiscount = Math.round(product.price * 0.8);
  const installmentValue = Math.ceil(product.price / 12000);
  const installmentPrice = Math.round(priceWithDiscount / 12);

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
    onClose();
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="popup__close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="#271C47" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="popup__content">
          <div className="popup__image-section">
            <img src={product.photo} alt={product.productName} className="popup__image" />
          </div>

          <div className="popup__info">
            <h2 className="popup__title">{product.productName}</h2>
            
            <div className="popup__rating">
              <div className="popup__stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} width="14" height="14" viewBox="0 0 14 14" fill="#F7CA11">
                    <path d="M7 1L9 6H14L10 9L11.5 14L7 11L2.5 14L4 9L0 6H5L7 1Z" />
                  </svg>
                ))}
              </div>
              <span className="popup__rating-text">4.5 (342 avaliações)</span>
            </div>

            <div className="popup__prices">
              <div className="popup__price-original">
                De: <span className="strikethrough">
                  R$ {(product.price / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
              <div className="popup__price-current">
                Por: <span>
                  R$ {(priceWithDiscount / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
              <div className="popup__price-installment">
                ou {installmentValue}x de R$ {(installmentPrice / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} sem juros
              </div>
            </div>

            <div className="popup__shipping">
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
                <path d="M1 15H16V12.5C16 12.2239 15.7761 12 15.5 12H15V5C15 4.44772 14.5523 4 14 4H2C1.44772 4 1 4.44772 1 5V12H0.5C0.223858 12 0 12.2239 0 12.5V15H1ZM2 5H14V12H2V5Z" fill="#E71837"/>
                <circle cx="3" cy="13" r="1" fill="#E71837"/>
                <circle cx="13" cy="13" r="1" fill="#E71837"/>
              </svg>
              <span>Frete grátis</span>
            </div>

            <div className="popup__quantity">
              <label htmlFor="quantity">Quantidade:</label>
              <div className="popup__quantity-control">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <input 
                  id="quantity"
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                />
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            <button className="popup__button" onClick={handleAddToCart}>
              COMPRAR
            </button>

            <div className="popup__description">
              <h3>Descrição do Produto</h3>
              <p>{product.descriptionShort}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
