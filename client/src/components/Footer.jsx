import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';

// Background image URL (replace with your actual image)
const mountainBackdrop = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2070&h=500&sat=-100';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white">
      {/* Mountain backdrop */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={mountainBackdrop}
          alt="Mountain backdrop"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and description */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold">
                Wild<span className="text-[#F28C38]">step</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Guiding adventurers to the world's most challenging peaks with expertise and dedication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-[#F28C38] transition-colors">About</Link></li>
              <li><Link to="/expeditions" className="text-gray-300 hover:text-[#F28C38] transition-colors">Expeditions</Link></li>
              <li><Link to="/trekking" className="text-gray-300 hover:text-[#F28C38] transition-colors">Trekking</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-[#F28C38] transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#F28C38] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Enquiries */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enquiries</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Email: info@wildstep.com</li>
              <li className="text-gray-300">Phone: +1 (555) 123-4567</li>
              <li className="text-gray-300">Location: Kathmandu, Nepal</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#F28C38] transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#F28C38] transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#F28C38] transition-colors">
                <FaYoutube size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#F28C38] transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-sm text-gray-300">
            <p>© Wildstep 2025 | Made by KARSON</p>
            <div className="mt-4 space-x-4">
              <Link to="/terms" className="hover:text-[#F28C38] transition-colors">Terms & Conditions</Link>
              <Link to="/privacy" className="hover:text-[#F28C38] transition-colors">Privacy Policy</Link>
              <Link to="/cookies" className="hover:text-[#F28C38] transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 