import React from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, variantId: string, delta: number) => void;
  onRemoveItem: (id: string, variantId: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity,
  onRemoveItem
}) => {
  // Calculate total using selectedVariant price
  const total = items.reduce((sum, item) => sum + item.selectedVariant.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-white">
          <h2 className="text-xl font-bold text-gray-900 flex items-center">
            <ShoppingBag className="mr-2 text-brand-500" />
            Giỏ Hàng <span className="ml-2 text-sm font-normal text-gray-500">({items.length} món)</span>
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                <ShoppingBag size={40} className="text-gray-400" />
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900">Giỏ hàng trống</p>
                <p className="text-sm text-gray-500 mt-1">Hãy chọn vài món ngon nhé!</p>
              </div>
              <button 
                onClick={onClose}
                className="mt-4 text-brand-600 font-medium hover:text-brand-700 hover:underline"
              >
                Tiếp tục mua sắm
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.selectedVariant.id}`} className="flex gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-20 h-20 object-cover rounded-lg bg-gray-200"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 line-clamp-1">{item.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2 py-0.5 rounded border border-brand-100">
                        {item.selectedVariant.name}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{item.selectedVariant.price.toLocaleString('vi-VN')}₫</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center space-x-3 bg-gray-100 rounded-lg p-1">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.selectedVariant.id, -1)}
                        className="p-1 hover:bg-white rounded shadow-sm transition-all disabled:opacity-50"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button 
                         onClick={() => onUpdateQuantity(item.id, item.selectedVariant.id, 1)}
                         className="p-1 hover:bg-white rounded shadow-sm transition-all"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button 
                      onClick={() => onRemoveItem(item.id, item.selectedVariant.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-5 border-t border-gray-100 bg-gray-50">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Tạm tính</span>
                <span>{total.toLocaleString('vi-VN')}₫</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Phí vận chuyển</span>
                <span className="text-green-600 font-medium">Miễn phí</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t border-gray-200">
                <span>Tổng cộng</span>
                <span className="text-brand-600">{total.toLocaleString('vi-VN')}₫</span>
              </div>
            </div>
            <button className="w-full bg-brand-500 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-brand-600 active:scale-95 transition-all">
              Thanh Toán Ngay
            </button>
          </div>
        )}
      </div>
    </>
  );
};