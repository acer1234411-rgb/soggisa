import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactLocation() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">오시는 길 및 연락처</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            서울 및 수도권 지역 대면 상담 환영합니다. 언제든 편하게 연락 주세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-background p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-4">사무소 정보</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">주소</h4>
                    <p className="text-gray-600">서울특별시 서초구 서초대로 123, 법조빌딩 4층</p>
                    <p className="text-sm text-gray-500 mt-1">교대역 1번 출구 도보 5분 거리</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">전화번호</h4>
                    <p className="text-gray-600">02-123-4567</p>
                    <p className="text-sm text-gray-500 mt-1">긴급 속기 문의: 010-1234-5678 (24시간)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">이메일</h4>
                    <p className="text-gray-600">contact@parksteno.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">영업시간</h4>
                    <p className="text-gray-600">평일: 09:00 - 18:00</p>
                    <p className="text-sm text-gray-500 mt-1">주말 및 공휴일: 사전 예약 시 상담 가능</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full min-h-[400px] bg-gray-200 rounded-2xl overflow-hidden relative shadow-md border border-gray-100"
          >
            {/* Replace with actual Google Maps iframe or similar */}
            <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-500">
              <MapPin className="w-16 h-16 mb-4 text-gray-400" />
              <p className="font-medium text-lg">지도 영역 (Google Maps API 연동 필요)</p>
              <p className="text-sm mt-2">서울특별시 서초구 서초대로 123</p>
            </div>
            <img 
              src="https://loremflickr.com/800/600/map,city/all" 
              alt="지도 배경" 
              className="w-full h-full object-cover opacity-30 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
