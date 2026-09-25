import React from 'react';
import { MessageCircle, Phone, ShieldCheck, Scale, Clock, Award, Camera } from 'lucide-react';
import { LAWYER_INFO } from '../data/firmData';
import { usePhotos } from '../context/PhotoContext';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  const { photos, setOpenUploader } = usePhotos();

  return (
    <section className="relative min-h-[95vh] flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#18040d] via-[#1f0511] to-[#120308]">
      {/* Rich ambient golden and wine glows reminiscent of reference site */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-gradient-to-tr from-[#7c1432]/40 via-[#caa45d]/20 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute -top-24 -left-20 w-96 h-96 bg-[#5c0d23]/35 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#420a1a]/30 blur-[130px] pointer-events-none rounded-full" />

      {/* Subtle fine geometric decorative lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs aligned with reference design */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Kicker Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#c8a261]/35 bg-[#2b0714]/70 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#f0d494]">
                PLANTÃO CRIMINAL 24H · OAB/MG 243.206
              </span>
            </div>

            {/* Headline with Reference Typography Style */}
            <div className="space-y-1">
              <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#dfbe75]">
                DEFESA PENAL DE ALTA PERFORMANCE
              </p>
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#fdfbf7] leading-[1.12] [text-wrap:balance]">
                Advocacia Criminal <br className="hidden sm:inline" />
                <span className="font-editorial italic font-normal text-gold-gradient text-4xl sm:text-6xl lg:text-7xl block sm:inline">
                  estratégica e combativa.
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#d8c5bc] leading-relaxed max-w-2xl font-normal">
              Atuação imediata e intransigente em <strong className="text-[#f7e7c4] font-medium">prisões em flagrante</strong>,{' '}
              <strong className="text-[#f7e7c4] font-medium">audiências de custódia</strong>, inquéritos policiais e sustentações orais perante os Tribunais de Justiça e Tribunais Superiores (STJ e STF).
            </p>

            {/* Primary Action Button (Inspired by reference banner) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={LAWYER_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm sm:text-base font-bold uppercase tracking-wider text-[#140409] bg-gradient-to-r from-[#f0d494] via-[#dfbe75] to-[#c8a261] hover:brightness-110 active:scale-[0.98] transition-all duration-200 shadow-xl shadow-[#c8a261]/25 text-center cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current text-[#140409]" />
                <span>QUERO GARANTIR MINHA DEFESA</span>
              </a>

              <a
                href={`tel:${LAWYER_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#f0d494] border border-[#c8a261]/40 bg-[#230611]/70 hover:bg-[#380b18] hover:border-[#dfbe75] transition-all active:scale-[0.98] text-center"
              >
                <Phone className="w-4 h-4 text-[#dfbe75]" />
                <span>Ligar: {LAWYER_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* 100% Online & Certificado / Sigilo Banner */}
            <div className="pt-1">
              <p className="text-xs uppercase tracking-[0.25em] text-[#caa59c] font-medium">
                100% SIGILO E SEGURANÇA · ATENDIMENTO EM TODO O BRASIL
              </p>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-6 border-t border-[#c8a261]/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#c9b4a9]">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#dfbe75] shrink-0" />
                <span>Plantão 24h Ininterrupto</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#dfbe75] shrink-0" />
                <span>Sigilo Profissional Absoluto</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Scale className="w-4 h-4 text-[#dfbe75] shrink-0" />
                <span>Atuação em Todo o Brasil</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[#dfbe75] shrink-0" />
                <span>OAB/MG nº 243.206</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dra. Nina Rosa Photo Container */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer Golden/Marsala Halo */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-b from-[#e5c07b]/40 via-[#8a1c36]/50 to-[#2e0914]/80 blur-sm" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#c8a261]/40 bg-[#1f0710] shadow-2xl group">
                <img
                  src={photos.heroPhoto}
                  alt="Dra. Nina Rosa - Advogada Criminalista OAB/MG 243.206"
                  className="w-full h-[470px] sm:h-[550px] object-cover object-top hover:scale-[1.02] transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle gradient scrim at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#140409] via-transparent to-transparent opacity-85 pointer-events-none" />

                {/* Quick button to customize photo */}
                <button
                  onClick={() => setOpenUploader(true)}
                  className="absolute top-3.5 right-3.5 py-1.5 px-2.5 rounded-lg bg-[#14040a]/80 backdrop-blur-md border border-[#c8a261]/35 text-[10px] font-semibold text-[#f0d494] hover:bg-[#2b0813] transition-colors flex items-center gap-1.5 z-20 cursor-pointer"
                  title="Substituir por arquivo local"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Trocar Foto</span>
                </button>

                {/* Floating Law Firm Seal Overlay on bottom */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#1a050e]/90 backdrop-blur-md border border-[#c8a261]/30 text-left shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-widest text-[#dfbe75] font-semibold">
                        Dra. Nina Rosa
                      </p>
                      <p className="font-display text-sm font-bold text-[#fcfaf7]">
                        Advogada Criminalista
                      </p>
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2 py-1 rounded bg-[#320a16] border border-[#c8a261]/30 text-[#e9cca0]">
                      OAB/MG 243.206
                    </span>
                  </div>
                  <p className="text-[11px] text-[#caa79b] mt-1.5 leading-snug">
                    Defesa estratégica especializada em restituição de liberdades, bens apreendidos, inquéritos e tribunais superiores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
