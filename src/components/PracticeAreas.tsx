import React, { useState } from 'react';
import { Shield, ArrowRight, Gavel, Scale, Lock, FileCheck, CheckCircle2, X, MessageCircle } from 'lucide-react';
import { PRACTICE_AREAS, PracticeArea, LAWYER_INFO } from '../data/firmData';

export const PracticeAreas: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalArea, setActiveModalArea] = useState<PracticeArea | null>(null);

  const categories = [
    { id: 'all', label: 'Todas as Áreas' },
    { id: 'urgency', label: 'Flagrantes & Custódia' },
    { id: 'defense', label: 'Defesa & Inquéritos' },
    { id: 'tribunals', label: 'Tribunais & Júri' },
    { id: 'execution', label: 'Execução Penal' },
  ];

  const filteredAreas = selectedCategory === 'all'
    ? PRACTICE_AREAS
    : PRACTICE_AREAS.filter((area) => area.category === selectedCategory);

  const getUrgencyBadge = (level: string) => {
    switch (level) {
      case 'Crítica':
        return 'text-[#f87171] border-[#ef4444]/30 bg-[#450a0a]/50';
      case 'Alta':
        return 'text-[#fbbf24] border-[#f59e0b]/30 bg-[#451a03]/50';
      default:
        return 'text-[#dfbe75] border-[#c8a261]/30 bg-[#291703]/50';
    }
  };

  return (
    <section id="atuacao" className="py-24 bg-[#140409] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#4d0c1e]/20 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2b0813]/30 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-[#dfbe75] font-semibold">
            Especialidades Jurídicas Criminais
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fdfbf7] tracking-tight [text-wrap:balance]">
            Atuação técnica, estratégica e intransigente em todas as fases penais.
          </h2>
          <p className="text-sm sm:text-base text-[#d1bcb2] leading-relaxed">
            Cada fase da persecução penal exige uma abordagem sob medida. Da prisão em flagrante ao Superior Tribunal de Justiça, atuamos para garantir que seus direitos fundamentais sejam rigorosamente respeitados.
          </p>

          {/* Interactive filter tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-[#e0be75] to-[#c8a261] text-[#140409] shadow-md shadow-[#c8a261]/20 font-bold'
                    : 'bg-[#220710] text-[#cbb8ad] hover:text-[#f8ece4] hover:bg-[#320b18] border border-[#c8a261]/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAreas.map((area, index) => (
            <div
              key={area.id}
              className="glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col justify-between text-left group"
            >
              <div>
                {/* Header row inside card */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs text-[#dfbe75]/70 font-semibold">
                    0{index + 1}.
                  </span>
                  <span
                    className={`text-[11px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${getUrgencyBadge(
                      area.urgencyLevel
                    )}`}
                  >
                    Prioridade {area.urgencyLevel}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#fcfaf7] group-hover:text-[#f3dfb5] transition-colors mb-3 leading-snug">
                  {area.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#caa59c] leading-relaxed mb-5">
                  {area.shortDesc}
                </p>

                {/* Key actions */}
                <div className="space-y-2 border-t border-[#c8a261]/15 pt-4 mb-6">
                  {area.actions.slice(0, 3).map((act, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#e1d0c7]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#dfbe75] shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => setActiveModalArea(area)}
                  className="flex-1 text-center py-2.5 px-3 rounded-lg text-xs font-semibold text-[#f3dfb5] bg-[#290814] hover:bg-[#3d0d1e] border border-[#c8a261]/30 transition-colors"
                >
                  Ver Detalhes
                </button>
                <a
                  href={`https://wa.me/5534999419241?text=Ol%C3%A1%2C%20Dra.%20Nina%20Rosa.%20Preciso%20de%20atendimento%20referente%20a%3A%20${encodeURIComponent(
                    area.title
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg text-xs font-bold text-[#140409] bg-gradient-to-r from-[#edd093] to-[#c8a261] hover:brightness-110 transition-all flex items-center justify-center gap-1.5"
                  title="Falar no WhatsApp sobre este assunto"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Atendimento</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal with Full Practice Area Details */}
      {activeModalArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#1d060f] border border-[#c8a261]/40 rounded-2xl p-6 sm:p-8 shadow-2xl text-left overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setActiveModalArea(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#cbb8ad] hover:text-white hover:bg-[#340b19] transition-colors"
              aria-label="Fechar detalhes"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="inline-block text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-full border border-[#c8a261]/40 text-[#f0d494] bg-[#2a0714]">
                Atuação Especializada Criminal
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#fdfbf7]">
                {activeModalArea.title}
              </h3>

              <div className="p-4 rounded-xl bg-[#2a0815] border border-[#c8a261]/20">
                <p className="text-sm text-[#f5dfab] font-medium leading-relaxed">
                  {activeModalArea.shortDesc}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#dfbe75] font-bold mb-2">
                  Estratégia e Atuação Prática
                </h4>
                <p className="text-sm text-[#d4c1b7] leading-relaxed">
                  {activeModalArea.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#dfbe75] font-bold mb-3">
                  Principais Medidas Defensivas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalArea.actions.map((act, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-[#240611] border border-[#c8a261]/15 flex items-start gap-2.5 text-xs text-[#eae0d8]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#dfbe75] shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to action inside modal */}
              <div className="pt-4 border-t border-[#c8a261]/20 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/5534999419241?text=Ol%C3%A1%2C%20Dra.%20Nina%20Rosa.%20Preciso%20de%20orienta%C3%A7%C3%A3o%20especializada%20sobre%20o%20caso%20de%3A%20${encodeURIComponent(
                    activeModalArea.title
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#140409] bg-gradient-to-r from-[#edd093] via-[#dfbe75] to-[#c49a4f] text-center flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Falar com a Dra. Nina Rosa no WhatsApp</span>
                </a>
                <button
                  onClick={() => setActiveModalArea(null)}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl text-xs font-semibold text-[#caa59c] hover:bg-[#2b0813] transition-colors"
                >
                  Voltar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
