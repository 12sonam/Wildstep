import React, { useState } from 'react';

const GeneralEnquiry = () => {
  const [formData, setFormData] = useState({
    message: '',
    fullName: '',
    email: '',
    city: '',
    country: '',
    phone: '',
    occupation: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some(value => !value)) {
      // Show error message if any field is empty
      return;
    }
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900">
        {/* Background Image */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'grayscale(100%)'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center h-full space-y-6">
            {/* Orange Line */}
            <div className="w-24 h-1 bg-[#F28C38]"></div>
            
            {/* Title */}
            <h1 className="text-6xl font-light text-gray-300">
              General<br />enquiry
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-xl text-gray-300">
              Thank you for your interest, please complete the form below and we will be back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg p-8">
          <p className="text-gray-600 mb-8">All fields required below.</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Enquiry Section */}
            <div className="space-y-6">
              <div className="inline-block bg-black text-white px-4 py-2 text-sm">
                ENQUIRY
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:border-[#F28C38] focus:ring-0 resize-none bg-transparent placeholder-gray-500"
                  required
                />
              </div>
            </div>

            {/* Your Details Section */}
            <div className="space-y-6">
              <div className="inline-block bg-black text-white px-4 py-2 text-sm">
                YOUR DETAILS
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:border-[#F28C38] focus:ring-0 bg-transparent placeholder-gray-500 pb-2"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:border-[#F28C38] focus:ring-0 bg-transparent placeholder-gray-500 pb-2"
                  required
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:border-[#F28C38] focus:ring-0 bg-transparent placeholder-gray-500 pb-2"
                  required
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:border-[#F28C38] focus:ring-0 bg-transparent placeholder-gray-500 pb-2"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:border-[#F28C38] focus:ring-0 bg-transparent placeholder-gray-500 pb-2"
                  required
                />
                <input
                  type="text"
                  name="occupation"
                  placeholder="Occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:border-[#F28C38] focus:ring-0 bg-transparent placeholder-gray-500 pb-2"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end items-center space-x-4">
              <p className="text-sm text-gray-500">All fields required</p>
              <button
                type="submit"
                className="bg-[#F28C38] text-white px-6 py-3 flex items-center space-x-2 hover:bg-[#E67D2E] transition-colors duration-300"
              >
                <span>Submit enquiry</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GeneralEnquiry;