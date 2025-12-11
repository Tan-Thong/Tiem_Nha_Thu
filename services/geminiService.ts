import { GoogleGenAI } from "@google/genai";
import { Product } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateSnackRecommendation = async (
  query: string,
  products: Product[],
  history: string[]
): Promise<string> => {
  try {
    const productContext = products
      .map(p => {
        const variantsInfo = p.variants
          .map(v => `[${v.name}: ${v.price.toLocaleString('vi-VN')}đ]`)
          .join(', ');
        return `- ${p.name}: ${p.description} (Các loại: ${variantsInfo})`;
      })
      .join('\n');

    const systemInstruction = `
      Bạn là một chuyên gia tư vấn đồ ăn vặt và đặc sản Đà Lạt cho cửa hàng "Nông Trại Việt".
      Nhiệm vụ của bạn là giúp khách hàng tìm kiếm sản phẩm phù hợp với khẩu vị hoặc nhu cầu (quà tặng, ăn vặt, sức khỏe).
      
      Dưới đây là danh sách sản phẩm hiện có của cửa hàng cùng các loại kích cỡ/khối lượng:
      ${productContext}

      Hãy trả lời ngắn gọn, thân thiện, sử dụng tiếng Việt tự nhiên và có icon vui vẻ.
      Khi tư vấn, hãy nhắc đến các kích cỡ (ví dụ 250g, 500g) để khách hàng dễ chọn.
      Nếu khách hỏi về thứ không có trong danh sách, hãy khéo léo gợi ý sản phẩm tương tự trong danh sách.
      Đừng bịa ra sản phẩm không có.
    `;

    // Construct simple history context
    const conversationHistory = history.map(msg => msg).join('\n');
    const finalPrompt = `${conversationHistory}\nKhách hàng: ${query}\nTư vấn viên:`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: finalPrompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 300,
      }
    });

    return response.text || "Xin lỗi, hiện tại tôi đang bận chút xíu, bạn thử hỏi lại nhé!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ôi, kết nối bị gián đoạn. Bạn vui lòng kiểm tra mạng hoặc thử lại sau nhé!";
  }
};