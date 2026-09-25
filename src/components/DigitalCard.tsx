import React from 'react';
import { Phone, Mail, Instagram, Globe, MessageCircle, ShieldCheck } from 'lucide-react';
import { LAWYER_INFO } from '../data/firmData';
import { Logo } from './Logo';

export const DigitalCard: React.FC = () => {
  return (
    <section id="cartao-digital" className="py-20 bg-[#100307] relative border-t border-[#c8a261]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-10 space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-[#dfbe75] font-semibold">
            Identidade Oficial
          </p>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#fdfbf7] tracking-tight">
            Cartão de Visita Digital do Escritório
          </h2>
          <p className="text-xs sm:text-sm text-[#caa59c]">
            Acesse rapidamente todos os dados de contato oficiais da Dra. Nina Rosa.
          </p>
        </div>

        {/* Digital Card replicating Page 1 & Page 2 of the uploaded PDF */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {/* Card Face 1: Official Brand Presentation */}
          <div className="rounded-2xl p-8 sm:p-10 bg-gradient-to-br from-[#4e0921] via-[#380618] to-[#1c030c] border border-[#c8a261]/35 shadow-2xl flex flex-col items-center justify-center text-center relative overflow-hidden group">
            {/* Subtle inner gold sheen */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#c8a261]/10 rounded-full blur-2xl pointer-events-none" />
            
            <Logo variant="full" />

            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#dfbe75]/60 to-transparent my-6" />

            <span className="text-xs uppercase tracking-[0.25em] text-[#eed5a5] font-semibold">
              DIREITO PENAL & PROCESSUAL PENAL
            </span>
          </div>

          {/* Card Face 2: Official Contact Information (Replicating Page 2 of uploaded PDF) */}
          <div className="rounded-2xl p-8 sm:p-10 bg-gradient-to-br from-[#4e0921] via-[#380618] to-[#1c030c] border border-[#c8a261]/35 shadow-2xl flex flex-col justify-between text-left relative overflow-hidden">
            <div>
              {/* Header */}
              <div className="border-b border-[#c8a261]/25 pb-4 mb-6 flex items-start justify-between">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-[0.15em] text-[#fbf7f0] uppercase">
                    NINA ROSA
                  </h3>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#dfbe75] font-semibold mt-0.5">
                    ADVOGADA
                  </p>
                </div>
                <span className="text-[11px] font-mono text-[#ecd8b0] px-2.5 py-1 rounded bg-[#2b0512] border border-[#c8a261]/30">
                  OAB/MG 243.206
                </span>
              </div>

              {/* Rows matching PDF Page 2 */}
              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href={`tel:${LAWYER_INFO.phoneRaw}`}
                  className="flex items-center gap-3.5 text-[#ecd8b0] hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full border border-[#c8a261]/40 flex items-center justify-center text-[#dfbe75] group-hover:scale-110 transition-transform shrink-0 bg-[#2b0512]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold tracking-wider block text-[#fdfbf7]">
                      (34) 99941-9241
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-[#dfbe75] font-semibold">
                      PLANTÃO 24HRS
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${LAWYER_INFO.email}`}
                  className="flex items-center gap-3.5 text-[#ecd8b0] hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full border border-[#c8a261]/40 flex items-center justify-center text-[#dfbe75] group-hover:scale-110 transition-transform shrink-0 bg-[#2b0512]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="tracking-wide uppercase text-xs font-semibold">
                    {LAWYER_INFO.email}
                  </span>
                </a>

                <a
                  href={LAWYER_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 text-[#ecd8b0] hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full border border-[#c8a261]/40 flex items-center justify-center text-[#dfbe75] group-hover:scale-110 transition-transform shrink-0 bg-[#2b0512]">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span className="tracking-wide uppercase text-xs font-semibold">
                    {LAWYER_INFO.instagramHandle}
                  </span>
                </a>

                <div className="flex items-center gap-3.5 text-[#ecd8b0]">
                  <div className="w-8 h-8 rounded-full border border-[#c8a261]/40 flex items-center justify-center text-[#dfbe75] shrink-0 bg-[#2b0512]">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span className="tracking-wide uppercase text-xs font-semibold">
                    ATENDIMENTO ON-LINE EM TODO BRASIL
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Accent Bar & Quick Action */}
            <div className="pt-6 mt-6 border-t border-[#c8a261]/20 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-[#dfbe75]">
                DEFESA CRIMINAL ESPECIALIZADA
              </span>
              <a
                href={LAWYER_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 px-3 rounded-lg text-xs font-bold text-[#140409] bg-gradient-to-r from-[#edd093] to-[#c8a261] hover:brightness-110 transition-all flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Salvar Contato</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
