import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Story from './components/Story';
import Post from './components/Post';
import ProfileSuggestion from './components/ProfileSuggestion';
import CreateStory from './components/CreateStory';

function App() {
  // Variables de estado
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  // Funciones para crear datos aleatorios
  function getRandomAvatar() {
    let gender = Math.random() > 0.5 ? 'men' : 'women';
    let num = Math.floor(Math.random() * 100);
    return `https://randomuser.me/api/portraits/${gender}/${num}.jpg`;
  }

  function getRandomPostImage(index) {
    // Usar solo algunas categorías básicas
    let categories = ['nature', 'city', 'food', 'animals'];
    let category = categories[Math.floor(Math.random() * categories.length)];
    return `https://picsum.photos/seed/${category}${index}/600/600`;
  }

  function makeUsername(index) {
    let names = ['Usuario', 'Cuenta', 'Insta', 'CL'];
    let name = names[Math.floor(Math.random() * names.length)];
    return `${name}_${index}${Math.floor(Math.random() * 100)}`;
  }

  // Crear un post random
  function makeRandomPost(index) {
    let username = makeUsername(index);
    let userImage = getRandomAvatar();
    let postImage = getRandomPostImage(index);
    
    // Textos simples para los posts
    let textos = [
      'Buen día! ✨',
      'Me encanta esta foto 📸',
      'De viaje 🌎',
      'Con amigos 👫',
      'Nueva foto ❤️'
    ];

    return {
      id: Date.now() + index,
      username: username,
      userImage: userImage,
      postImage: postImage,
      caption: textos[Math.floor(Math.random() * textos.length)],
      likes: Math.floor(Math.random() * 1000),
      time: `${Math.floor(Math.random() * 10)} h`,
      comments: Math.floor(Math.random() * 50)
    };
  }

  // Cargar datos iniciales
  function loadInitialData() {
    // Crear historias
    let newStories = [];
    for (let i = 0; i < 3; i++) {
      newStories.push({
        username: makeUsername(i),
        imageUrl: getRandomAvatar(),
        isActive: Math.random() > 0.3
      });
    }
    
    // Crear posts
    let newPosts = [];
    for (let i = 0; i < 5; i++) {
      newPosts.push(makeRandomPost(i));
    }
    
    // Crear sugerencias
    let newSuggestions = [];
    for (let i = 0; i < 5; i++) {
      let username = makeUsername(i + 100);
      newSuggestions.push({
        username: username,
        imageUrl: getRandomAvatar(),
        subtitle: `Sugerido para ti`,
        isFollowing: false
      });
    }
    
    setStories(newStories);
    setPosts(newPosts);
    setSuggestions(newSuggestions);
    
    // Simular tiempo de carga
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }
  
  // Cargar más posts cuando se hace scroll
  function loadMorePosts() {
    setLoadingMore(true);
    
    // Agregamos 3 posts más
    setTimeout(() => {
      let newPosts = [];
      for (let i = 0; i < 3; i++) {
        newPosts.push(makeRandomPost(i + posts.length));
      }
      
      setPosts([...posts, ...newPosts]);
      setPage(page + 1);
      setLoadingMore(false);
    }, 1000);
  }
  
  // Detección de scroll (manera simple)
  window.onscroll = function() {
    if (loadingMore) return;
    
    // Si llegamos al final de la página
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
      loadMorePosts();
    }
  };
  
  // Cargar datos cuando inicia
  useEffect(() => {
    loadInitialData();
  }, []);
  
  // Pantalla de carga
  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
        <div className="mb-4">
          <svg className="animate-spin h-12 w-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <div className="text-xl font-bold">Cargando...</div>
      </div>
    );
  }
  
  // Avatar para el usuario actual
  const profileImage = getRandomAvatar();
  
  return (
    <div className="flex bg-black min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Contenido principal */}
      <div className="ml-64 w-full">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6 py-6 px-4">
          {/* Columna de Stories y Posts */}
          <div className="col-span-2">
            {/* Stories */}
            <div className="bg-black border border-gray-800 rounded-md p-4 mb-6 text-white">
              <div className="flex overflow-x-auto">
                <CreateStory userImage={profileImage} />
                {stories.map((story, index) => (
                  <Story
                    key={index}
                    username={story.username}
                    imageUrl={story.imageUrl}
                    isActive={story.isActive}
                  />
                ))}
              </div>
            </div>
            
            {/* Posts */}
            {posts.map((post, index) => (
              <Post
                key={post.id}
                username={post.username}
                userImage={post.userImage}
                postImage={post.postImage}
                caption={post.caption}
                likes={post.likes}
                time={post.time}
                comments={post.comments}
              />
            ))}
            
            {/* Loader para más posts */}
            {loadingMore && (
              <div className="flex justify-center py-4">
                <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
            )}
          </div>
          
          {/* Columna de Sugerencias y Perfil */}
          <div className="col-span-1">
            {/* Perfil del usuario */}
            <div className="flex items-center mb-6">
              <img
                src={profileImage}
                alt="Current user"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex-1">
                <div className="font-semibold text-white">UsuarioMain</div>
                <div className="text-gray-500 text-sm">UsuarioMainName</div>
              </div>
              <button className="text-blue-400 text-xs font-semibold">Cambiar</button>
            </div>
            
            {/* Título de sugerencias */}
            <div className="flex justify-between mb-3">
              <span className="text-gray-500 font-semibold text-sm">Sugerencias para ti</span>
              <button className="text-xs font-semibold text-gray-300">Ver todo</button>
            </div>
            
            {/* Lista de sugerencias */}
            <div className="mb-6">
              {suggestions.map((suggestion, index) => (
                <ProfileSuggestion
                  key={index}
                  username={suggestion.username}
                  imageUrl={suggestion.imageUrl}
                  subtitle={suggestion.subtitle}
                  isFollowing={suggestion.isFollowing}
                  withDescription={true}
                />
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;