import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Search, Leaf } from 'lucide-react';
import { CATEGORY_LABELS } from '../types';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  currentCategory: string | null;
  onSelectCategory: (cat: string | null) => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart, currentCategory, onSelectCategory }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-brand-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => onSelectCategory(null)}
        >
          <div className="bg-brand-500 p-2 rounded-lg text-white">
            {/* <Leaf size={24} /> */}
            <img src="/Tiem_Nha_Thu/imgs/Logo_Tiem_Nha_Thu.png" alt="" srcset="" style={{ height: '40px' }}/>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-brand-900 tracking-tight leading-none">Tiệm nhà Thu</span>
            <span className="text-xs text-brand-600 font-medium tracking-wide">Thế giới ăn vặt</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => onSelectCategory(null)}
            className={`text-sm font-medium transition-colors ${!currentCategory ? 'text-brand-600 font-bold' : 'text-gray-600 hover:text-brand-500'}`}
          >
            Trang Chủ
          </button>
          {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
            <button
              key={key}
              onClick={() => onSelectCategory(key)}
              className={`text-sm font-medium transition-colors ${currentCategory === key ? 'text-brand-600 font-bold' : 'text-gray-600 hover:text-brand-500'}`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-500 hover:text-brand-500 transition-colors">
            <Search size={20} />
          </button>
          
          <button 
            onClick={onOpenCart}
            className="relative p-2 text-brand-600 bg-brand-50 hover:bg-brand-100 rounded-full transition-colors"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold flex items-center justify-center rounded-full border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>

          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-20 shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            <button 
              onClick={() => { onSelectCategory(null); setIsMobileMenuOpen(false); }}
              className="text-left font-medium text-gray-700 p-2 hover:bg-brand-50 rounded"
            >
              Trang Chủ
            </button>
            {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
              <button
                key={key}
                onClick={() => { onSelectCategory(key); setIsMobileMenuOpen(false); }}
                className="text-left font-medium text-gray-700 p-2 hover:bg-brand-50 rounded"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};