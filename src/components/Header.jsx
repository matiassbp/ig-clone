// components/Header.jsx
import React from 'react';

function Header() {
  return (
    <div className="flex items-center bg-black p-4 border-b border-gray-800 sticky top-0 z-10">
      <div className="flex-1 text-2xl font-cursive font-bold text-white">Instagram</div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar"
            className="bg-gray-800 text-gray-300 px-3 py-1 rounded-md text-sm focus:outline-none"
          />
        </div>
        <img
          src="/api/placeholder/30/30"
          alt="Profile"
          className="w-7 h-7 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Header;