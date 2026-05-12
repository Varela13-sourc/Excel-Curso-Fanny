import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ChevronRight, Play } from 'lucide-react';
import clsx from 'clsx';
import { courseModules } from '../../data/courseData';

const Sidebar = ({ activeModule, setActiveModule, isMobileOpen, setMobileOpen }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isMobileOpen ? 0 : 0 }}
        className={clsx(
          "fixed lg:static inset-y-0 left-0 w-72 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 ease-in-out flex flex-col h-screen",
          !isMobileOpen && "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="p-6 border-b border-gray-100 flex-shrink-0">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-400 flex items-center gap-2">
            <span className="bg-green-100 text-green-600 p-1.5 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054a8.25 8.25 0 0 0 5.58.652l3.109-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .075 8.998.75.75 0 0 1-.544.79l-2.845.71a9.75 9.75 0 0 1-6.528-.698l-.109-.054a8.25 8.25 0 0 0-5.58-.652l-4.525 1.062a.75.75 0 0 1-.917-.81A47.765 47.765 0 0 0 3 2.95v-.701Z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M3.28 11.196c.218-.052.436-.104.654-.156a8.25 8.25 0 0 1 5.58.652l.108.054a9.75 9.75 0 0 0 6.528.698l2.844-.71a.75.75 0 0 1 .544.79 47.75 47.75 0 0 1-.161 7.404.75.75 0 0 1-.84.664 47.6 47.6 0 0 0-5.832-.387 47.6 47.6 0 0 0-5.832.387.75.75 0 0 1-.84-.664 47.75 47.75 0 0 1-.161-7.404.75.75 0 0 1 .545-.79Z" clipRule="evenodd" />
              </svg>
            </span>
            Excel_Pro
          </h1>
          <p className="text-sm text-gray-500 mt-2 font-medium">Curso Intensivo de Oficina</p>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-1">
          {/* Dashboard Option */}
          <button
            onClick={() => { setActiveModule("dashboard"); setMobileOpen(false); }}
            className={clsx(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all font-medium text-sm",
              activeModule === "dashboard"
                ? "bg-green-50 text-green-700 shadow-sm border border-green-100"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            )}
          >
            <Play size={18} className={activeModule === "dashboard" ? "text-green-600" : "text-gray-400"} />
            Inicio del Curso
          </button>
          
          <button
            onClick={() => { setActiveModule("intensive"); setMobileOpen(false); }}
            className={clsx(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all font-medium text-sm mb-4",
              activeModule === "intensive"
                ? "bg-blue-50 text-blue-700 shadow-sm border border-blue-100"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            )}
          >
            <Calendar size={18} className={activeModule === "intensive" ? "text-blue-600" : "text-gray-400"} />
            Ruta 7 Días
          </button>

          <div className="pt-4 pb-2">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3">Módulos</p>
          </div>

          {courseModules.map((mod) => (
            <button
              key={mod.id}
              onClick={() => { setActiveModule(mod.id); setMobileOpen(false); }}
              className={clsx(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all font-medium text-sm",
                activeModule === mod.id
                  ? "bg-gray-900 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <div className={clsx(
                "flex items-center justify-center w-6 h-6 rounded-md text-xs font-bold",
                activeModule === mod.id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
              )}>
                {mod.id.replace('m', '')}
              </div>
              <span className="flex-1 truncate">{mod.title.split('. ')[1]}</span>
              {activeModule === mod.id && <ChevronRight size={16} className="text-white/70" />}
            </button>
          ))}
        </div>
        
        <div className="p-4 border-t border-gray-100 flex-shrink-0 bg-gray-50/50">
           <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl p-4 text-white shadow-lg">
             <p className="text-xs font-bold uppercase tracking-wider mb-1 opacity-80">PROGRESO</p>
             <p className="text-sm font-medium">¡Sigue practicando!</p>
           </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
