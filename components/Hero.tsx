import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-brand-50 overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10 space-y-6">
            {/* <div className="inline-block bg-white text-brand-600 px-4 py-1 rounded-full text-sm font-semibold shadow-sm mb-2">
              🌿 Tinh hoa từ đất mẹ Đà Lạt
            </div> */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Hương Vị Tự Nhiên <br />
              <span className="text-brand-500">Ăn Là Ghiền</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
                Thiên đường ăn vặt nhà Thu với tuyển chọn những món "lai rai" cực cuốn. Từ đặc sản sấy giòn tan, bánh tráng đậm đà đến trà sữa thơm béo. Nguyên liệu an toàn, chuẩn vị nhà làm, đảm bảo vui miệng cả ngày!
            </p>
            {/* <div className="flex space-x-4">
              <button className="bg-brand-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-brand-600 transition-transform transform hover:scale-105">
                Mua Ngay
              </button>
              <button className="bg-white text-brand-600 border-2 border-brand-200 px-8 py-3 rounded-full font-semibold hover:border-brand-500 hover:bg-brand-50 transition-colors">
                Xem Khuyến Mãi
              </button>
            </div> */}
            <div className="flex items-center space-x-6 text-sm text-gray-500 pt-4">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                100% Tự nhiên
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Giao hàng khu vực Củ Chi
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                src="/Tiem_Nha_Thu/imgs/Background.png" 
                alt="Đặc sản Đà Lạt" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute top-4 -right-4 w-full h-full bg-brand-200 rounded-2xl -z-10 transform rotate-6 opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-orange-100 rounded-2xl -z-10 transform -rotate-3 opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};