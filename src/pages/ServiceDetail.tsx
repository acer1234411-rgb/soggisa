import { motion } from 'motion/react';
import { Scale, Users, FileText, Stethoscope, Building2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceDetail() {
  const services = [
    {
      id: "court",
      icon: <Scale className="w-12 h-12 text-primary" />,
      title: "재판 증거 속기",
      subtitle: "법정 제출용 녹취록 작성",
      description: "통화 녹음, 현장 대화 녹음 등 재판의 증거로 제출될 음성 자료를 법원 양식에 맞추어 정확하게 텍스트로 변환합니다. 음질이 좋지 않은 파일의 경우, 전문 오디오 분석 툴을 활용하여 최대한 원음을 복원하고 뉘앙스까지 기록하여 증거 능력을 극대화합니다.",
      features: [
        "법원, 검찰, 경찰 등 수사기관 제출용 표준 양식 완벽 준수",
        "다화자 대화 시 화자 명확한 구분 및 타임코드 삽입",
        "감정 상태, 주변 소음 등 상황 묘사를 통한 현장감 전달",
        "녹취록 원본 대조필 및 속기사 직인 날인 제공"
      ],
      image: "https://loremflickr.com/800/600/law,gavel/all"
    },
    {
      id: "consulting",
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "의뢰인 상담 기록",
      subtitle: "법률 상담 내용 전문 기록",
      description: "변호사와 의뢰인 간의 대면/비대면 상담 내용을 빠짐없이 기록합니다. 방대한 상담 내용 중 법적으로 유의미한 핵심 쟁점을 빠르게 파악할 수 있도록 요약본을 함께 제공하여, 변호사님의 업무 효율성을 크게 향상시킵니다.",
      features: [
        "상담 직후 빠른 초안 제공으로 신속한 사건 파악 지원",
        "법률 용어 및 사건 관련 고유 명사 사전 숙지 후 작업",
        "핵심 쟁점 및 타임라인 요약 서비스 (옵션)",
        "철저한 보안 서약 하에 안전한 파일 송수신"
      ],
      image: "https://loremflickr.com/800/600/meeting,office/all"
    },
    {
      id: "meeting",
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: "각종 회의록",
      subtitle: "기업 이사회, 주주총회 등 공식 기록",
      description: "기업의 이사회, 주주총회, 노사협의회 등 중요한 의사결정이 이루어지는 회의의 내용을 공식적인 기록물로 남깁니다. 다수의 참석자가 발언하는 복잡한 상황에서도 화자를 정확히 분리하고, 안건별로 일목요연하게 정리합니다.",
      features: [
        "회의 안건 및 식순에 따른 체계적인 문서 구조화",
        "발언의 요지 훼손 없이 표준어 및 맞춤법 교정 진행",
        "현장 출장 속기 및 녹음 장비 지원 가능 (사전 협의)",
        "기업 보안 규정에 맞춘 철저한 문서 관리"
      ],
      image: "https://loremflickr.com/800/600/boardroom,meeting/all"
    },
    {
      id: "specialized",
      icon: <Stethoscope className="w-12 h-12 text-primary" />,
      title: "전문 분야 (의학/특허)",
      subtitle: "고난도 전문 용어 특화 속기",
      description: "의료 과실 소송, 특허 침해 분쟁 등 고도의 전문 지식이 요구되는 사건의 음성 자료를 다룹니다. 일반 속기사가 처리하기 힘든 전문 용어와 외국어가 혼재된 내용을 관련 분야 사전 및 논문 교차 검증을 통해 완벽하게 번역하듯 기록합니다.",
      features: [
        "의학, 약학, 공학, 특허 등 각 분야별 전문 용어 DB 활용",
        "필요 시 해당 분야 전문가 자문 및 감수 진행",
        "외국어 발음의 정확한 한글 표기 및 원어 병기",
        "복잡한 기술 설명이나 수술 과정 등의 정확한 묘사"
      ],
      image: "https://loremflickr.com/800/600/medical,science/all"
    },
    {
      id: "public",
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: "관공서/총회 속기",
      subtitle: "대규모 행사 및 공공기관 공식 기록",
      description: "재개발/재건축 조합 총회, 공청회, 관공서 위원회 등 대규모 인원이 참석하고 법적 효력이 중요한 행사의 현장 속기 및 녹취록을 작성합니다. 돌발 상황이나 소란 속에서도 발언의 핵심을 놓치지 않고 기록합니다.",
      features: [
        "수백 명 규모의 총회 현장 출장 및 실시간 속기 지원",
        "총회 진행 식순 및 법적 요건에 맞춘 회의록 작성",
        "속기사 2인 1조 투입 등 대규모 행사 맞춤형 인력 구성",
        "행사 종료 후 최단 시간 내 결과물 납품"
      ],
      image: "https://loremflickr.com/800/600/conference,crowd/all"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-12 pb-24 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">서비스 상세</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            박형진 속기사 사무소는 법률 실무의 다양한 환경에 최적화된 
            전문적이고 심층적인 속기 서비스를 제공합니다.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              {/* Image */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative group">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full lg:w-1/2 space-y-6"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-gray-100">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                    <p className="text-secondary font-medium text-lg">{service.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed pb-6 border-b border-gray-200">
                  {service.description}
                </p>

                <div className="pt-2">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">주요 특징 및 제공 내역</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <Link 
                    to={`/contact?service=${service.id}`}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-opacity-90 transition-colors shadow-sm"
                  >
                    해당 서비스 견적 문의하기
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
