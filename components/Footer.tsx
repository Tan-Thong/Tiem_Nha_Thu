import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-brand-500">Tiệm nhà Thu</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Nguyên liệu an toàn, chuẩn vị nhà làm, đảm bảo vui miệng cả ngày!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-brand-500 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-brand-500 transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-brand-500 transition-colors"><Twitter size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Liên Hệ</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="flex-shrink-0 text-brand-500" size={18} />
                <span>328 Nguyễn Thị Nê, Phú Hiệp, Phú Hòa Đông, TP Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="flex-shrink-0 text-brand-500" size={18} />
                <span>02633 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="flex-shrink-0 text-brand-500" size={18} />
                <span>hello@nongtraiviet.com</span>
              </li>
            </ul>
          </div>

          {/* <div>
            <h4 className="text-lg font-bold mb-6">Hỗ Trợ</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-500 transition-colors">Chính sách đổi trả</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Hướng dẫn mua hàng</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Phí vận chuyển</a></li>
            </ul>
          </div> */}

          {/* <div>
            <h4 className="text-lg font-bold mb-6">Đăng Ký Nhận Tin</h4>
            <p className="text-gray-400 text-sm mb-4">Nhận thông tin khuyến mãi mới nhất từ chúng tôi.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Email của bạn" 
                className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:border-brand-500 text-sm"
              />
              <button className="bg-brand-500 text-white px-4 py-2 rounded font-semibold hover:bg-brand-600 transition-colors text-sm">
                Đăng Ký
              </button>
            </form>
          </div> */}
        </div>

        {/* <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
          <p>© 2024 Nông Trại Việt. Design inspired by Langfarm.</p>
        </div> */}
      </div>
    </footer>
  );
};