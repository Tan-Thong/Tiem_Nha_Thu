import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Matcha Latte',
    price: 25000,
    category: 'nuocUong',
    description: 'Hồng trứng Đà Lạt được treo gió theo công nghệ Nhật Bản, dẻo thơm, ngọt mật tự nhiên.',
    image: '/Tiem_Nha_Thu/imgs/1.jpg',
    rating: 5,
    reviews: 128,
    isBestSeller: true,
    variants: [
      { id: 'v1-1', name: 'S', price: 25000 },
      { id: 'v1-2', name: 'M', price: 30000 }
    ]
  },
  {
    id: '2',
    name: 'Trà Artichoke Túi Lọc',
    price: 65000,
    category: 'nuocUong',
    description: '100% từ hoa Atiso tươi nguyên chất, giúp thanh nhiệt, giải độc gan hiệu quả.',
    image: '/Tiem_Nha_Thu/imgs/2.jpg',
    rating: 4.5,
    reviews: 85,
    variants: [
      { id: 'v2-1', name: 'Hộp 50 túi', price: 65000 },
      { id: 'v2-2', name: 'Hộp 100 túi', price: 120000 }
    ]
  },
  {
    id: '3',
    name: 'Hạt Macca Sấy Nứt Vỏ',
    price: 80000,
    category: 'nuocUong',
    description: 'Hạt Macca Lâm Đồng loại 1, sấy nứt vỏ tự nhiên, béo ngậy giàu dinh dưỡng.',
    image: '/Tiem_Nha_Thu/imgs/3.jpg',
    rating: 4.8,
    reviews: 210,
    isBestSeller: true,
    variants: [
      { id: 'v3-1', name: '250g', price: 80000 },
      { id: 'v3-2', name: '500g', price: 150000 }
    ]
  },
  {
    id: '4',
    name: 'Mứt Dâu Tây Đà Lạt',
    price: 45000,
    category: 'nuocUong',
    description: 'Làm từ dâu tây tươi, ít đường, giữ trọn hương vị chua ngọt tự nhiên.',
    image: '/Tiem_Nha_Thu/imgs/4.jpg',
    rating: 4.7,
    reviews: 94,
    variants: [
      { id: 'v4-1', name: '250g', price: 45000 },
      { id: 'v4-2', name: '500g', price: 85000 }
    ]
  }
];