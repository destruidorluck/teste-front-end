import React, { useState, useEffect, useMemo } from 'react';
import { Product, ApiResponse } from '../types/product';
import '../styles/product-list.scss';

interface ProductListProps {
  onProductSelect: (product: Product) => void;
  searchQuery?: string;
}

export const ProductList: React.FC<ProductListProps> = ({ onProductSelect, searchQuery = '' }) => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('relevancia');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
        );
        if (!response.ok) throw new Error('Falha ao carregar');
        const data: ApiResponse = await response.json();
        if (data.success) setAllProducts(data.products);
      } catch (err) {
        // Silenciosamente falhar e usar fallback
        console.error('Erro ao carregar produtos:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Filtra e ordena os produtos
  const filteredProducts = useMemo(() => {
    const filtered = allProducts.filter(p => 
      p.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortBy === 'menor-preco') return filtered.sort((a, b) => a.price - b.price);
    if (sortBy === 'maior-preco') return filtered.sort((a, b) => b.price - a.price);
    
    return filtered;
  }, [allProducts, searchQuery, sortBy]);

  if (loading) return <div className="product-list--loading">Carregando...</div>;

  return (
    <div className="product-list">
      <div className="product-list__header">
        <h1 className="product-list__title">Tecnologia</h1>
        <p className="product-list__results">{filteredProducts.length} produtos encontrados</p>
      </div>

      <div className="product-list__filters">
        <div className="product-list__filter">
          <label>Ordenar por:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="relevancia">Relevância</option>
            <option value="menor-preco">Menor Preço</option>
            <option value="maior-preco">Maior Preço</option>
          </select>
        </div>
      </div>

      <div className="product-list__container">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-list__item" onClick={() => onProductSelect(product)}>
            <div className="product-list__image-wrapper">
              <img src={product.photo} alt={product.productName} loading="lazy" />
            </div>
            <div className="product-list__content">
              <h3>{product.productName}</h3>
              <p className="product-list__price">
                R$ {(product.price / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
              <button className="product-list__button">Ver detalhes</button>
            </div>
          </div>
        ))}
        {filteredProducts.length === 0 && <p>Nenhum produto encontrado.</p>}
      </div>
    </div>
  );
};
