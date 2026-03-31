import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://loremflickr.com/1920/1080/abstract,pattern/all')] bg-cover bg-center mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            당신의 중요한 사건,<br />
            더 이상 지체하지 마세요.
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            지금 바로 박형진 속기사에게 연락하여 빠르고 정확한 견적을 받아보세요.
            24시간 이내 납품 가능한 긴급 속기 서비스도 준비되어 있습니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/contact" 
              className="group bg-secondary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 transform hover:-translate-y-1"
            >
              지금 바로 전문 속기 상담 신청하기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a 
              href="tel:02-123-4567" 
              className="flex items-center gap-3 text-white hover:text-secondary transition-colors text-lg font-medium"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <PhoneCall className="w-5 h-5" />
              </div>
              <span>02-123-4567</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
