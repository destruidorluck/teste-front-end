import { useEffect, useState } from 'react';
import { Product } from '../types/product';
import { buildOriginalPrice, formatPrice } from '../utils/format';

interface ProductShowcaseProps {
  products: Product[];
  title: string;
  linkLabel?: string;
  sectionId?: string;
  showTabs?: boolean;
  onProductSelect: (product: Product) => void;
}

const tabs = ['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos'];

const ArrowIcon = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg
    aria-hidden="true"
    className={`product-showcase__arrow-icon product-showcase__arrow-icon--${direction}`}
    viewBox="0 0 8 14"
  >
    <path d="M6.8 1.2 1.9 7l4.9 5.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
  </svg>
);

const ProductCard = ({
  product,
  onClick,
}: {
  product: Product;
  onClick: (product: Product) => void;
}) => {
  const originalPrice = buildOriginalPrice(product.price);
  const installmentValue = product.price / 2;

  return (
    <article className="product-showcase__card" onClick={() => onClick(product)}>
      <div className="product-showcase__card-image">
        <img src={product.photo} alt={product.productName} loading="lazy" />
      </div>

      <div className="product-showcase__card-body">
        <p className="product-showcase__card-description">{product.productName}</p>
        <span className="product-showcase__card-price-old">{formatPrice(originalPrice)}</span>
        <strong className="product-showcase__card-price">{formatPrice(product.price)}</strong>
        <span className="product-showcase__card-installments">
          ou 2x de {formatPrice(installmentValue)} sem juros
        </span>
        <span className="product-showcase__card-shipping">Frete grátis</span>
      </div>

      <button
        className="product-showcase__card-button"
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onClick(product);
        }}
      >
        Comprar
      </button>
    </article>
  );
};

export const ProductShowcase = ({
  products,
  title,
  linkLabel,
  sectionId,
  showTabs = false,
  onProductSelect,
}: ProductShowcaseProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [startIndex, setStartIndex] = useState(0);

  // Responsividade do Carrossel
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 560) setVisibleCount(1);
      else if (window.innerWidth < 900) setVisibleCount(2);
      else if (window.innerWidth < 1180) setVisibleCount(3);
      else setVisibleCount(4);
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  // CRITICAL: Reseta o carrossel quando a busca muda os produtos
  useEffect(() => {
    setStartIndex(0);
  }, [products]);

  const moveProducts = (direction: 'prev' | 'next') => {
    if (products.length <= visibleCount) return;

    setStartIndex((current) => {
      if (direction === 'prev') {
        return (current - 1 + products.length) % products.length;
      }
      return (current + 1) % products.length;
    });
  };

  // Lógica de exibição circular
  const visibleProducts = products.length > 0 
    ? Array.from({ length: Math.min(visibleCount, products.length) }, (_, index) => {
        const productIndex = (startIndex + index) % products.length;
        return products[productIndex];
      })
    : [];

  // Se não houver produtos na busca, exibe aviso ou oculta
  if (products.length === 0) {
    return (
      <section className="product-showcase product-showcase--empty">
        <h2 style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
          Nenhum produto encontrado nesta vitrine.
        </h2>
      </section>
    );
  }

  return (
    <section className="product-showcase" aria-label={title} id={sectionId}>
      <header className="product-showcase__header">
        <span className="product-showcase__line" aria-hidden="true" />
        <div className="product-showcase__title-wrap">
          <h2>{title}</h2>
          {linkLabel ? <a href="#">{linkLabel}</a> : null}
        </div>
        <span className="product-showcase__line" aria-hidden="true" />
      </header>

      {showTabs && (
        <div className="product-showcase__tabs" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`product-showcase__tab${activeTab === tab ? ' is-active' : ''}`}
              type="button"
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      <div className="product-showcase__carousel">
        {products.length > visibleCount && (
          <button
            className="product-showcase__arrow product-showcase__arrow--left"
            onClick={() => moveProducts('prev')}
          >
            <ArrowIcon direction="left" />
          </button>
        )}

        <div className="product-showcase__grid">
          {visibleProducts.map((product, index) => (
            <ProductCard
              key={`${product.productName}-${index}`}
              product={product}
              onClick={onProductSelect}
            />
          ))}
        </div>

        {products.length > visibleCount && (
          <button
            className="product-showcase__arrow product-showcase__arrow--right"
            onClick={() => moveProducts('next')}
          >
            <ArrowIcon direction="right" />
          </button>
        )}
      </div>
    </section>
  );
};