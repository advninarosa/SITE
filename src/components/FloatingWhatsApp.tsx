import React, { useState, useEffect } from 'react';
import { MessageCircle, X, ShieldAlert } from 'lucide-react';
import { LAWYER_INFO } from '../data/firmData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {/* Small floating status notification */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-xl bg-[#1d060f]/95 border border-[#c8a261]/35 backdrop-blur-md shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
          <div className="text-left">
            <p className="text-[11px] font-bold text-[#fcfaf7] leading-tight">
              Plantão Criminal 24h Ativo
            </p>
            <p className="text-[10px] text-[#dfbe75]">
              Falar agora com a Dra. Nina Rosa
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#9e8379] hover:text-white ml-1 p-0.5"
            aria-label="Fechar notificação"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main floating button */}
      <a
        href={LAWYER_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#25d366] to-[#128c7e] text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/20 focus:outline-none focus:ring-4 focus:ring-[#25d366]/40"
        aria-label="Falar com a advogada no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border border-white text-[9px] font-bold text-white items-center justify-center">
            1
          </span>
        </span>
      </a>
    </div>
  );
};
