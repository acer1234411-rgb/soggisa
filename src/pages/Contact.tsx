import { motion } from 'motion/react';
import ContactForm from '../components/forms/ContactForm';
import { MapPin, Phone, Mail, Clock, AlertCircle } from 'lucide-react';

export default function Contact() {
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
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">견적 및 문의하기</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            신속하고 정확한 상담을 위해 아래 양식을 작성해 주시거나,
            직접 연락해 주시면 친절히 안내해 드리겠습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-primary text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-8 border-b border-white/20 pb-4">상담 안내</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1 text-lg">대표 번호</h4>
                    <p className="text-gray-200 text-xl font-medium">055-326-2035</p>
                    <p className="text-sm text-secondary mt-2 font-bold">긴급 직통: 010-9244-2032</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1 text-lg">이메일</h4>
                    <p className="text-gray-200">stenophj@naver.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1 text-lg">운영 시간</h4>
                    <p className="text-gray-200">평일: 09:00 - 18:00</p>
                    <p className="text-sm text-gray-300 mt-1">주말/공휴일: 사전 예약 시</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1 text-lg">사무소 위치</h4>
                    <p className="text-gray-200 leading-relaxed">
                      경남 김해시 우암로 175(내동),<br />
                      법조타운 1층 102-1호
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-yellow-800 mb-2">기밀 유지 안내</h4>
                <p className="text-sm text-yellow-700 leading-relaxed">
                  보내주시는 모든 문의 내용과 첨부 파일은 철저한 보안 시스템을 통해 관리되며,
                  상담 목적 외에는 절대 사용되지 않습니다.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
