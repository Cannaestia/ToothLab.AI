import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/tiger_small.png" alt="ToothLab.Ai" className="h-9 w-9 hover:scale-110 transition-transform duration-200" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#FF3D57] via-[#0073EA] to-[#00CA72] bg-clip-text text-transparent">ToothLab.Ai</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <Link to="/pricing" className="px-4 py-2 text-gray-700 hover:text-[#0073EA] transition-colors duration-200 font-medium text-sm rounded-lg hover:bg-gray-50">
              Pricing
            </Link>
            <Link to="/blog" className="px-4 py-2 text-gray-700 hover:text-[#00CA72] transition-colors duration-200 font-medium text-sm rounded-lg hover:bg-gray-50">
              Blog
            </Link>
            {isHome ? (
              <a href="#faq" className="px-4 py-2 text-gray-700 hover:text-[#00CA72] transition-colors duration-200 font-medium text-sm rounded-lg hover:bg-gray-50">
                FAQ
              </a>
            ) : (
              <Link to="/#faq" className="px-4 py-2 text-gray-700 hover:text-[#00CA72] transition-colors duration-200 font-medium text-sm rounded-lg hover:bg-gray-50">
                FAQ
              </Link>
            )}
            <Link to="/about" className="px-4 py-2 text-gray-700 hover:text-[#FDAB3D] transition-colors duration-200 font-medium text-sm rounded-lg hover:bg-gray-50">
              About
            </Link>
            <Link
              to="/get-started"
              className="ml-4 px-6 py-2.5 bg-[#FF3D57] text-white rounded-full hover:bg-[#FF2D47] transition-all duration-200 font-semibold text-sm shadow-md hover:shadow-lg hover:scale-105"
            >
              Get free access
            </Link>
          </div>

          <button
            className="md:hidden text-gray-600 hover:text-[#FF3D57] transition-colors duration-200 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-4 space-y-2">
          <Link
            to="/pricing"
            className="block text-gray-700 hover:text-[#0073EA] hover:bg-gray-50 py-2.5 px-4 rounded-lg transition-all duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            to="/blog"
            className="block text-gray-700 hover:text-[#00CA72] hover:bg-gray-50 py-2.5 px-4 rounded-lg transition-all duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
          {isHome ? (
            <a
              href="#faq"
              className="block text-gray-700 hover:text-[#00CA72] hover:bg-gray-50 py-2.5 px-4 rounded-lg transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
          ) : (
            <Link
              to="/#faq"
              className="block text-gray-700 hover:text-[#00CA72] hover:bg-gray-50 py-2.5 px-4 rounded-lg transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
          )}
          <Link
            to="/about"
            className="block text-gray-700 hover:text-[#FDAB3D] hover:bg-gray-50 py-2.5 px-4 rounded-lg transition-all duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/get-started"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-6 py-3 bg-[#FF3D57] text-white rounded-full hover:bg-[#FF2D47] transition-all duration-200 font-semibold text-center shadow-md mt-2"
          >
            Get free access
          </Link>
        </div>
      </div>
    </nav>
  );
}
