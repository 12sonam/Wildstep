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
        { 
          name: 'Mount Everest Expedition',
          path: '/expeditions/everest'
        },
        {
          name: 'Ama Dablam Expedition',
          path: '/expeditions/ama-dablam'
        },
        {
          name: 'Cho Oyu Expedition',
          path: '/expeditions/cho-oyu'
        }
      ]
    },
    {
      name: 'TREKKING',
      path: '/trekking',
      dropdown: [
        { 
          name: 'Everest Base Camp Trek',
          path: '/trekking/everest-base-camp'
        },
        {
          name: 'Annapurna Base Camp',
          path: '/trekking/annapurna-base-camp'
        },
        {
          name: 'Manaslu Circuit Trek',
          path: '/trekking/manaslu-circuit'
        }
      ]
    },
    {
      name: 'TRAINING',
      path: '/training',
      dropdown: [
        { 
          name: 'Physical Training',
          path: '/training/physical'
        },
        {
          name: 'Technical Skills',
          path: '/training/technical'
        },
        {
          name: 'Mental Preparation',
          path: '/training/mental'
        }
      ]
    },
    {
      name: 'ENQUIRE',
      path: '/enquire',
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 hover:bg-black ${
        isScrolled ? 'bg-black/90 py-3' : 'bg-transparent py-4'
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-white"
            >
              WILD<span className="text-[#F28C38]">STEPS</span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
              >
                <Link
                  to={item.path}
                  className={`text-white hover:text-[#F28C38] transition-colors text-base uppercase tracking-wider font-medium ${
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
                      className="fixed left-0 right-0 bg-black/95 shadow-xl"
                      style={{ top: isScrolled ? '64px' : '76px' }}
                    >
                      <div className="max-w-7xl mx-auto px-8 py-8">
                        {item.name === 'TREKKING' ? (
                          <div className="grid grid-cols-5 gap-8">
                            {/* Left side - Menu items */}
                            <div className="col-span-1 border-r border-gray-700/50">
                              <h3 className="text-[#F28C38] font-semibold mb-4 text-sm uppercase tracking-wider">
                                FEATURED TREKS
                              </h3>
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  to={dropdownItem.path}
                                  className="block py-3 text-base text-white hover:bg-[#F28C38]/20 hover:text-[#F28C38] px-4 rounded-md transition-all duration-200"
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                              <Link
                                to="/trekking"
                                className="block mt-4 py-2 text-xs font-medium text-[#F28C38] hover:text-white transition-colors px-4"
                              >
                                ALL TREKS →
                              </Link>
                            </div>
                            
                            {/* Right side - Featured content */}
                            <div className="col-span-4">
                              <div className="grid grid-cols-3 gap-8">
                                {/* Featured Trek 1 */}
                                <div className="group">
                                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                                    <img 
                                      src="https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                                      alt="Everest Base Camp Trek"
                                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                  </div>
                                  <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-[#F28C38] transition-colors">Everest Base Camp Trek</h3>
                                </div>
                                {/* Featured Trek 2 */}
                                <div className="group">
                                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                                    <img 
                                      src="https://images.unsplash.com/photo-1486911278844-a81c5267e227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                                      alt="Annapurna Base Camp"
                                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                  </div>
                                  <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-[#F28C38] transition-colors">Annapurna Base Camp</h3>
                                </div>
                                {/* Featured Trek 3 */}
                                <div className="group">
                                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                                    <img 
                                      src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                                      alt="Manaslu Circuit Trek"
                                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                  </div>
                                  <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-[#F28C38] transition-colors">Manaslu Circuit Trek</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : item.name === 'TRAINING' ? (
                          <div className="grid grid-cols-5 gap-8">
                            {/* Left side - Menu items */}
                            <div className="col-span-1 border-r border-gray-700/50">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  to={dropdownItem.path}
                                  className="block py-3 text-base text-white hover:bg-[#F28C38]/20 hover:text-[#F28C38] px-4 rounded-md transition-all duration-200"
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </div>
                            
                            {/* Right side - Featured content */}
                            <div className="col-span-4">
                              <div className="grid grid-cols-3 gap-8">
                                {/* Featured Image 1 */}
                                <div className="group">
                                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                                    <img 
                                      src="https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                                      alt="Physical Training"
                                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                  </div>
                                  <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-[#F28C38] transition-colors">Physical Training</h3>
                                </div>
                                {/* Featured Image 2 */}
                                <div className="group">
                                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                                    <img 
                                      src="https://images.unsplash.com/photo-1486911278844-a81c5267e227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                                      alt="Technical Skills"
                                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                  </div>
                                  <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-[#F28C38] transition-colors">Technical Skills</h3>
                                </div>
                                {/* Featured Image 3 */}
                                <div className="group">
                                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                                    <img 
                                      src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                                      alt="Mental Preparation"
                                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                  </div>
                                  <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-[#F28C38] transition-colors">Mental Preparation</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="grid grid-cols-5 gap-8">
                            {/* Left side - Menu items */}
                            <div className="col-span-1 border-r border-gray-700/50">
                              <h3 className="text-[#F28C38] font-semibold mb-4 text-sm uppercase tracking-wider">
                                FEATURED EXPEDITIONS
                              </h3>
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  to={dropdownItem.path}
                                  className="block py-3 text-base text-white hover:bg-[#F28C38]/20 hover:text-[#F28C38] px-4 rounded-md transition-all duration-200"
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                              <Link
                                to="/expeditions"
                                className="block mt-4 py-2 text-xs font-medium text-[#F28C38] hover:text-white transition-colors px-4"
                              >
                                ALL EXPEDITIONS →
              </Link>
                            </div>
                            
                            {/* Right side - Featured content */}
                            <div className="col-span-4">
                              <div className="grid grid-cols-3 gap-8">
                                {/* Featured Expedition 1 */}
                                <div className="group">
                                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                                    <img 
                                      src="https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                                      alt="Mount Everest Expedition"
                                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                  </div>
                                  <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-[#F28C38] transition-colors">Mount Everest Expedition</h3>
                                </div>
                                {/* Featured Expedition 2 */}
                                <div className="group">
                                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                                    <img 
                                      src="https://images.unsplash.com/photo-1486911278844-a81c5267e227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                                      alt="Ama Dablam Expedition"
                                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                  </div>
                                  <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-[#F28C38] transition-colors">Ama Dablam Expedition</h3>
                                </div>
                                {/* Featured Expedition 3 */}
                                <div className="group">
                                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                                    <img 
                                      src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                                      alt="Cho Oyu Expedition"
                                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                  </div>
                                  <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-[#F28C38] transition-colors">Cho Oyu Expedition</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
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
                          <div key={dropdownItem.name}>
                            <Link
                              to={dropdownItem.path}
                              className="block text-gray-300 hover:text-[#F28C38] text-sm"
                              onClick={() => {
                                if (!dropdownItem.subItems) setIsMobileMenuOpen(false);
                                setActiveDropdown(activeDropdown === dropdownItem.name ? null : dropdownItem.name);
                              }}
                            >
                              {dropdownItem.name}
                              {dropdownItem.subItems && (
                                <span className="float-right">{activeDropdown === dropdownItem.name ? '−' : '+'}</span>
                              )}
                            </Link>
                            {dropdownItem.subItems && activeDropdown === dropdownItem.name && (
                              <div className="pl-4 space-y-2 mt-2">
                                {dropdownItem.subItems.map((subItem) => (
                <Link
                                    key={subItem.name}
                                    to={subItem.path}
                                    className="block text-gray-400 hover:text-[#F28C38] text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                                    {subItem.name}
                </Link>
                                ))}
                              </div>
                            )}
                          </div>
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