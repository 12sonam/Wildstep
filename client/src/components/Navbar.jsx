import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-white"
            >
              Wild<span className="text-[#F28C38]">step</span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              ['About', '/about'],
              ['Expeditions', '/expeditions'],
              ['Trekking', '/trekking'],
              ['Resources', '/resources'],
              ['Contact', '/contact'],
            ].map(([name, url]) => (
              <Link
                key={name}
                to={url}
                className="text-white hover:text-[#F28C38] transition-colors text-sm uppercase tracking-wider font-medium"
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4"
          >
            <div className="flex flex-col space-y-4 pb-4">
              {[
                ['About', '/about'],
                ['Expeditions', '/expeditions'],
                ['Trekking', '/trekking'],
                ['Resources', '/resources'],
                ['Contact', '/contact'],
              ].map(([name, url]) => (
                <Link
                  key={name}
                  to={url}
                  className="text-white hover:text-[#F28C38] transition-colors text-sm uppercase tracking-wider font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}