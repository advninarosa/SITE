import React from 'react';
import { Phone, Shield, ArrowRight, MessageCircle, FileText, CheckCircle } from 'lucide-react';
import { WORKFLOW_STEPS, LAWYER_INFO } from '../data/firmData';
import courtroomImg from '../assets/images/criminal_defense_courtroom_1790342737910.jpg';

export const WorkflowSteps: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 bg-[#100307] relative overflow-hidden border-t border-[#c8a261]/15">
      {/* Subtle glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#520f21]/20 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Atmospheric photo & commitment */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#c8a261]/30 shadow-2xl group">
              <img
                src={courtroomImg}
                alt="Tribunal de Justiça e Defesa Constitucional"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120308] via-[#120308]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="text-[11px] uppercase tracking-widest text-[#dfbe75] font-semibold block mb-1">
                  Atuação Forense e Estratégica
                </span>
                <p className="font-display text-lg font-bold text-[#fcfaf7] leading-snug">
                  "A liberdade não admite hesitação nem defesas genéricas."
                </p>
                <p className="text-xs text-[#d1bcb2] mt-1">
                  Cada inquérito, cada audiência e cada sustentação é preparada minuciosamente para encontrar as falhas na acusação e fazer valer a lei.
                </p>
              </div>
            </div>

            {/* Direct emergency hotline callout */}
            <div className="p-6 rounded-2xl bg-[#1d060f] border border-[#c8a261]/25 text-left flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#dfbe75] font-bold">
                  Precisa de intervenção agora?
                </p>
                <p className="text-xs text-[#caa59c] mt-0.5">
                  Plantão 24 horas disponível para flagrantes e audiências.
                </p>
              </div>
              <a
                href={LAWYER_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-[#140409] bg-gradient-to-r from-[#edd093] to-[#c8a261] hover:brightness-110 transition-all shrink-0"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Acionar WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right: Step-by-step process */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#dfbe75] font-semibold">
                Rigor & Agilidade
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#fdfbf7] tracking-tight mt-2 [text-wrap:balance]">
                Como atuamos em situações de urgência criminal
              </h2>
              <p className="text-sm text-[#caa59c] mt-3">
                Quando a liberdade está em jogo, minutos fazem a diferença. Conheça as quatro etapas de nossa atuação protetiva:
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {WORKFLOW_STEPS.map((step, idx) => (
                <div
                  key={step.step}
                  className="p-5 rounded-xl bg-[#19050d] border border-[#c8a261]/20 hover:border-[#dfbe75]/40 transition-all flex items-start gap-5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#280814] border border-[#c8a261]/30 flex items-center justify-center shrink-0 font-display font-bold text-base text-[#f0d494] group-hover:scale-105 transition-transform shadow-inner">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#fcfaf7] group-hover:text-[#f3dfb5] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#c5aba0] mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
