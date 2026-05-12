import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import TopBar from './components/layout/TopBar';
import HeroSection from './components/HeroSection';
import ModuleRenderer from './components/course/ModuleRenderer';
import { courseModules, intensiveRoute } from './data/courseData';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [isMobileOpen, setMobileOpen] = useState(false);

  // Find current module data
  const currentModuleData = courseModules.find(m => m.id === activeModule);

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden font-sans text-gray-800">
      <Sidebar 
        activeModule={activeModule} 
        setActiveModule={setActiveModule}
        isMobileOpen={isMobileOpen}
        setMobileOpen={setMobileOpen}
      />
      
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <TopBar setMobileOpen={setMobileOpen} />
        
        <main className="flex-1 overflow-y-auto custom-scrollbar relative w-full">
          <AnimatePresence mode="wait">
            {activeModule === 'dashboard' && (
              <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
                <HeroSection setActiveModule={setActiveModule} />
              </motion.div>
            )}
            
            {activeModule === 'intensive' && (
              <motion.div key="intensive" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="max-w-4xl mx-auto pb-20 pt-6 px-4 sm:px-6 lg:px-8">
                <div className="mb-10">
                  <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    {intensiveRoute.title}
                  </h1>
                  <p className="text-xl text-gray-600 font-medium">
                    {intensiveRoute.description}
                  </p>
                </div>
                <div className="space-y-6">
                  {intensiveRoute.days.map((day, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0 md:pr-6">
                        <h3 className="text-xl font-bold text-blue-900 mb-2">{day.day}</h3>
                        <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Objetivo</p>
                        <p className="text-gray-700 text-sm">{day.goal}</p>
                      </div>
                      <div className="md:w-2/3 space-y-4">
                        <div>
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Temas</span>
                          <p className="text-gray-800 font-medium">{day.topics}</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 text-sm text-blue-900">
                          <span className="font-bold block mb-1">Práctica:</span>
                          {day.practice}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-green-500 uppercase tracking-wider block mb-1">Resultado Esperado</span>
                          <p className="text-gray-700 text-sm border-l-4 border-green-400 pl-3">{day.expected}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {currentModuleData && (
              <ModuleRenderer key={currentModuleData.id} moduleData={currentModuleData} />
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;
