export interface Variant {
  id: string;
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  price: number; // Base price (usually lowest) for initial display
  category: Category;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  isBestSeller?: boolean;
  variants: Variant[];
}

export type Category = 'doAnVat' | 'banhTrangTron' | 'nuocUong';

export interface CartItem extends Product {
  quantity: number;
  selectedVariant: Variant;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  doAnVat: 'Đồ ăn vặt',
  banhTrangTron: 'Bánh tráng trộn',
  nuocUong: 'Nước uống',
};