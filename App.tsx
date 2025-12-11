import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductList } from './components/ProductList';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { GeminiChat } from './components/GeminiChat';
import { PRODUCTS } from './constants';
import { Product, CartItem, CATEGORY_LABELS, Variant } from './types';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Filter products based on selected category
  const displayProducts = selectedCategory 
    ? PRODUCTS.filter(p => p.category === selectedCategory)
    : PRODUCTS;

  // Cart actions with variants
  const addToCart = (product: Product, variant: Variant) => {
    setCartItems(prev => {
      // Find item with same product ID AND same variant ID
      const existing = prev.find(item => item.id === product.id && item.selectedVariant.id === variant.id);
      
      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.selectedVariant.id === variant.id)
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, selectedVariant: variant }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: string, variantId: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === productId && item.selectedVariant.id === variantId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const removeItem = (productId: string, variantId: string) => {
    setCartItems(prev => prev.filter(item => !(item.id === productId && item.selectedVariant.id === variantId)));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      <Header 
        cartCount={cartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
        currentCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      <main className="flex-grow">
        {!selectedCategory && <Hero />}
        
        <ProductList 
          products={displayProducts} 
          onAddToCart={addToCart}
          title={selectedCategory ? CATEGORY_LABELS[selectedCategory as keyof typeof CATEGORY_LABELS] : "Sản Phẩm Nổi Bật"}
        />
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />

      <GeminiChat products={PRODUCTS} />
    </div>
  );
}

export default App;