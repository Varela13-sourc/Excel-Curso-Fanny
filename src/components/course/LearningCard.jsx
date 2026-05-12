import React from 'react';
import { BookOpen, AlertTriangle, Lightbulb } from 'lucide-react';

const LearningCard = ({ concept, explanation, example, error, tip }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-blue-100">
        <h3 className="text-xl font-bold text-blue-900 flex items-center gap-2">
          <BookOpen size={20} className="text-blue-600" />
          {concept}
        </h3>
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <p className="text-gray-700 leading-relaxed">{explanation}</p>
        </div>
        
        {example && (
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block">Ejemplo en Oficina</span>
            <p className="text-gray-800 font-medium">{example}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {error && (
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle size={16} className="text-red-500" />
                <span className="text-sm font-bold text-red-800">Error Común</span>
              </div>
              <p className="text-sm text-red-900/80">{error}</p>
            </div>
          )}
          
          {tip && (
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb size={16} className="text-amber-500" />
                <span className="text-sm font-bold text-amber-800">Tip Profesional</span>
              </div>
              <p className="text-sm text-amber-900/80">{tip}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LearningCard;
