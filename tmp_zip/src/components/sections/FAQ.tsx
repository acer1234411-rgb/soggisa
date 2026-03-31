import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "비용은 어떻게 산정되나요?",
      answer: "음성 파일의 분량(시간), 난이도(다화자, 전문 용어 포함 여부), 그리고 납기일(긴급 여부)에 따라 맞춤 견적을 제공합니다. 정확한 비용은 파일을 확인한 후 안내해 드립니다."
    },
    {
      question: "긴급 속기 요청 시 언제까지 받을 수 있나요?",
      answer: "사전 협의 시 24시간 이내 납품이 가능합니다. 단, 파일의 분량과 난이도에 따라 변동될 수 있으니 빠른 상담 문의를 통해 확인해 주시기 바랍니다."
    },
    {
      question: "기밀 유지는 어떻게 보장되나요?",
      answer: "모든 의뢰 건에 대해 기밀 유지 서약서를 작성하며, 작업 완료 후 7일 이내에 관련 음성 파일 및 문서 자료는 영구 폐기합니다. 또한, 암호화된 파일 전송 시스템을 사용합니다."
    },
    {
      question: "대면 상담이 가능한가요?",
      answer: "네, 가능합니다. 중요한 사건이거나 대량 의뢰의 경우, 서울 및 수도권 지역 내에서 직접 방문하여 대면 상담을 진행해 드립니다. 사전 예약을 부탁드립니다."
    },
    {
      question: "어떤 파일 형식으로 전달해야 하나요?",
      answer: "MP3, WAV, M4A 등 대부분의 음성 및 영상 파일 형식을 지원합니다. 카카오톡, 이메일, 클라우드 링크 등 편하신 방법으로 전달해 주시면 됩니다."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">자주 묻는 질문</h2>
          <p className="text-lg text-gray-600">
            속기 의뢰 전 궁금하신 점을 확인해 보세요.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-800 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
