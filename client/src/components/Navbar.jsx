import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: 'ABOUT',
      path: '/about',
    },
    {
      name: 'EXPEDITIONS',
      path: '/expeditions',
      dropdown: [
        { name: 'Mount Everest', path: '/expeditions/mount-everest' },
        { name: 'K2', path: '/expeditions/k2' },
        { name: 'Cho Oyu', path: '/expeditions/cho-oyu' },
      ],
    },
    {
      name: 'TREKKING',
      path: '/trekking',
      dropdown: [
        { name: 'Everest Base Camp', path: '/trekking/everest-base-camp' },
        { name: 'Annapurna Base Camp', path: '/trekking/annapurna-base-camp' },
        { name: 'Everest Three Pass Trek', path: '/trekking/everest-three-pass' },
        { name: 'EBC with Seasoned Experts', path: '/trekking/ebc-experts' },
      ],
    },
    {
      name: 'TRAINING',
      path: '/training',
      dropdown: [
        { name: 'Physical Training', path: '/training/physical' },
        { name: 'Technical Skills', path: '/training/technical' },
        { name: 'Mental Preparation', path: '/training/mental' },
      ],
    },
    {
      name: 'RESOURCES',
      path: '/resources',
    },
    {
      name: 'ENQUIRE',
      path: '/enquire',
    },
    {
      name: 'SHOP',
      path: '/shop',
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 py-2' : 'bg-transparent py-4'
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
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
              WILD<span className="text-[#F28C38]">STEPS</span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
              >
                <Link
                  to={item.path}
                  className={`text-white hover:text-[#F28C38] transition-colors text-sm uppercase tracking-wider font-medium ${
                    activeDropdown === item.name ? 'text-[#F28C38]' : ''
                  }`}
                >
                  {item.name}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-64 bg-black/90 rounded-md shadow-lg py-2"
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block px-4 py-2 text-sm text-white hover:bg-[#F28C38]/20 hover:text-[#F28C38]"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-2 pb-4">
                {navItems.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <Link
                      to={item.path}
                      className="block text-white hover:text-[#F28C38] transition-colors text-sm uppercase tracking-wider font-medium"
                      onClick={() => {
                        if (!item.dropdown) setIsMobileMenuOpen(false);
                        setActiveDropdown(activeDropdown === item.name ? null : item.name);
                      }}
                    >
                      {item.name}
                      {item.dropdown && (
                        <span className="float-right">{activeDropdown === item.name ? '−' : '+'}</span>
                      )}
                    </Link>
                    {item.dropdown && activeDropdown === item.name && (
                      <div className="pl-4 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block text-gray-300 hover:text-[#F28C38] text-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}