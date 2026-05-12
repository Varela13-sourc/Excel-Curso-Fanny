import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Users, ClipboardCheck } from 'lucide-react';

const formulas = [
  {
    id: 'suma',
    title: 'Fórmula Mágica: SUMA',
    icon: <Calculator className="w-8 h-8 text-blue-500" />,
    color: 'bg-blue-50',
    borderColor: 'border-blue-200',
    description: 'Perfecta para saber rápidamente cuánto material tienes en el salón sin contar uno por uno.',
    example: 'Sumar crayolas, hojas y pegamento.',
    code: '=SUMA(B2:B5)',
    data: [
      { item: 'Crayolas', val: 12 },
      { item: 'Hojas', val: 50 },
      { item: 'Pegamentos', val: 5 },
      { item: 'Total', val: 67, isTotal: true }
    ]
  },
  {
    id: 'promedio',
    title: 'Fórmula Mágica: PROMEDIO',
    icon: <Users className="w-8 h-8 text-pink-500" />,
    color: 'bg-pink-50',
    borderColor: 'border-pink-200',
    description: 'Ideal para sacar las calificaciones del mes o saber el promedio de asistencia de la semana.',
    example: 'Promedio de estrellas de la semana.',
    code: '=PROMEDIO(C2:C6)',
    data: [
      { item: 'Lunes', val: 4 },
      { item: 'Martes', val: 5 },
      { item: 'Miércoles', val: 3 },
      { item: 'Promedio', val: 4, isTotal: true }
    ]
  },
  {
    id: 'contarsi',
    title: 'Fórmula Mágica: CONTAR.SI',
    icon: <ClipboardCheck className="w-8 h-8 text-mint-500" />,
    color: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    description: '¿Quieres saber cuántos niños trajeron el material completo o cuántos faltaron? Esta es tu aliada.',
    example: 'Contar niños con asistencia "Presente".',
    code: '=CONTAR.SI(D2:D15, "Presente")',
    data: [
      { item: 'Mateo', val: 'Falta' },
      { item: 'Sofía', val: 'Presente' },
      { item: 'Luis', val: 'Presente' },
      { item: 'Presentes', val: 2, isTotal: true }
    ]
  }
];

const MagicFormulas = () => {
  return (
    <section className="py-20 px-6 bg-white/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Tus Fórmulas Mágicas
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            No son matemáticas aburridas, son hechizos para ahorrarte tiempo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {formulas.map((formula, index) => (
            <motion.div
              key={formula.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`rounded-2xl border ${formula.borderColor} ${formula.color} overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-opacity-60 backdrop-blur-sm`}
            >
              <div className="p-6">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-6">
                  {formula.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{formula.title}</h3>
                <p className="text-gray-600 mb-4 text-sm min-h-[60px]">{formula.description}</p>
                <div className="bg-white rounded-lg p-3 mb-4 shadow-inner border border-gray-100">
                  <p className="text-xs text-gray-400 font-medium mb-1">Ejemplo en clase:</p>
                  <p className="text-sm text-gray-700 font-medium">{formula.example}</p>
                </div>
                
                {/* Mini Table Example */}
                <div className="bg-white rounded border border-gray-200 overflow-hidden text-sm">
                  {formula.data.map((row, i) => (
                    <div key={i} className={`flex justify-between p-2 ${i !== formula.data.length - 1 ? 'border-b border-gray-100' : ''} ${row.isTotal ? 'bg-gray-50 font-bold border-t-2 border-t-gray-200 text-gray-800' : 'text-gray-600'}`}>
                      <span>{row.item}</span>
                      <span>{row.val}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex items-center justify-center">
                  <span className="bg-gray-800 text-white font-mono text-sm px-4 py-2 rounded-lg shadow-md inline-block w-full text-center">
                    {formula.code}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MagicFormulas;
