import React from 'react';
import { MessageCircle, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { usePhotos } from '../context/PhotoContext';
import { LAWYER_INFO } from '../data/firmData';

export const ShowcaseCards: React.FC = () => {
  const { photos } = usePhotos();

  const cards = [
    {
      id: 'custodia',
      tag: 'ATUAÇÃO 01 · URGÊNCIA MÁXIMA',
      title: 'Prisão em Flagrante & Audiência de Custódia',
      subtitle: 'Como garantir a liberdade provisória nas primeiras horas.',
      desc: 'Atuação combativa nos momentos iniciais da prisão, entrevista reservada com o cliente na delegacia e sustentação oral presencial perante o juiz da custódia para anulação de atos ilícitos e revogação imediata da prisão.',
      photo: photos.card1Photo,
    },
    {
      id: 'inquerito',
      tag: 'ATUAÇÃO 02 · ESTRATÉGIA DEFENSIVA',
      title: 'Acompanhamento em Inquérito Policial',
      subtitle: 'Defesa preliminar para trancamento antes da denúncia.',
      desc: 'Orientação minuciosa antes de qualquer depoimento ou oitiva na Polícia Civil ou Federal. Acesso completo aos autos, acompanhamento de interrogatórios e juntada de provas defensivas para evitar indiciamento.',
      photo: photos.card2Photo,
    },
    {
      id: 'tribunais',
      tag: 'ATUAÇÃO 03 · ALTA COMPLEXIDADE',
      title: 'Habeas Corpus & Tribunais Superiores',
      subtitle: 'Sustentação oral e liminares urgentes no TJ, STJ e STF.',
      desc: 'Despacho direto com relatores e desembargadores em pedidos liminares de soltura, combate intransigente ao excesso de prazo e desconstituição de prisões preventivas ilegais perante as cortes superiores.',
      photo: photos.card3Photo,
    },
  ];

  return (
    <section id="destaques" className="py-24 bg-[#140409] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#691428]/25 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section title styled like the reference "Cronograma de aulas" */}
        <div className="max-w-3xl mx-auto mb-14 space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-[#dfbe75] font-semibold">
            Pilares de Atuação Forense
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fdfbf7] tracking-tight">
            Defesa Técnica em Cada Etapa Processual
          </h2>
          <p className="text-xs sm:text-sm text-[#caa59c] leading-relaxed">
            Conheça as três principais frentes de atuação emergencial do escritório Dra. Nina Rosa Advocacia Criminal.
          </p>
        </div>

        {/* 3 Featured Cards (Matching reference screenshot layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {cards.map((card) => (
            <div
              key={card.id}
              className="rounded-2xl overflow-hidden bg-gradient-to-b from-[#240713] via-[#1a050e] to-[#120308] border border-[#c8a261]/30 hover:border-[#dfbe75]/60 transition-all duration-300 shadow-2xl flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Lawyer Photo Header (matching reference card style with golden rim) */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#16040a]">
                  <img
                    src={card.photo}
                    alt={card.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b050f] via-transparent to-transparent opacity-90" />
                  
                  {/* Category tag over image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#7a152d]/90 text-[#fcedc7] border border-[#c8a261]/40 backdrop-blur-md">
                      {card.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#fcfaf7] group-hover:text-[#f3dfb5] transition-colors leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#dfbe75]">
                    {card.subtitle}
                  </p>

                  <p className="text-xs text-[#caa59c] leading-relaxed pt-1">
                    {card.desc}
                  </p>
                </div>
              </div>

              {/* Action Button inside card */}
              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/5534999419241?text=Ol%C3%A1%2C%20Dra.%20Nina%20Rosa.%20Preciso%20de%20atendimento%20referente%20a%3A%20${encodeURIComponent(
                    card.title
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#140409] bg-gradient-to-r from-[#edd093] via-[#dfbe75] to-[#c49a4f] hover:brightness-110 flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>CONSULTAR NO WHATSAPP</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Central Pill Button below cards (matching reference screenshot) */}
        <div className="mt-12">
          <a
            href={LAWYER_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-[#140409] bg-[#fdf2d6] hover:bg-[#fff9ea] hover:shadow-xl hover:shadow-[#c8a261]/30 active:scale-95 transition-all shadow-md cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current text-[#140409]" />
            <span>SIM, QUERO UMA CONSULTA COM A ADVOGADA</span>
          </a>
        </div>
      </div>
    </section>
  );
};
