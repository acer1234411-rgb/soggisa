import { Link } from 'react-router-dom';
import { Menu, X, Info, FileText, MessageSquare, Phone } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: '사무소 소개', path: '/about', icon: Info },
    { title: '서비스 상세', path: '/services', icon: FileText },
    { title: '견적/문의하기', path: '/contact', icon: MessageSquare },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 text-2xl font-bold text-primary tracking-tight">
              <img src="/logo.png" alt="박형진 속기·녹취 사무소 로고" className="h-10 w-auto" />
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-2 leading-tight">
                <span>박형진</span> 
                <span className="text-secondary text-lg md:text-2xl font-bold">속기·녹취 사무소</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-text hover:text-primary font-medium transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link to="/contact" className="bg-primary text-white px-6 py-2.5 rounded-md font-medium hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg">
              빠른 상담 문의
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center pr-1">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text hover:text-primary focus:outline-none p-2 -mr-2 transition-colors relative z-50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden glass border-t border-gray-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl text-base font-medium text-text hover:text-primary hover:bg-primary/5 transition-all group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon size={20} className="text-primary/40 group-hover:text-primary transition-colors" />
                  {item.title}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-100 mt-2">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-base font-bold bg-primary text-white hover:bg-opacity-90 shadow-md transform active:scale-[0.98] transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone size={18} />
                  빠른 상담 문의
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

