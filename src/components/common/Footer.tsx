import { Link } from 'react-router-dom';
import { Building2, FileText, MessageSquare, ShieldCheck, Scale, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white p-1 rounded-lg shadow-inner">
                <img src="https://i.imgur.com/DVL5Vh6.png" alt="박형진 속기·녹취 사무소 로고" className="h-8 w-auto" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">박형진 <span className="text-secondary">속기·녹취 사무소</span></h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              신속, 정확, 기밀유지를 최우선으로 하는 법률 전문 속기 서비스.
              당신의 중요한 순간을 완벽한 기록으로 남겨드립니다.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">바로가기</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="flex items-center gap-2 text-gray-300 hover:text-secondary transition-colors group">
                  <Building2 size={16} className="text-white/20 group-hover:text-secondary transition-colors" />
                  사무소 소개
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center gap-2 text-gray-300 hover:text-secondary transition-colors group">
                  <FileText size={16} className="text-white/20 group-hover:text-secondary transition-colors" />
                  서비스 상세
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-2 text-gray-300 hover:text-secondary transition-colors group">
                  <MessageSquare size={16} className="text-white/20 group-hover:text-secondary transition-colors" />
                  견적/문의하기
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">법적 고지</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="flex items-center gap-2 text-gray-300 hover:text-secondary transition-colors group">
                  <ShieldCheck size={16} className="text-white/20 group-hover:text-secondary transition-colors" />
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link to="/terms" className="flex items-center gap-2 text-gray-300 hover:text-secondary transition-colors group">
                  <Scale size={16} className="text-white/20 group-hover:text-secondary transition-colors" />
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <p>상호명: 박형진 속기·녹취 사무소 | 대표: 박형진 | 사업자등록번호: 123-45-67890</p>
            <p>주소: 경남 김해시 우암로 175(내동) 법조타운 1층 102-1호</p>
            <p>전화: 055-326-2035 팩스: 055-326-2036 | 이메일: stenophj@naver.com</p>
          </div>
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} 박형진 속기·녹취 사무소. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

