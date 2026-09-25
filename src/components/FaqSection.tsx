import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, LAWYER_INFO } from '../data/firmData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="py-24 bg-[#100307] relative overflow-hidden border-t border-[#c8a261]/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-[#dfbe75] font-semibold">
            Esclarecimentos Importantes
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#fdfbf7] tracking-tight [text-wrap:balance]">
            Dúvidas frequentes sobre a defesa criminal e direitos do acusado
          </h2>
          <p className="text-xs sm:text-sm text-[#caa59c]">
            Informação clara e fundamentada para que você saiba exatamente o que fazer nos momentos mais críticos.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#c8a261]/20 bg-[#19050d] transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#dfbe75]"
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-[#fcfaf7] pr-4 leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#c8a261]/30 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#350a17] text-[#f0d494]' : 'text-[#cba59c]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#d4c1b7] leading-relaxed border-t border-[#c8a261]/10">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt to speak directly */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#2b0814] to-[#1a040b] border border-[#c8a261]/30 text-center space-y-4">
          <h3 className="font-display text-lg font-bold text-[#fcfaf7]">
            Possui outra dúvida específica sobre o seu caso?
          </h3>
          <p className="text-xs sm:text-sm text-[#caa59c] max-w-xl mx-auto">
            Fale diretamente com a advogada no WhatsApp para esclarecimentos com sigilo profissional absoluto.
          </p>
          <a
            href={LAWYER_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#140409] bg-gradient-to-r from-[#edd093] via-[#dfbe75] to-[#c49a4f] hover:brightness-110 active:scale-95 transition-all shadow-lg"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
