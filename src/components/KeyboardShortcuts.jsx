import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Keyboard, Undo2, Search, Copy } from 'lucide-react';

const shortcuts = [
  {
    id: 'copy',
    keys: 'CTRL + C',
    title: 'Copiar',
    desc: 'Copia la asistencia de toda una semana en un segundo.',
    icon: <Copy className="w-10 h-10 text-violet-500" />
  },
  {
    id: 'undo',
    keys: 'CTRL + Z',
    title: 'Deshacer',
    desc: '¿Borraste una calificación por error? ¡Esto es magia pura, regresa el tiempo!',
    icon: <Undo2 className="w-10 h-10 text-pink-500" />
  },
  {
    id: 'search',
    keys: 'CTRL + B',
    title: 'Buscar',
    desc: 'Encuentra el nombre de un alumno rapidísimo en una lista larga.',
    icon: <Search className="w-10 h-10 text-mint-500" />
  }
];

const FlipCard = ({ shortcut }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-full h-64 perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front Face */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col items-center justify-center text-center">
          <Keyboard className="w-12 h-12 text-gray-300 mb-4" />
          <h3 className="text-3xl font-extrabold text-gray-800 tracking-wider font-mono bg-gray-100 px-4 py-2 rounded-lg inline-block">
            {shortcut.keys}
          </h3>
          <p className="text-gray-400 mt-4 text-sm font-medium uppercase tracking-widest">Haz clic para descubrir</p>
        </div>

        {/* Back Face */}
        <div 
          className="absolute w-full h-full backface-hidden bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-200 p-6 flex flex-col items-center justify-center text-center"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="bg-white p-3 rounded-full shadow-sm mb-4">
            {shortcut.icon}
          </div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">{shortcut.title}</h4>
          <p className="text-gray-600 text-sm leading-relaxed">{shortcut.desc}</p>
        </div>
      </motion.div>
    </div>
  );
};

const KeyboardShortcuts = () => {
  return (
    <section className="py-20 px-6 bg-gray-50/50">
      {/* Required CSS for 3D flip since Tailwind doesn't have it built-in perfectly without plugins */}
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
      `}} />
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Atajos de Teclado
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Los expertos no usan el ratón todo el tiempo. Toca las tarjetas para revelar los trucos secretos.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {shortcuts.map((shortcut, idx) => (
            <motion.div
              key={shortcut.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <FlipCard shortcut={shortcut} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyboardShortcuts;
