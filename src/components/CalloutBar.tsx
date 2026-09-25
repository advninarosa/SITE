import React from 'react';
import { MessageCircle, ShieldCheck, Scale, Zap } from 'lucide-react';
import { LAWYER_INFO } from '../data/firmData';

export const CalloutBar: React.FC = () => {
  return (
    <div className="border-y border-[#c8a261]/25 bg-[#1b050f]">
      {/* Upper Callout Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#fdfbf7] tracking-tight [text-wrap:balance]">
              Por que a atuação técnica nas primeiras 24 horas define o resultado do processo?
            </h2>
            <p className="text-xs sm:text-sm text-[#d4c1b7] leading-relaxed">
              O momento do flagrante e a audiência de custódia são irreversíveis. Uma defesa presente impede arbitrariedades, resguarda a prova e busca a liberdade antes de qualquer consolidação da acusação.
            </p>
          </div>

          <a
            href={LAWYER_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-[#140409] bg-[#fdf2d6] hover:bg-[#fff9ea] hover:shadow-xl hover:shadow-[#c8a261]/30 active:scale-95 transition-all shadow-md shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current text-[#140409]" />
            <span>SIM, QUERO UMA CONSULTA</span>
          </a>
        </div>
      </div>

      {/* Marquee Ticker Bar matching reference layout */}
      <div className="py-3 bg-[#2d0816] border-t border-[#c8a261]/20 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-6 sm:gap-12 text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#e8c988]">
          <span className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-[#dfbe75]" />
            PLANTÃO 24 HORAS
          </span>
          <span className="hidden sm:inline text-[#c8a261]/40">•</span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#dfbe75]" />
            SIGILO ABSOLUTO
          </span>
          <span className="hidden sm:inline text-[#c8a261]/40">•</span>
          <span className="flex items-center gap-2">
            <Scale className="w-3.5 h-3.5 text-[#dfbe75]" />
            ATENDIMENTO ON-LINE EM TODO O BRASIL
          </span>
          <span className="hidden md:inline text-[#c8a261]/40">•</span>
          <span className="hidden md:inline font-mono">
            OAB/MG nº 243.206
          </span>
        </div>
      </div>
    </div>
  );
};
