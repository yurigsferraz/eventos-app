import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-white font-bold text-lg">EventOS</a>
          </div>
          <div className="flex">
            <a href="/about" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="/services" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Services</a>
            <a href="/contact" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
