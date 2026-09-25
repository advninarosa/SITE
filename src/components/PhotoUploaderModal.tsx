import React, { useRef } from 'react';
import { X, Upload, RotateCcw, Check, Image as ImageIcon, Sparkles } from 'lucide-react';
import { usePhotos, PhotosState } from '../context/PhotoContext';

export const PhotoUploaderModal: React.FC = () => {
  const { photos, updatePhoto, resetPhotos, openUploader, setOpenUploader, isCustomized } = usePhotos();

  const fileInputRefs = {
    heroPhoto: useRef<HTMLInputElement>(null),
    aboutPhoto: useRef<HTMLInputElement>(null),
    card1Photo: useRef<HTMLInputElement>(null),
    card2Photo: useRef<HTMLInputElement>(null),
    card3Photo: useRef<HTMLInputElement>(null),
  };

  if (!openUploader) return null;

  const handleFileChange = (key: keyof PhotosState, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      if (base64) {
        updatePhoto(key, base64);
      }
    };
    reader.readAsDataURL(file);
  };

  const slots = [
    {
      key: 'heroPhoto' as keyof PhotosState,
      label: 'Foto Principal (Dobra Superior / Hero)',
      recommendation: 'Recomendado: IMG_0080.jpeg (Foto de pé, blazer no ombro)',
      current: photos.heroPhoto,
    },
    {
      key: 'aboutPhoto' as keyof PhotosState,
      label: 'Foto Sobre a Advogada',
      recommendation: 'Recomendado: IMG_0088.jpeg (Sentada no sofá com tablet) ou IMG_0073.jpeg',
      current: photos.aboutPhoto,
    },
    {
      key: 'card1Photo' as keyof PhotosState,
      label: 'Foto Card 1 (Audiência de Custódia / Flagrante)',
      recommendation: 'Recomendado: IMG_0080.jpeg ou IMG_0085.jpeg',
      current: photos.card1Photo,
    },
    {
      key: 'card2Photo' as keyof PhotosState,
      label: 'Foto Card 2 (Inquérito Policial & Defesa)',
      recommendation: 'Recomendado: IMG_0088.jpeg',
      current: photos.card2Photo,
    },
    {
      key: 'card3Photo' as keyof PhotosState,
      label: 'Foto Card 3 (Tribunais & Júri)',
      recommendation: 'Recomendado: IMG_0073.jpeg (Sentada no banco) ou IMG_0087.jpeg',
      current: photos.card3Photo,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#1a050e] border border-[#c8a261]/40 rounded-2xl p-6 sm:p-8 shadow-2xl text-left max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => setOpenUploader(false)}
          className="absolute top-5 right-5 p-2 rounded-full text-[#caa59c] hover:text-white hover:bg-[#2f0815] transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-lg bg-[#300816] text-[#dfbe75] border border-[#c8a261]/30">
              <ImageIcon className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#fcfaf7]">
                Fotos do Escritório Nina Rosa
              </h3>
              <p className="text-xs text-[#dfbe75]">
                Suas fotos (IMG_0080, IMG_0073, IMG_0088...)
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#d4c1b7] leading-relaxed">
            O site já vem pré-configurado com fotos de alta resolução geradas para reproduzir com fidelidade seu ensaio oficial (morena, blazer cinza grafite, tatuagens e iluminação de estúdio). Se desejar colocar os arquivos originais exatos da sua câmera/computador (ex: <code className="text-[#f5dfab] font-mono text-xs">IMG_0080.jpeg</code>), selecione-os abaixo:
          </p>

          <div className="space-y-4 pt-2">
            {slots.map((slot) => (
              <div
                key={slot.key}
                className="p-4 rounded-xl bg-[#230713] border border-[#c8a261]/20 flex flex-col sm:flex-row items-center gap-4 justify-between"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="w-16 h-20 rounded-lg overflow-hidden border border-[#c8a261]/30 bg-[#120308] shrink-0">
                    <img
                      src={slot.current}
                      alt={slot.label}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#fcfaf7]">
                      {slot.label}
                    </h4>
                    <p className="text-[11px] text-[#caa59c] mt-0.5">
                      {slot.recommendation}
                    </p>
                  </div>
                </div>

                <div className="w-full sm:w-auto flex justify-end">
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRefs[slot.key]}
                    onChange={(e) => handleFileChange(slot.key, e)}
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRefs[slot.key].current?.click()}
                    className="w-full sm:w-auto py-2 px-3.5 rounded-lg text-xs font-semibold text-[#140409] bg-gradient-to-r from-[#edd093] to-[#c8a261] hover:brightness-110 flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer shadow-md"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Carregar Arquivo</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#c8a261]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
            {isCustomized ? (
              <button
                onClick={resetPhotos}
                className="text-xs text-[#f87171] hover:text-[#fca5a5] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restaurar Fotos Padrão do Ensaio</span>
              </button>
            ) : (
              <span className="text-[11px] text-[#10b981] flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                Fotos ativas com padrão visual de alta fidelidade
              </span>
            )}

            <button
              onClick={() => setOpenUploader(false)}
              className="w-full sm:w-auto py-2.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-[#f5efe6] bg-[#380b19] hover:bg-[#4d0f23] border border-[#c8a261]/30 transition-colors"
            >
              Concluir & Visualizar Site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
