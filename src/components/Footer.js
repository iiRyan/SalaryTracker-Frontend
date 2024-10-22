import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#18191A] border-t border-gray-700 text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-6">
        <h2 className="text-2xl font-semibold text-white">SalaryTracker</h2>
        <p className="text-gray-400 max-w-xs text-center">
          We help you keep track of your monthly income and expenses easily.
        </p>
        <div className="flex space-x-6">
          <a
            href="#"
            className="text-gray-400 hover:text-purple-500 transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-purple-500 transition duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-purple-500 transition duration-300"
          >
            Contact Us
          </a>
        </div>
        <div className="flex space-x-4 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <box-icon type="logo" name="facebook" color="white" className="hover:text-purple-500"></box-icon>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <box-icon type="logo" name="twitter" color="white" className="hover:text-purple-500"></box-icon>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <box-icon type="logo" name="instagram" color="white" className="hover:text-purple-500"></box-icon>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <box-icon type="logo" name="linkedin" color="white" className="hover:text-purple-500"></box-icon>
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; 2024 SalaryTracker. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
