import React from 'react';
import '../styles/Header.css';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function Header({ searchTerm, onSearchChange }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">🎬 Catálogo de Filmes</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar filme por nome ou gênero..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
          <button className="search-button" aria-label="Buscar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 256 256"
              fill="white"
            >
              <path d="m229.66 218.34l-50.06-50.06a88.21 88.21 0 1 0-11.32 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
