import { useEffect, useState } from 'react';

import backFridayImg from '../assets/Backfriday.png';
import parceirosImg from '../assets/parceiros.png';

import iconTech from '../assets/icontech.svg';
import iconSupermercado from '../assets/iconsupermercados.png';
import iconBebidas from '../assets/whiskey.png';
import iconFerramentas from '../assets/ferramentas 1.png';
import iconSaude from '../assets/cuidados-de-saude 1.png';
import iconEsportes from '../assets/corrida 1.png';
import iconModa from '../assets/moda 1.png';

import brandOne from '../assets/Logo-1.png';
import brandTwo from '../assets/Logo-2.png';
import brandThree from '../assets/Logo-3.png';
import brandFour from '../assets/Logo-4.png';
import brandFive from '../assets/Logo-5.png';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProductModal } from '../components/ProductModal';
import { ProductShowcase } from '../components/ProductShowcase';
import { getProducts } from '../data/products';
import { trackEvent } from '../lib/analytics';
import { Product } from '../types/product';
import '../styles/home.scss';

const categoryCards = [
  { name: 'Tecnologia', icon: iconTech },
  { name: 'Supermercado', icon: iconSupermercado },
  { name: 'Bebidas', icon: iconBebidas },
  { name: 'Ferramentas', icon: iconFerramentas },
  { name: 'Saúde', icon: iconSaude },
  { name: 'Esportes e Fitness', icon: iconEsportes },
  { name: 'Moda', icon: iconModa },
];

const brandItems = [brandOne, brandTwo, brandThree, brandFour, brandFive].map((image, index) => ({
  id: `brand-${index + 1}`,
  image,
}));

export const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [activeCategory, setActiveCategory] = useState('Tecnologia');

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoadingProducts(true);
      const loadedProducts = await getProducts();
      setProducts(loadedProducts);
      setIsLoadingProducts(false);
    };

    loadProducts();
  }, []);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);

    trackEvent('select_product', {
      product_name: product.productName,
      price_in_cents: product.price,
      source: 'home_showcase',
    });
  };

  return (
    <div className="page-shell">
      <Header />

      <main className="home">
        <section
          className="hero"
          style={{
            backgroundImage: `url(${backFridayImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="hero__container">
            <div className="hero__content">
              <h1>Venha conhecer nossas promoções</h1>
              <p>
                <strong>50% Off</strong> nos produtos
              </p>
              <a href="#top-products" className="hero__button">
                Ver produto
              </a>
            </div>
          </div>
        </section>

        <section className="category-strip" aria-label="Categorias em destaque">
          <div className="category-strip__inner">
            {categoryCards.map((category) => (
              <article
                key={category.name}
                className={`category-strip__card ${activeCategory === category.name ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(category.name)}
              >
                <div className="category-strip__icon-container">
                  <img src={category.icon} alt={`Ícone ${category.name}`} loading="lazy" />
                </div>
                <h2>{category.name}</h2>
              </article>
            ))}
          </div>
        </section>

        {isLoadingProducts ? (
          <section className="home__loading">Carregando produtos...</section>
        ) : (
          <>
            <ProductShowcase
              products={products}
              title="Produtos relacionados"
              sectionId="top-products"
              linkLabel="Ver todos"
              showTabs
              onProductSelect={handleProductSelect}
            />

            <section className="partner-grid">
              <article className="partner-banner" style={{ backgroundImage: `url(${parceirosImg})` }}>
                <div className="partner-banner__copy">
                  <h2>Parceiros</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                  <button type="button">Confira</button>
                </div>
              </article>
              <article className="partner-banner" style={{ backgroundImage: `url(${parceirosImg})` }}>
                <div className="partner-banner__copy">
                  <h2>Parceiros</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                  <button type="button">Confira</button>
                </div>
              </article>
            </section>

            <ProductShowcase
              products={products}
              title="Produtos relacionados"
              linkLabel="Ver todos"
              onProductSelect={handleProductSelect}
            />

            <section className="partner-grid">
              <article className="partner-banner" style={{ backgroundImage: `url(${parceirosImg})` }}>
                <div className="partner-banner__copy">
                  <h2>Parceiros</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                  <button type="button">Confira</button>
                </div>
              </article>
              <article className="partner-banner" style={{ backgroundImage: `url(${parceirosImg})` }}>
                <div className="partner-banner__copy">
                  <h2>Parceiros</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                  <button type="button">Confira</button>
                </div>
              </article>
            </section>

            <section className="brand-showcase">
              <header className="brand-showcase__header">
                <span className="product-showcase__line" />
                <h2>Navegue por marcas</h2>
                <span className="product-showcase__line" />
              </header>
              <div className="brand-showcase__grid">
                {brandItems.map((brand) => (
                  <div key={brand.id} className="brand-showcase__item">
                    <img src={brand.image} alt="Logo Marca" loading="lazy" />
                  </div>
                ))}
              </div>

              <ProductShowcase
                products={products}
                title="Produtos relacionados"
                linkLabel="Ver todos"
                onProductSelect={handleProductSelect}
              />
            </section>
          </>
        )}
      </main>

      <Footer />
      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};