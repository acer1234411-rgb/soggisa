import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary tracking-tight">
              박형진 <span className="text-secondary">속기사 사무소</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/about" className="text-text hover:text-primary font-medium transition-colors">사무소 소개</Link>
            <Link to="/services" className="text-text hover:text-primary font-medium transition-colors">서비스 상세</Link>
            <Link to="/contact" className="text-text hover:text-primary font-medium transition-colors">견적/문의하기</Link>
          </nav>

          <div className="hidden md:flex items-center">
            <Link to="/contact" className="bg-primary text-white px-6 py-2.5 rounded-md font-medium hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg">
              빠른 상담 문의
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-text hover:text-primary hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>사무소 소개</Link>
            <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium text-text hover:text-primary hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>서비스 상세</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-text hover:text-primary hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>견적/문의하기</Link>
            <Link to="/contact" className="block px-3 py-2 mt-4 text-center rounded-md text-base font-medium bg-primary text-white hover:bg-opacity-90" onClick={() => setIsMenuOpen(false)}>빠른 상담 문의</Link>
          </div>
        </div>
      )}
    </header>
  );
}
