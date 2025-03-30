import React from 'react';
import { Home, Search, Compass, Film, MessageCircle, Heart, PlusSquare, User, Menu } from 'lucide-react';

function Sidebar() {
  return (
    <div className="flex flex-col h-screen w-64 border-r border-gray-800 bg-black px-3 py-5 fixed left-0">
      <div className="mb-8 pl-3">
        <h1 className="text-2xl font-cursive font-bold text-white">Instagram</h1>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2">
          <li className="px-3 py-3 flex items-center rounded-md hover:bg-gray-900 cursor-pointer">
            <Home className="w-6 h-6 mr-4 text-white" />
            <span className="font-medium text-white">Inicio</span>
          </li>
          <li className="px-3 py-3 flex items-center rounded-md hover:bg-gray-900 cursor-pointer">
            <Search className="w-6 h-6 mr-4 text-white" />
            <span className="font-medium text-white">Buscar</span>
          </li>
          <li className="px-3 py-3 flex items-center rounded-md hover:bg-gray-900 cursor-pointer">
            <Compass className="w-6 h-6 mr-4 text-white" />
            <span className="font-medium text-white">Explorar</span>
          </li>
          <li className="px-3 py-3 flex items-center rounded-md hover:bg-gray-900 cursor-pointer">
            <Film className="w-6 h-6 mr-4 text-white" />
            <span className="font-medium text-white">Reels</span>
          </li>
          <li className="px-3 py-3 flex items-center rounded-md hover:bg-gray-900 cursor-pointer">
            <MessageCircle className="w-6 h-6 mr-4 text-white" />
            <span className="font-medium text-white">Mensajes</span>
            <div className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</div>
          </li>
          <li className="px-3 py-3 flex items-center rounded-md hover:bg-gray-900 cursor-pointer">
            <Heart className="w-6 h-6 mr-4 text-white" />
            <span className="font-medium text-white">Notificaciones</span>
          </li>
          <li className="px-3 py-3 flex items-center rounded-md hover:bg-gray-900 cursor-pointer">
            <PlusSquare className="w-6 h-6 mr-4 text-white" />
            <span className="font-medium text-white">Crear</span>
          </li>
          <li className="px-3 py-3 flex items-center rounded-md hover:bg-gray-900 cursor-pointer">
            <User className="w-6 h-6 mr-4 text-white" />
            <span className="font-medium text-white">Perfil</span>
          </li>
        </ul>
      </nav>
      
      <div className="mt-auto">
        <div className="px-3 py-3 flex items-center rounded-md hover:bg-gray-900 cursor-pointer">
          <Menu className="w-6 h-6 mr-4 text-white" />
          <span className="font-medium text-white">Más</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;