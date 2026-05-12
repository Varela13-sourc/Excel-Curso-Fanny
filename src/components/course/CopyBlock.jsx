import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CopyBlock = ({ text, label = "Copiar Fórmula" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="bg-gray-900 text-gray-100 font-mono text-sm p-4 rounded-xl shadow-inner overflow-x-auto flex items-center justify-between gap-4">
        <code className="whitespace-nowrap">{text}</code>
        <button
          onClick={handleCopy}
          className="flex-shrink-0 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-3 py-1.5 flex items-center gap-2 text-xs font-medium"
          title={label}
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          {copied ? "Copiado!" : label}
        </button>
      </div>
    </div>
  );
};

export default CopyBlock;
