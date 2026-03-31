import { motion } from 'motion/react';
import { MessageSquare, FileSearch, PenTool, CheckSquare } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: <MessageSquare className="w-10 h-10 text-primary" />,
      title: "1. 문의 및 상담",
      description: "전화, 이메일 또는 온라인 폼을 통해 의뢰 내용을 접수합니다. 대면 상담도 가능합니다.",
      time: "즉시 ~ 1시간 이내"
    },
    {
      icon: <FileSearch className="w-10 h-10 text-primary" />,
      title: "2. 견적 및 의뢰",
      description: "음성 파일의 분량과 난이도, 긴급성을 파악하여 정확한 견적과 예상 소요 시간을 안내해 드립니다.",
      time: "파일 확인 후 2시간 이내"
    },
    {
      icon: <PenTool className="w-10 h-10 text-primary" />,
      title: "3. 속기 진행",
      description: "박형진 속기사가 직접 초안을 작성하며, 전문 용어 검수 및 교차 확인을 통해 정확도를 높입니다.",
      time: "협의된 기한 내 (긴급 24h)"
    },
    {
      icon: <CheckSquare className="w-10 h-10 text-primary" />,
      title: "4. 납품 및 피드백",
      description: "완성된 녹취록을 암호화하여 전달합니다. 수정 요청 시 신속하게 반영하여 최종본을 확정합니다.",
      time: "초안 전달 후 즉각 반영"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">간편하고 확실한 의뢰 절차</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            복잡한 과정 없이, 빠르고 정확하게 결과물을 받아보실 수 있습니다.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 w-full h-0.5 bg-gray-200 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-20 h-20 mx-auto bg-background rounded-full flex items-center justify-center mb-6 shadow-inner">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{step.description}</p>
                <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
                  {step.time}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
