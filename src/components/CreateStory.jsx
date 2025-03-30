// components/CreateStory.jsx
import React from 'react';

function CreateStory({ userImage }) {
  return (
    <div className="flex flex-col items-center mx-3 cursor-pointer">
      <div className="w-16 h-16 rounded-full relative">
        <img
          src={userImage || "/api/placeholder/64/64"}
          alt="Tu historia"
          className="w-full h-full object-cover rounded-full border-2 border-black"
        />
        <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center border-2 border-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </div>
      <span className="text-xs mt-1 w-16 text-center text-white">Tu historia</span>
    </div>
  );
}

export default CreateStory;