import React from 'react';
import { Menu } from 'lucide-react';

const TopBar = ({ setMobileOpen }) => {
  return (
    <header className="lg:hidden sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-2">
        <span className="bg-green-100 text-green-600 p-1.5 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054a8.25 8.25 0 0 0 5.58.652l3.109-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .075 8.998.75.75 0 0 1-.544.79l-2.845.71a9.75 9.75 0 0 1-6.528-.698l-.109-.054a8.25 8.25 0 0 0-5.58-.652l-4.525 1.062a.75.75 0 0 1-.917-.81A47.765 47.765 0 0 0 3 2.95v-.701Z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M3.28 11.196c.218-.052.436-.104.654-.156a8.25 8.25 0 0 1 5.58.652l.108.054a9.75 9.75 0 0 0 6.528.698l2.844-.71a.75.75 0 0 1 .544.79 47.75 47.75 0 0 1-.161 7.404.75.75 0 0 1-.84.664 47.6 47.6 0 0 0-5.832-.387 47.6 47.6 0 0 0-5.832.387.75.75 0 0 1-.84-.664 47.75 47.75 0 0 1-.161-7.404.75.75 0 0 1 .545-.79Z" clipRule="evenodd" />
          </svg>
        </span>
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-400">
          Excel_Pro
        </h1>
      </div>
      <button 
        onClick={() => setMobileOpen(true)}
        className="p-2 rounded-md hover:bg-gray-100 text-gray-600 transition-colors"
      >
        <Menu size={24} />
      </button>
    </header>
  );
};

export default TopBar;
