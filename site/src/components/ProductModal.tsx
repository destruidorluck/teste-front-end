import { useEffect, useState } from 'react';
import { Product } from '../types/product';
import { formatPrice } from '../utils/format';
import '../styles/product-modal.scss';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isOpen]);

  useEffect(() => {
    setQuantity(1);
  }, [product]);

  if (!isOpen || !product) return null;

  return (
    <div className="product-modal" onClick={onClose}>
      <div
        className="product-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="product-modal__close" type="button" onClick={onClose} aria-label="Fechar modal">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6 18 18M18 6 6 18" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </button>

        <div className="product-modal__content">
          <div className="product-modal__media">
            <img src={product.photo} alt={product.productName} className="product-modal__image" />
          </div>

          <div className="product-modal__info">
            <h2 id="product-modal-title" className="product-modal__title">
              {product.productName.toUpperCase()}
            </h2>
            <strong className="product-modal__price">{formatPrice(product.price)}</strong>
            <p className="product-modal__description">
              Many desktop publishing packages and web page editors now many desktop publishing
            </p>
            <a href="#top-products" className="product-modal__details-link">
              Veja mais detalhes do produto &gt;
            </a>

            <div className="product-modal__actions">
              <div className="product-modal__quantity" aria-label="Quantidade do produto">
                <button
                  type="button"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  aria-label="Diminuir quantidade"
                >
                  -
                </button>
                <span>{String(quantity).padStart(2, '0')}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((current) => current + 1)}
                  aria-label="Aumentar quantidade"
                >
                  +
                </button>
              </div>

              <button className="product-modal__buy-button" type="button">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
