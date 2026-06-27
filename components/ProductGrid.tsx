/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import ProductCard from './ProductCard';
import { Search, X } from 'lucide-react';

const categories = ['All', 'Olive oil', 'Table olives', 'Dried figs', 'Local products', 'Agricultural services'];

interface ProductGridProps {
  onProductClick: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onProductClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }
    if (searchQuery.trim() !== '') {
      const normalizedQuery = searchQuery.toLowerCase().trim();
      result = result.filter(p => 
        p.name.toLowerCase().includes(normalizedQuery) ||
        p.description.toLowerCase().includes(normalizedQuery) ||
        (p.longDescription && p.longDescription.toLowerCase().includes(normalizedQuery)) ||
        p.features.some(f => f.toLowerCase().includes(normalizedQuery))
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <section id="products" className="py-32 px-6 md:px-12 bg-[#F5F2EB]">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-24 space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif text-[#2C2A26]">The Collection</h2>
          
          {/* Minimal Filter */}
          <div className="flex flex-wrap justify-center gap-8 pt-4 border-t border-[#D6D1C7]/50 w-full max-w-2xl">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm uppercase tracking-widest pb-1 border-b transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'border-[#2C2A26] text-[#2C2A26]' 
                    : 'border-transparent text-[#A8A29E] hover:text-[#2C2A26]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Elegant Search Input */}
          <div className="relative w-full max-w-md mx-auto mt-8">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-[#A8A29E]">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un produit ou un service..."
              className="w-full bg-[#EBE7DE]/50 border border-[#D6D1C7] focus:border-[#2C2A26] focus:bg-[#EBE7DE]/80 rounded-full py-3.5 pl-11 pr-11 text-sm text-[#2C2A26] placeholder-[#A8A29E] outline-none transition-all duration-300 shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#A8A29E] hover:text-[#2C2A26] transition-colors"
                aria-label="Effacer la recherche"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Large Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} onClick={onProductClick} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 px-6 max-w-md mx-auto">
            <Search className="w-12 h-12 text-[#A8A29E]/50 mx-auto mb-6" />
            <h3 className="text-xl font-serif text-[#2C2A26] mb-2">Aucun résultat trouvé</h3>
            <p className="text-sm text-[#5D5A53] mb-8 font-light">
              Nous n'avons trouvé aucun produit ou service correspondant à "{searchQuery}" dans la catégorie {activeCategory === 'All' ? 'générale' : `"${activeCategory}"`}.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="px-6 py-2.5 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-xs font-semibold hover:bg-[#433E38] transition-colors rounded-full"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
