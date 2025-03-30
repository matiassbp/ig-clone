// components/ProfileSuggestion.jsx
import React from 'react';

function ProfileSuggestion({ username, imageUrl, subtitle, isFollowing, withDescription }) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center">
        <img
          src={imageUrl || "/api/placeholder/40/40"}
          alt={username}
          className="w-8 h-8 rounded-full mr-3"
        />
        <div>
          <div className="font-semibold text-sm text-white">{username}</div>
          {withDescription && <div className="text-gray-500 text-xs">{subtitle}</div>}
        </div>
      </div>
      <button className="text-blue-400 text-xs font-semibold">
        {isFollowing ? 'Siguiendo' : 'Seguir'}
      </button>
    </div>
  );
}

export default ProfileSuggestion;