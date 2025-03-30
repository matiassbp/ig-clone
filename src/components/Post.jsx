// components/Post.jsx (simplificado)
import React, { useState } from 'react';

function Post({ username, userImage, postImage, caption, likes, time, comments }) {
  // Estados básicos
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);
  
  // Función para dar like
  function handleLike() {
    if (isLiked) {
      // Si ya le di like, lo quito
      setLikesCount(likesCount - 1);
    } else {
      // Si no tiene like, lo agrego
      setLikesCount(likesCount + 1);
    }
    setIsLiked(!isLiked);
  }
  
  return (
    <div className="bg-black border border-gray-800 rounded-md mb-6 text-white">
      {/* Cabecera del post */}
      <div className="flex items-center p-3">
        <img
          className="w-8 h-8 rounded-full mr-3"
          src={userImage}
          alt={username}
        />
        <div className="font-semibold">{username}</div>
        <div className="ml-auto text-white cursor-pointer">•••</div>
      </div>
      
      {/* Imagen del post */}
      <div>
        <img
          className="w-full"
          src={postImage}
          alt="Post"
          onDoubleClick={handleLike}
        />
      </div>
      
      {/* Acciones */}
      <div className="p-3">
        <div className="flex space-x-4 mb-2">
          {/* Botón de like */}
          <button onClick={handleLike}>
            {isLiked ? (
              // Corazón rojo cuando está likeado
              <svg xmlns="http://www.w3.org/2000/svg" 
                   className="w-6 h-6 text-red-500 fill-red-500"
                   fill="currentColor"
                   viewBox="0 0 24 24" 
                   strokeWidth="1.5" 
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            ) : (
              // Corazón normal
              <svg xmlns="http://www.w3.org/2000/svg" 
                   className="w-6 h-6"
                   fill="none"
                   viewBox="0 0 24 24" 
                   strokeWidth="1.5" 
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            )}
          </button>
          
          {/* Botón de comentar */}
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
            </svg>
          </button>
          
          {/* Botón de compartir */}
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
          
          {/* Botón de guardar */}
          <button className="ml-auto" onClick={() => setIsSaved(!isSaved)}>
            {isSaved ? (
              <svg xmlns="http://www.w3.org/2000/svg" 
                   fill="currentColor"
                   viewBox="0 0 24 24" 
                   strokeWidth="1.5" 
                   stroke="currentColor" 
                   className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" 
                   fill="none"
                   viewBox="0 0 24 24" 
                   strokeWidth="1.5" 
                   stroke="currentColor" 
                   className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Información del post */}
        <div className="font-semibold mb-1">{likesCount} Me gusta</div>
        <div>
          <span className="font-semibold mr-2">{username}</span>
          {caption}
        </div>
        <div className="text-gray-500 text-sm mt-1 cursor-pointer">
          Ver los {comments} comentarios
        </div>
        <div className="mt-2">
          <input
            type="text"
            placeholder="Añade un comentario..."
            className="bg-transparent text-white text-sm w-full outline-none border-none"
          />
        </div>
        <div className="text-gray-500 text-xs mt-1">
          HACE {time}
        </div>
      </div>
    </div>
  );
}

export default Post;