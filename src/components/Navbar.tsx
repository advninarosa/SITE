import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Camera } from 'lucide-react';
import { LAWYER_INFO } from '../data/firmData';
import { Logo } from './Logo';
import { usePhotos } from '../context/PhotoContext';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setOpenUploader } = usePhotos();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#18040d]/95 backdrop-blur-md border-b border-[#c8a261]/25 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with official NR Monogram and Typography */}
          <a
            href="#"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a261]"
          >
            <Logo variant="compact" />
          </a>

          {/* Clean navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-[#d9c7bd]">
            <a
              href="#atuacao"
              className="hover:text-[#f3dfb5] transition-colors focus:outline-none focus-visible:underline"
            >
              Áreas de Atuação
            </a>
            <a
              href="#plantao-urgente"
              className="hover:text-[#f3dfb5] transition-colors focus:outline-none focus-visible:underline"
            >
              Plantão 24h
            </a>
            <a
              href="#destaques"
              className="hover:text-[#f3dfb5] transition-colors focus:outline-none focus-visible:underline"
            >
              Atuações
            </a>
            <a
              href="#sobre"
              className="hover:text-[#f3dfb5] transition-colors focus:outline-none focus-visible:underline"
            >
              Sobre a Advogada
            </a>
            <a
              href="#cartao-digital"
              className="hover:text-[#f3dfb5] transition-colors focus:outline-none focus-visible:underline"
            >
              Cartão Digital
            </a>
            <a
              href="#duvidas"
              className="hover:text-[#f3dfb5] transition-colors focus:outline-none focus-visible:underline"
            >
              Dúvidas
            </a>
          </nav>

          {/* Action buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => setOpenUploader(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-[11px] font-semibold text-[#f0d494] border border-[#c8a261]/35 hover:bg-[#320817] transition-colors cursor-pointer"
              title="Trocar fotos do site por fotos do seu computador"
            >
              <Camera className="w-3.5 h-3.5 text-[#dfbe75]" />
              <span>Suas Fotos</span>
            </button>

            <a
              href={LAWYER_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold tracking-wide uppercase text-[#140409] bg-gradient-to-r from-[#edd093] via-[#dfbe75] to-[#c49a4f] hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#c8a261]/20 whitespace-nowrap cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Plantão 24h WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#edd093] hover:bg-[#2e0915] transition-colors focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-6 border-t border-[#c8a261]/25 bg-[#1a050e]/98 backdrop-blur-xl rounded-2xl p-5 shadow-2xl space-y-4 animate-in fade-in duration-200">
            <div className="flex flex-col space-y-3 text-sm text-[#e5d4cb]">
              <a
                href="#atuacao"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-[#2b0813] hover:text-[#f3dfb5] transition-colors"
              >
                Áreas de Atuação
              </a>
              <a
                href="#plantao-urgente"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-[#2b0813] hover:text-[#f3dfb5] transition-colors"
              >
                Plantão 24h Emergencial
              </a>
              <a
                href="#destaques"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-[#2b0813] hover:text-[#f3dfb5] transition-colors"
              >
                Atuações em Destaque
              </a>
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-[#2b0813] hover:text-[#f3dfb5] transition-colors"
              >
                Sobre a Dra. Nina Rosa
              </a>
              <a
                href="#cartao-digital"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-[#2b0813] hover:text-[#f3dfb5] transition-colors"
              >
                Cartão Digital Oficial
              </a>
              <a
                href="#duvidas"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-[#2b0813] hover:text-[#f3dfb5] transition-colors"
              >
                Perguntas Frequentes
              </a>
            </div>

            <div className="pt-3 border-t border-[#c8a261]/20 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setOpenUploader(true);
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#f0d494] border border-[#c8a261]/40 bg-[#250712]"
              >
                <Camera className="w-4 h-4 text-[#dfbe75]" />
                <span>Carregar Fotos Originais</span>
              </button>

              <a
                href={LAWYER_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-wider text-[#140409] bg-gradient-to-r from-[#edd093] via-[#dfbe75] to-[#c49a4f] shadow-lg text-center"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Falar com a Advogada no WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
