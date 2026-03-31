import { motion } from 'motion/react';
import { Clock, ShieldCheck, UserCheck, Zap } from 'lucide-react';

export default function ProblemSolution() {
  const painPoints = [
    {
      icon: <Clock className="w-10 h-10 text-red-500 mb-4" />,
      title: "느린 응대와 피드백",
      description: "대형 서비스의 형식적인 절차로 인해 긴급한 자료 처리가 지연된 경험이 있으신가요?"
    },
    {
      icon: <UserCheck className="w-10 h-10 text-red-500 mb-4" />,
      title: "전문 용어 이해 부족",
      description: "법률, 의학, 특허 등 전문 분야의 용어를 제대로 이해하지 못해 오탈자가 발생한 적이 있나요?"
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-red-500 mb-4" />,
      title: "기밀 유지에 대한 불안",
      description: "민감한 의뢰인 정보와 재판 증거 자료가 유출될까 봐 걱정되시나요?"
    }
  ];

  const solutions = [
    {
      icon: <Zap className="w-12 h-12 text-secondary mb-4" />,
      title: "24시간 이내 빠른 납기",
      description: "사건의 시급성에 맞춘 긴급 속기 시스템으로, 필요한 자료를 가장 빠르게 제공합니다."
    },
    {
      icon: <UserCheck className="w-12 h-12 text-secondary mb-4" />,
      title: "법률/전문 분야 특화",
      description: "다양한 사건 처리 경험을 바탕으로, 전문 용어의 맥락을 정확히 파악하여 기록합니다."
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-secondary mb-4" />,
      title: "철저한 기밀 유지 서약",
      description: "개인 속기사로서 1:1 전담 마크하며, 모든 자료는 철저한 보안 시스템 아래 관리됩니다."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">기존 속기 서비스의 한계, <br className="md:hidden" />박형진 속기사가 해결합니다.</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            형식적인 응대와 느린 피드백으로 인한 답답함, 이제 개인 맞춤형 전문 서비스로 해소하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Pain Points */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-red-500 pb-2 inline-block">당신의 고민</h3>
            {painPoints.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100"
              >
                <div className="flex-shrink-0">{point.icon}</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{point.title}</h4>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-primary border-b-2 border-secondary pb-2 inline-block">박형진 속기사의 솔루션</h3>
            {solutions.map((solution, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-primary/5 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">{solution.icon}</div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">{solution.title}</h4>
                  <p className="text-gray-700">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
