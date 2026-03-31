import { motion } from 'motion/react';
import { Award, BookOpen, ShieldCheck, Target } from 'lucide-react';

export default function About() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">사무소 소개</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            "단순한 기록을 넘어, 진실을 밝히는 가장 확실한 증거를 만듭니다."
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://loremflickr.com/800/1000/portrait,professional/all" 
                alt="박형진 대표 속기사" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden md:block">
              <div className="text-4xl font-bold text-secondary mb-1">10년+</div>
              <div className="text-gray-600 font-medium">법률 특화 전문 속기</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">대표 속기사 <span className="text-primary">박형진</span></h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                안녕하십니까, 박형진 개인 속기사 사무소 대표 박형진입니다.
              </p>
              <p>
                지난 10여 년간 대형 법무법인과 수많은 변호사님들의 파트너로서, 
                민사, 형사, 가사, 기업 자문 등 다양한 법률 분쟁의 최전선에서 
                음성 자료를 텍스트화하는 작업을 수행해 왔습니다.
              </p>
              <p>
                법률 속기는 단순한 타이핑이 아닙니다. 
                재판의 승패를 가를 수 있는 결정적 증거가 되기도 하며, 
                복잡한 사건의 맥락을 파악하는 핵심 자료가 되기도 합니다. 
                그렇기에 고도의 집중력과 법률 용어에 대한 깊은 이해, 
                그리고 무엇보다 '정확성'이 요구됩니다.
              </p>
              <p>
                저희 사무소는 대형 업체의 공장식 작업 방식을 지양합니다. 
                제가 직접 모든 의뢰 건을 1:1로 전담하여, 
                의뢰인의 상황과 사건의 특수성을 완벽히 이해한 맞춤형 결과물을 제공합니다.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
                <Award className="w-8 h-8 text-secondary flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">국가공인 자격</h4>
                  <p className="text-sm text-gray-600 mt-1">한글속기 1급 취득</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-secondary flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">전문 교육 수료</h4>
                  <p className="text-sm text-gray-600 mt-1">법률/의학 전문 속기 과정</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Philosophy */}
        <div className="bg-primary text-white rounded-3xl p-12 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center">운영 철학 및 비전</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-4">정확성 (Accuracy)</h3>
                <p className="text-gray-300 leading-relaxed">
                  단어 하나, 조사 하나의 차이가 법적 해석을 바꿀 수 있음을 알기에, 
                  99.9%의 정확도를 목표로 다중 교차 검수를 진행합니다.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-4">기밀유지 (Confidentiality)</h3>
                <p className="text-gray-300 leading-relaxed">
                  의뢰인의 정보 보호를 최우선 가치로 삼습니다. 
                  엄격한 보안 시스템과 서약을 통해 어떤 정보도 외부로 유출되지 않습니다.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-4">맞춤형 (Customized)</h3>
                <p className="text-gray-300 leading-relaxed">
                  사건의 성격, 긴급도, 요구되는 양식 등 
                  의뢰인의 개별적인 니즈에 완벽하게 부합하는 1:1 맞춤 서비스를 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
