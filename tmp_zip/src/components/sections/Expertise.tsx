import { motion } from 'motion/react';
import { Award, BookOpen, Briefcase } from 'lucide-react';

export default function Expertise() {
  const stats = [
    {
      icon: <Briefcase className="w-8 h-8 text-secondary mb-3" />,
      value: "10년+",
      label: "법률 속기 경력"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-secondary mb-3" />,
      value: "5,000건+",
      label: "누적 처리 건수"
    },
    {
      icon: <Award className="w-8 h-8 text-secondary mb-3" />,
      value: "99.9%",
      label: "고객 만족도"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              검증된 전문성으로<br />
              <span className="text-secondary">완벽한 결과물</span>을 약속합니다.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              박형진 속기사는 다년간의 법률, 의학, 특허 등 전문 분야 속기 경험을 바탕으로,
              단순한 타이핑을 넘어 맥락을 이해하는 고품질의 녹취록을 작성합니다.
              국가공인 한글속기 자격증 보유 및 다수의 대형 로펌 협력 경험이 이를 증명합니다.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://loremflickr.com/800/1000/portrait,professional/all" 
                alt="박형진 속기사 프로필" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">박형진 대표 속기사</h3>
                <p className="text-gray-200">국가공인 한글속기 1급</p>
                <p className="text-gray-200">前 대형 법무법인 전담 속기사</p>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full mix-blend-multiply filter blur-2xl opacity-50 z-[-1]"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full mix-blend-multiply filter blur-2xl opacity-20 z-[-1]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
