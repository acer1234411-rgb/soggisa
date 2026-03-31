import { motion } from 'motion/react';
import { Scale, Users, FileText, Stethoscope, Building2 } from 'lucide-react';

export default function ServiceOfferings() {
  const services = [
    {
      icon: <Scale className="w-8 h-8 text-primary" />,
      title: "재판 증거 속기",
      description: "법정 제출용 녹취록 작성. 음성 파일의 미세한 떨림과 뉘앙스까지 정확하게 포착하여 법적 증거로서의 가치를 높입니다.",
      features: ["법원 제출 양식 준수", "음질 개선 및 분석", "교차 검수 시스템"]
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "의뢰인 상담 기록",
      description: "변호사와 의뢰인 간의 상담 내용을 빠짐없이 기록하여, 사건의 핵심을 파악하고 전략을 수립하는 데 도움을 줍니다.",
      features: ["철저한 기밀 유지", "핵심 요약본 제공", "빠른 초안 전달"]
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "각종 회의록",
      description: "이사회, 주주총회, 사내 중요 회의 등 다화자 음성을 명확하게 구분하여 공식적인 기록물로 완성합니다.",
      features: ["다화자 음성 분리", "회의 안건별 정리", "표준어 및 맞춤법 교정"]
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-primary" />,
      title: "전문 분야 (의학/특허)",
      description: "고도의 전문 지식이 요구되는 의료 분쟁, 특허 소송 관련 음성 자료를 해당 분야의 전문 용어 사전과 함께 정확히 번역하듯 기록합니다.",
      features: ["전문 용어 교차 검증", "관련 분야 지식 보유", "정확도 99% 지향"]
    },
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: "관공서/총회 속기",
      description: "재개발, 재건축 총회 및 관공서 공식 행사의 현장 속기 및 녹음 기록. 대규모 인원이 참석하는 환경에서도 정확한 기록을 보장합니다.",
      features: ["현장 출장 지원", "대규모 행사 경험", "공식 기록물 양식"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">전문 속기 서비스</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            다양한 법률 업무 환경에 최적화된 맞춤형 속기 서비스를 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <div className="group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
