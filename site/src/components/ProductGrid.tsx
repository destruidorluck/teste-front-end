import React, { useState, useEffect } from 'react';
import { Product, ApiResponse } from '../types/product';
import { ProductCard } from './ProductCard';
import '../styles/product-grid.scss';

interface ProductGridProps {
  onProductSelect: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ onProductSelect }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data: ApiResponse = await response.json();
        
        if (data.success && data.products) {
          setProducts(data.products);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="product-grid product-grid--loading">Carregando produtos...</div>;
  }

  if (error) {
    return <div className="product-grid product-grid--error">Erro ao carregar produtos: {error}</div>;
  }

  return (
    <div className="product-grid">
      <div className="product-grid__container">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onProductClick={onProductSelect}
          />
        ))}
      </div>
    </div>
  );
};
