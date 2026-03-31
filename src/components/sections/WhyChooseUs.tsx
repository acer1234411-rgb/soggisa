import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "개인 속기사의 1:1 전담 마크",
      description: "접수부터 납품까지 박형진 속기사가 직접 책임지고 진행하여, 일관된 품질과 원활한 소통을 보장합니다."
    },
    {
      title: "24시간 긴급 속기 시스템",
      description: "사건의 시급성을 이해합니다. 요청 시 24시간 이내에 결과물을 받아보실 수 있는 긴급 처리 프로세스를 운영합니다."
    },
    {
      title: "법률/전문 분야 특화 이해도",
      description: "단순한 받아쓰기가 아닙니다. 법률, 의학, 특허 등 전문 용어의 맥락을 정확히 이해하고 기록합니다."
    },
    {
      title: "대면 상담을 통한 신뢰 구축",
      description: "중요한 사건일수록 대면 상담을 선호하시는 고객을 위해, 직접 방문 상담을 진행하여 신뢰를 쌓습니다."
    },
    {
      title: "철저한 기밀 유지 서약",
      description: "모든 의뢰 건에 대해 기밀 유지 서약서를 작성하며, 작업 완료 후 관련 자료는 즉시 영구 폐기합니다."
    }
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              왜 <span className="text-secondary">박형진 속기사</span>를<br />선택해야 할까요?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              대형 업체의 공장형 시스템과는 다릅니다. 오직 당신의 사건에만 집중하는 맞춤형 프리미엄 속기 서비스를 경험해보세요.
            </p>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://loremflickr.com/800/600/business,meeting/all" 
                alt="전문적인 회의 모습" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
