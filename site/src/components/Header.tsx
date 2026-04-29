import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/Logo.png';
import ShieldCheck from '../assets/ShieldCheck.svg';
import Truck from '../assets/Truck.svg';
import CreditCard from '../assets/CreditCard.svg';
import MagnifyingGlass from '../assets/MagnifyingGlass.svg';
import Group from '../assets/Group.svg';
import Heart from '../assets/Heart.svg';
import UserCircle from '../assets/UserCircle.svg';
import ShoppingCart from '../assets/ShoppingCart.svg';
import CrownSimple from '../assets/CrownSimple.svg';
import '../styles/header.scss';

import { Product } from '../types/product';
import { getProducts } from '../data/products';

interface HeaderProps {
  onSearch?: (term: string) => void;
}

const topBarItems = [
  ['Compra', '100% segura', ShieldCheck],
  ['Frete grátis', 'acima de R$ 200', Truck],
  ['Parcele', 'suas compras', CreditCard],
];

const navItems = [
  'Todas Categorias',
  'Supermercado',
  'Livros',
  'Moda',
  'Lançamentos',
  'Ofertas do dia',
];

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchContainerRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setAllProducts(data);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch?.(value);

    if (value.trim().length > 0) {
      const filtered = allProducts.filter((product) =>
        product.productName.toLowerCase().includes(value.toLowerCase()),
      );
      setFilteredProducts(filtered);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleSearchSubmit = () => {
    onSearch?.(searchValue);
    setShowDropdown(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearchSubmit();
    }
  };

  return (
    <header className="header">
      <div className="header__topbar">
        <div className="header__topbar-inner">
          {topBarItems.map(([highlight, text, icon]) => (
            <div key={highlight} className="header__topbar-item">
              <img src={icon} alt="" aria-hidden="true" />
              <p>
                <strong>{highlight}</strong> {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="header__main-wrapper">
        <div className="header__main">
          <a href={import.meta.env.BASE_URL} className="header__logo" aria-label="Página inicial">
            <img src={logo} alt="Econverse" />
          </a>

          <label className="header__search" aria-label="Busca" ref={searchContainerRef}>
            <input
              type="search"
              placeholder="O que você está buscando?"
              value={searchValue}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              onFocus={() => {
                if (searchValue) setShowDropdown(true);
              }}
            />
            <img
              src={MagnifyingGlass}
              alt="Buscar"
              onClick={handleSearchSubmit}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
            />

            {showDropdown && filteredProducts.length > 0 && (
              <div className="header__search-dropdown">
                {filteredProducts.slice(0, 5).map((product, index) => (
                  <div key={index} className="header__search-item">
                    <img src={product.photo} alt={product.productName} loading="lazy" />
                    <div className="header__search-item-info">
                      <p>{product.productName}</p>
                      <strong>R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </label>

          <div className="header__actions">
            <button type="button" aria-label="Pedidos">
              <img src={Group} alt="" />
            </button>
            <button type="button" aria-label="Favoritos">
              <img src={Heart} alt="" />
            </button>
            <button type="button" aria-label="Minha conta">
              <img src={UserCircle} alt="" />
            </button>
            <button type="button" aria-label="Carrinho">
              <img src={ShoppingCart} alt="" />
            </button>
          </div>
        </div>
      </div>

      <nav className="header__nav">
        <div className="header__nav-inner">
          {navItems.map((item) => (
            <a key={item} href="#" className="header__nav-link">
              {item}
            </a>
          ))}
          <a href="#newsletter" className="header__nav-link header__nav-link--with-icon">
            <img src={CrownSimple} alt="" />
            Assinatura
          </a>
        </div>
      </nav>
    </header>
  );
};