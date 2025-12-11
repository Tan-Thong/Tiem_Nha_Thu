import React, { useState } from 'react';
import { Plus, Star } from 'lucide-react';
import { Product, Variant } from '../types';

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product, variant: Variant) => void;
  title?: string;
}

const ProductCard: React.FC<{ product: Product; onAddToCart: (p: Product, v: Variant) => void }> = ({ product, onAddToCart }) => {
  const [selectedVariant, setSelectedVariant] = useState<Variant>(product.variants[0]);

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden h-full">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.isBestSeller && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            Bán chạy
          </span>
        )}
        <button 
          onClick={() => onAddToCart(product, selectedVariant)}
          className="absolute bottom-3 right-3 bg-white text-brand-600 p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-500 hover:text-white z-10"
          title="Thêm vào giỏ"
        >
          <Plus size={20} strokeWidth={3} />
        </button>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center space-x-1 mb-2">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-gray-500">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>
        
        <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-brand-600 transition-colors line-clamp-1">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Variant Selector */}
        <div className="mt-auto mb-4">
          <div className="flex flex-wrap gap-2">
            {product.variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                className={`text-xs font-medium px-2 py-1 rounded border transition-colors ${
                  selectedVariant.id === variant.id
                    ? 'bg-brand-500 text-white border-brand-500'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-brand-500 hover:text-brand-500'
                }`}
              >
                {variant.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-brand-600">
              {selectedVariant.price.toLocaleString('vi-VN')}₫
            </span>
          </div>
          <span className="text-xs text-gray-400 font-medium bg-gray-100 px-2 py-1 rounded">
            {product.category.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
};

export const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart, title }) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {title && (
          <div className="mb-8 flex items-end justify-between">
             <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
             <div className="h-1 flex-1 bg-gray-100 ml-6 relative top-[-6px] rounded-full hidden sm:block"></div>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};