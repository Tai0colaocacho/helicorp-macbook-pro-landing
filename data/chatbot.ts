export const suggestedQuestions = [
  "MacBook Pro phù hợp cho lập trình không?",
  "Sinh viên nên chọn cấu hình nào?",
  "Nên chọn RAM bao nhiêu?",
  "MacBook Pro có phù hợp thiết kế UI/UX không?",
  "Khác gì MacBook Air?",
];

export const chatbotAnswers: Record<string, string> = {
  "MacBook Pro phù hợp cho lập trình không?":
    "Có. MacBook Pro phù hợp cho lập trình web, mobile, backend và các workflow cần chạy nhiều công cụ cùng lúc như VS Code, terminal, browser, Docker hoặc design preview.",

  "Sinh viên nên chọn cấu hình nào?":
    "Nếu bạn là sinh viên IT hoặc thiết kế, cấu hình MacBook Pro M5 với 16GB RAM và 512GB SSD là lựa chọn cân bằng. Nếu làm video, AI hoặc project lớn, nên cân nhắc 24GB RAM hoặc 1TB SSD.",

  "Nên chọn RAM bao nhiêu?":
    "16GB phù hợp cho học tập, lập trình web và multitasking cơ bản. 24GB phù hợp hơn nếu bạn mở nhiều app, chạy Docker, design tool hoặc project lớn. 32GB dành cho workflow nặng như video, 3D hoặc AI local.",

  "MacBook Pro có phù hợp thiết kế UI/UX không?":
    "Có. Màn hình chất lượng cao, hiệu năng ổn định và hệ sinh thái phần mềm như Figma, Adobe, Framer, VS Code giúp MacBook Pro rất phù hợp cho UI/UX designer và frontend developer.",

  "Khác gì MacBook Air?":
    "MacBook Air nhẹ và phù hợp tác vụ phổ thông. MacBook Pro mạnh hơn, màn hình tốt hơn, tản nhiệt ổn định hơn và phù hợp hơn cho lập trình, thiết kế, video editing hoặc workflow chuyên nghiệp.",
};

export const fallbackAnswer =
  "Mình có thể tư vấn về cấu hình, mục đích sử dụng, RAM, storage, pin, màn hình và sự khác biệt giữa MacBook Pro và MacBook Air. Hãy chọn một câu hỏi gợi ý bên dưới.";