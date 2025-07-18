import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const inquiryType = searchParams.get('type');

  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    email: '',
    address: '',
    phone: '',
    destination: '',
    groupSize: '',
    message: '',
    inquiryType: inquiryType || 'general'
  });

  useEffect(() => {
    // Set default message based on inquiry type
    let defaultMessage = '';
    let title = 'Contact Us';
    
    switch(inquiryType) {
      case 'expedition':
        defaultMessage = 'I am interested in booking an expedition...';
        title = 'Expedition Enquiry';
        break;
      case 'virtual':
        defaultMessage = 'I would like to schedule a virtual call to discuss...';
        title = 'Virtual Call Request';
        break;
      case 'general':
        defaultMessage = 'I have a general inquiry about...';
        title = 'General Enquiry';
        break;
      default:
        break;
    }

    setFormData(prev => ({
      ...prev,
      message: defaultMessage,
      inquiryType: inquiryType || 'general'
    }));
  }, [inquiryType]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">CONTACT INFO</h2>
            
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-[#F28C38] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-gray-600">Dhumbarahi,Lazimpat</p>
                <p className="font-semibold text-gray-900">Kathmandu,Nepal</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-[#F28C38] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-gray-600">Call us 24*7 Support</p>
                <p className="font-semibold text-gray-900">+977-9856008848</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-[#F28C38] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-gray-600">Email us at</p>
                <p className="font-semibold text-gray-900">info@infinityadventurenepal.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {inquiryType === 'expedition' ? 'Expedition Enquiry' :
               inquiryType === 'virtual' ? 'Virtual Call Request' :
               'General Enquiry'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#F28C38] focus:border-[#F28C38]"
                  required
                />

                {/* Gender */}
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#F28C38] focus:border-[#F28C38]"
                >
                  <option value="">Select Gender (Optional)</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#F28C38] focus:border-[#F28C38]"
                  required
                />

                {/* Address */}
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#F28C38] focus:border-[#F28C38]"
                />

                {/* Phone */}
                <div className="flex">
                  <select
                    className="w-20 px-2 py-2 border border-r-0 border-gray-300 rounded-l-md focus:ring-[#F28C38] focus:border-[#F28C38]"
                  >
                    <option value="+1">+1</option>
                    <option value="+977">+977</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-l-0 border-gray-300 rounded-r-md focus:ring-[#F28C38] focus:border-[#F28C38]"
                  />
                </div>

                {/* Destination */}
                <input
                  type="text"
                  name="destination"
                  placeholder="Destination (Optional)"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#F28C38] focus:border-[#F28C38]"
                />
              </div>

              {/* Group Size */}
              <input
                type="text"
                name="groupSize"
                placeholder="Group Size (Optional)"
                value={formData.groupSize}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#F28C38] focus:border-[#F28C38]"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#F28C38] focus:border-[#F28C38]"
                required
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-32 bg-[#F28C38] text-white py-2 px-6 rounded-md hover:bg-[#E67D2E] transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 