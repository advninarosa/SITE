import React from 'react';
import { AlertCircle, Phone, MessageCircle, Clock, ShieldAlert } from 'lucide-react';
import { LAWYER_INFO } from '../data/firmData';

export const EmergencyBanner: React.FC = () => {
  return (
    <section id="plantao-urgente" className="relative z-20 py-8 bg-[#220710] border-y border-[#c8a261]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left info */}
          <div className="flex items-start sm:items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8a1c36] to-[#450b1a] border border-[#dfbe75]/40 flex items-center justify-center shrink-0 shadow-lg text-[#f0d494]">
              <ShieldAlert className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-[#dfbe75] font-bold">
                  Atendimento Imediato de Urgência
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              </div>
              <h2 className="text-lg sm:text-xl font-display font-bold text-[#fcfaf7] tracking-tight">
                Prisão em flagrante, busca & apreensão ou audiência de custódia?
              </h2>
              <p className="text-xs sm:text-sm text-[#d8c2b7] mt-0.5">
                Não preste depoimento sem a presença da sua advogada. O silêncio é uma garantia constitucional.
              </p>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full lg:w-auto">
            <a
              href={`https://wa.me/5534999419241?text=URGENTE%3A%20Preciso%20de%20atendimento%20criminal%20imediato%20com%20a%20Dra.%20Nina%20Rosa.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#140409] bg-gradient-to-r from-[#edd093] via-[#dfbe75] to-[#c49a4f] hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#c8a261]/20 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chamar Plantão no WhatsApp</span>
            </a>

            <a
              href={`tel:${LAWYER_INFO.phoneRaw}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#dfbe75] border border-[#c8a261]/40 bg-[#16040a]/80 hover:bg-[#2b0813] transition-all whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>Ligar (34) 99941-9241</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
