import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ height: '90dvh', minHeight: '500px' }}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://loremflickr.com/1920/1080/law,office/all" 
          alt="법률 사무소 배경" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            당신의 법률 업무,<br />
            <span className="text-secondary">박형진 속기사</span>가 신속하고 정확하게 지원합니다.
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light">
            재판 증거, 의뢰인 상담 기록, 각종 회의록 등 방대한 양의 음성 자료를 
            철저한 기밀 유지 하에 텍스트로 전환해 드립니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-secondary text-white px-8 py-4 rounded-md text-lg font-bold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              빠른 상담 문의
            </Link>
            <Link 
              to="/contact?type=urgent" 
              className="bg-white text-primary px-8 py-4 rounded-md text-lg font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              긴급 속기 요청 (24h)
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
