import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProductList } from '../components/ProductList';
import { ProductPopup } from '../components/ProductPopup';
import { Product } from '../types/product';
import '../styles/products-page.scss';

export const ProductsPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  return (
    <div className="products-page">
      <Header onSearch={setSearchQuery} />
      <main className="products-page__main">
        <ProductList 
          searchQuery={searchQuery} 
          onProductSelect={handleProductSelect} 
        />
      </main>
      <ProductPopup
        product={selectedProduct}
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onAddToCart={(p) => console.log('Adicionado:', p)}
      />
      <Footer />
    </div>
  );
};