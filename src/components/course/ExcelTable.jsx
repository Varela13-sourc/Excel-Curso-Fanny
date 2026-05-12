import React from 'react';
import { Table } from 'lucide-react';

const ExcelTable = ({ data, columns }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden mb-6">
      <div className="bg-green-700 px-4 py-2 flex items-center gap-2 text-white">
        <Table size={18} />
        <span className="text-sm font-semibold">Libro1 - Excel</span>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr>
              <th className="excel-header w-10 bg-gray-200 border-r border-b border-gray-300"></th>
              {columns.map((col, idx) => (
                <th key={idx} className="excel-header border-r border-b border-gray-300 min-w-[100px] hover:bg-gray-200 cursor-pointer transition-colors">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIdx) => (
              <tr key={rowIdx}>
                <td className="excel-header w-10 bg-gray-100 border-r border-b border-gray-300">{rowIdx + 1}</td>
                {row.map((cell, cellIdx) => (
                  <td key={cellIdx} className="border-r border-b border-gray-300 p-0 relative group">
                    <input 
                      type="text" 
                      defaultValue={cell} 
                      className="w-full h-full px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:z-10 relative bg-transparent"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="bg-gray-100 border-t border-gray-200 px-3 py-1 flex gap-1">
        <div className="bg-white border-b-2 border-green-600 text-green-700 px-4 py-1 text-xs font-bold shadow-sm rounded-t">
          Hoja1
        </div>
      </div>
    </div>
  );
};

export default ExcelTable;
