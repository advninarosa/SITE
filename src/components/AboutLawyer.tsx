import React from 'react';
import { Award, ShieldCheck, Scale, Instagram, MessageCircle, Mail, MapPin, Camera } from 'lucide-react';
import { LAWYER_INFO } from '../data/firmData';
import { usePhotos } from '../context/PhotoContext';

export const AboutLawyer: React.FC = () => {
  const { photos, setOpenUploader } = usePhotos();

  return (
    <section id="sobre" className="py-24 bg-[#140409] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#611225]/20 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Dra. Nina Rosa Photo (Matching reference style "Quem é...") */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#c8a261]/40 via-[#801831]/40 to-transparent blur-md" />
              
              <div className="relative rounded-2xl overflow-hidden border border-[#c8a261]/35 bg-[#1b060e] shadow-2xl group">
                <img
                  src={photos.aboutPhoto}
                  alt="Dra. Nina Rosa - Advogada Criminalista OAB/MG 243.206"
                  className="w-full h-[470px] sm:h-[530px] object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#140409] via-transparent to-transparent opacity-80" />

                {/* Quick button to replace photo */}
                <button
                  onClick={() => setOpenUploader(true)}
                  className="absolute top-3.5 right-3.5 py-1.5 px-2.5 rounded-lg bg-[#14040a]/80 backdrop-blur-md border border-[#c8a261]/35 text-[10px] font-semibold text-[#f0d494] hover:bg-[#2b0813] transition-colors flex items-center gap-1.5 z-20 cursor-pointer"
                  title="Substituir por arquivo local"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Trocar Foto</span>
                </button>

                {/* Bottom credentials bar on photo */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#18040b]/90 backdrop-blur-md border border-[#c8a261]/25 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display text-sm font-bold text-[#fcfaf7]">
                        Dra. Nina Rosa
                      </h4>
                      <p className="text-[11px] text-[#dfbe75] font-medium">
                        OAB/MG nº 243.206
                      </p>
                    </div>
                    <a
                      href={LAWYER_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2c0814] text-[11px] font-semibold text-[#f0d494] border border-[#c8a261]/30 hover:bg-[#3d0b1b] transition-colors"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>@adv.ninarosa</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bio and Philosophy (Structured like reference "Quem é Monaliza Krepe") */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-left space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#dfbe75] font-semibold">
                Perfil Profissional
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fdfbf7] tracking-tight mt-2 uppercase">
                Quem é Dra. Nina Rosa
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#d1bcb2] leading-relaxed">
              <p>
                A <strong className="text-[#f7e7c4] font-semibold">Dra. Nina Rosa</strong> é advogada criminalista inscrita na Ordem dos Advogados do Brasil sob o número <strong className="text-[#f7e7c4] font-semibold">OAB/MG 243.206</strong>, especializada na defesa estratégica e combativa da liberdade individual.
              </p>
              <p>
                Com uma atuação focada em <strong className="text-[#f7e7c4] font-medium">urgências penais, audiências de custódia, inquéritos policiais e sustentações perante os Tribunais de Justiça e Tribunais Superiores</strong>, seu trabalho combina conhecimento técnico profundo, vigilância absoluta contra abusos de autoridade e atendimento humanizado.
              </p>
              <p>
                Seu propósito é assegurar que nenhum cidadão seja privado de seus direitos constitucionais sem a mais rigorosa e intransigente defesa técnica da lei.
              </p>
            </div>

            {/* Badges with thin golden borders (Matching reference screenshot bottom badge style) */}
            <div className="space-y-2.5 pt-2">
              <div className="py-2.5 px-4 rounded-full border border-[#c8a261]/35 bg-[#200611] inline-flex items-center gap-3 text-xs text-[#eed5a5] font-semibold">
                <Award className="w-4 h-4 text-[#dfbe75]" />
                <span>INSCRIÇÃO REGULAR OAB/MG Nº 243.206</span>
              </div>
              <br />
              <div className="py-2.5 px-4 rounded-full border border-[#c8a261]/35 bg-[#200611] inline-flex items-center gap-3 text-xs text-[#eed5a5] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#dfbe75]" />
                <span>PLANTÃO CRIMINAL 24 HORAS PARA FLAGRANTES E CUSTÓDIA</span>
              </div>
              <br />
              <div className="py-2.5 px-4 rounded-full border border-[#c8a261]/35 bg-[#200611] inline-flex items-center gap-3 text-xs text-[#eed5a5] font-semibold">
                <Scale className="w-4 h-4 text-[#dfbe75]" />
                <span>ATUAÇÃO ON-LINE EM TODO O BRASIL & PRESENCIAL EM MG</span>
              </div>
            </div>

            {/* Pill CTA button matching reference screenshot */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={LAWYER_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-[#140409] bg-[#fdf2d6] hover:bg-[#fff9ea] hover:shadow-xl hover:shadow-[#c8a261]/30 active:scale-95 transition-all shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current text-[#140409]" />
                <span>SIM, QUERO UMA CONSULTA COM A ADVOGADA</span>
              </a>

              <a
                href={LAWYER_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-4 rounded-full text-xs font-semibold text-[#f0d494] border border-[#c8a261]/35 hover:bg-[#250711] transition-all"
              >
                <Instagram className="w-4 h-4 text-[#dfbe75]" />
                <span>Instagram: {LAWYER_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
