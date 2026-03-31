import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';
import axios from 'axios';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call using axios
      // In a real app, this would be: await axios.post('/api/contact', formData);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-2xl font-bold text-primary mb-6">견적 및 상담 문의</h2>
      <p className="text-gray-600 mb-8 text-sm">
        아래 양식을 작성해 주시면, 확인 후 신속하게 연락드리겠습니다.
        모든 정보는 철저히 기밀로 유지됩니다.
      </p>

      {isSuccess ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-green-800 mb-2">문의가 성공적으로 접수되었습니다.</h3>
          <p className="text-green-700">빠른 시일 내에 기재해주신 연락처로 답변 드리겠습니다. 감사합니다.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">이름 / 담당자명 *</label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none"
                placeholder="홍길동"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">소속 (법무법인 등)</label>
              <input 
                type="text" 
                id="company" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none"
                placeholder="법무법인 OO"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">연락처 *</label>
              <input 
                type="tel" 
                id="phone" 
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none"
                placeholder="010-0000-0000"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">이메일 *</label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none"
                placeholder="example@domain.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">의뢰 분야 *</label>
            <select 
              id="serviceType" 
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none bg-white"
            >
              <option value="">선택해주세요</option>
              <option value="재판증거">재판 증거 속기</option>
              <option value="상담기록">의뢰인 상담 기록</option>
              <option value="회의록">각종 회의록</option>
              <option value="전문분야">전문 분야 (의학/특허 등)</option>
              <option value="관공서총회">관공서/총회 현장 속기</option>
              <option value="기타">기타</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">긴급도</label>
              <select 
                id="urgency" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none bg-white"
              >
                <option value="일반">일반 (협의 후 결정)</option>
                <option value="긴급">긴급 (24시간 이내)</option>
                <option value="당일">초긴급 (당일 납품)</option>
              </select>
            </div>
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">예상 분량 (음성 길이)</label>
              <input 
                type="text" 
                id="duration" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none"
                placeholder="예: 약 2시간 30분"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">상세 내용 *</label>
            <textarea 
              id="message" 
              rows={5}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none resize-none"
              placeholder="사건의 개요, 특별히 주의해야 할 전문 용어, 파일 형식 등 상세한 내용을 적어주시면 더 정확한 견적이 가능합니다."
            ></textarea>
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input 
                id="privacy" 
                type="checkbox" 
                required
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary"
              />
            </div>
            <label htmlFor="privacy" className="ml-2 text-sm font-medium text-gray-700">
              개인정보 수집 및 이용에 동의합니다. (필수)
            </label>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full flex justify-center items-center gap-2 py-4 px-6 rounded-lg text-white font-bold text-lg transition-all shadow-md ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-opacity-90 hover:shadow-lg transform hover:-translate-y-0.5'}`}
          >
            {isSubmitting ? '전송 중...' : (
              <>
                견적 및 상담 요청하기
                <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
