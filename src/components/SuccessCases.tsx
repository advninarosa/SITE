import React from 'react';
import { ShieldCheck, Scale, CheckCircle2, FileCheck } from 'lucide-react';
import { SUCCESS_CASES } from '../data/firmData';

export const SuccessCases: React.FC = () => {
  return (
    <section className="py-24 bg-[#140409] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-[#dfbe75] font-semibold">
            Resultados & Atuação Prática
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fdfbf7] tracking-tight [text-wrap:balance]">
            Decisões e defesas que fizeram a diferença na vida de nossos clientes.
          </h2>
          <p className="text-xs sm:text-sm text-[#caa59c] leading-relaxed">
            *Em estrito cumprimento ao Código de Ética e Disciplina da OAB (Provimento 205/2021), dados identificadores de clientes e processos são integralmente resguardados por sigilo profissional inviolável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SUCCESS_CASES.map((item, index) => (
            <div
              key={index}
              className="glass-panel rounded-2xl p-7 text-left border border-[#c8a261]/25 hover:border-[#dfbe75]/45 transition-all group"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#dfbe75] font-semibold">
                  {item.tag}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-[#10b981] font-semibold bg-[#064e3b]/30 px-2 py-0.5 rounded-full border border-[#10b981]/30">
                  <CheckCircle2 className="w-3 h-3" />
                  Êxito Técnico
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-[#fcfaf7] group-hover:text-[#f3dfb5] transition-colors mb-2">
                {item.outcome}
              </h3>

              <p className="text-xs sm:text-sm text-[#caa59c] leading-relaxed mb-4">
                {item.context}
              </p>

              <div className="pt-3 border-t border-[#c8a261]/15 text-[11px] text-[#dfbe75]/80 font-mono">
                {item.citation}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
