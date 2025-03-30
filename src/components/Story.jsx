// components/Story.jsx (mejorado)
import React, { useState } from 'react';

function Story({ username, imageUrl, isActive }) {
  const [viewed, setViewed] = useState(false);
  
  return (
    <div className="flex flex-col items-center mx-3 cursor-pointer" onClick={() => setViewed(true)}>
      <div className={`w-16 h-16 rounded-full 
        ${isActive && !viewed ? 'bg-gradient-to-tr from-yellow-500 to-pink-500 p-0.5' : ''}
        ${viewed ? 'bg-gray-700 p-0.5' : ''}
        ${!isActive && !viewed ? 'bg-gray-200 p-0.5' : ''}
      `}>
        <img
          src={imageUrl || "/api/placeholder/64/64"}
          alt={username}
          className="w-full h-full object-cover rounded-full border-2 border-black"
        />
      </div>
      <span className="text-xs mt-1 truncate w-16 text-center text-white">
        {username.length > 10 ? username.substring(0, 10) + '...' : username}
      </span>
    </div>
  );
}

export default Story;