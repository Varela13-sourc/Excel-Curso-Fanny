import React from 'react';
import LearningCard from './LearningCard';
import FormulaSimulator from './FormulaSimulator';
import PracticalExercise from './PracticalExercise';
import MiniQuiz from './MiniQuiz';
import ChecklistFinal from './ChecklistFinal';
import { BookOpen, Target, CheckSquare, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const ModuleRenderer = ({ moduleData }) => {
  if (!moduleData) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto pb-20 pt-6 px-4 sm:px-6 lg:px-8"
    >
      <div className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          {moduleData.title}
        </h1>
        <p className="text-xl text-gray-600 font-medium">
          {moduleData.description}
        </p>
      </div>

      {moduleData.theory && moduleData.theory.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b border-gray-200 pb-3">
            <BookOpen className="text-blue-600" />
            Teoría y Conceptos
          </h2>
          {moduleData.theory.map((item, idx) => (
            <LearningCard key={idx} {...item} />
          ))}
        </section>
      )}

      {moduleData.simulator && moduleData.simulator.length > 0 && (
        <section className="mb-12">
          <FormulaSimulator simulators={moduleData.simulator} />
        </section>
      )}

      {moduleData.exercises && moduleData.exercises.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b border-gray-200 pb-3">
            <Settings className="text-orange-500" />
            Ejercicios Prácticos
          </h2>
          {moduleData.exercises.map((ex, idx) => (
            <PracticalExercise key={idx} exercise={ex} />
          ))}
        </section>
      )}

      {moduleData.quiz && moduleData.quiz.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b border-gray-200 pb-3">
            <Target className="text-indigo-600" />
            Ponte a Prueba
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {moduleData.quiz.map((q, idx) => (
              <MiniQuiz key={idx} quiz={q} />
            ))}
          </div>
        </section>
      )}

      {moduleData.tasks && moduleData.tasks.length > 0 && (
        <section className="mb-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl text-white">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <CheckSquare className="text-green-400" />
            Misión para tu oficina
          </h2>
          <ul className="space-y-4">
            {moduleData.tasks.map((task, idx) => (
              <li key={idx} className="flex items-start gap-4 bg-white/10 p-4 rounded-xl border border-white/5">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold">
                  {idx + 1}
                </span>
                <p className="text-gray-200 font-medium pt-1">{task}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {moduleData.id === "m10" && (
        <ChecklistFinal />
      )}
    </motion.div>
  );
};

export default ModuleRenderer;
