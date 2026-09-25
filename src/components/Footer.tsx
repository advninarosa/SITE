import React from 'react';
import { Phone, Mail, Instagram, MessageCircle, ShieldCheck, Globe } from 'lucide-react';
import { LAWYER_INFO } from '../data/firmData';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0205] text-[#bca59a] border-t border-[#c8a261]/25 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left mb-12">
          {/* Col 1: Wordmark & Logo */}
          <div className="space-y-4">
            <Logo variant="compact" />
            <p className="text-xs text-[#a99086] leading-relaxed pt-2">
              Defesa penal técnica, estratégica e intransigente da liberdade individual. Atendimento combativo em flagrantes, custódia, inquéritos e tribunais superiores.
            </p>
            <div className="inline-block text-[11px] font-mono text-[#e7c784] px-2.5 py-1 rounded bg-[#1e050d] border border-[#c8a261]/30">
              OAB/MG nº 243.206
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#dfbe75] font-bold">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#atuacao" className="hover:text-[#f8ece4] transition-colors">
                  Áreas de Atuação Penal
                </a>
              </li>
              <li>
                <a href="#plantao-urgente" className="hover:text-[#f8ece4] transition-colors">
                  Plantão 24 Horas
                </a>
              </li>
              <li>
                <a href="#destaques" className="hover:text-[#f8ece4] transition-colors">
                  Atuações em Destaque
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#f8ece4] transition-colors">
                  Sobre a Dra. Nina Rosa
                </a>
              </li>
              <li>
                <a href="#cartao-digital" className="hover:text-[#f8ece4] transition-colors">
                  Cartão Digital Oficial
                </a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-[#f8ece4] transition-colors">
                  Dúvidas Frequentes (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Principais Atuações */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#dfbe75] font-bold">
              Urgências Criminais
            </h4>
            <ul className="space-y-2 text-xs text-[#a99086]">
              <li>Audiência de Custódia</li>
              <li>Prisão em Flagrante Delito</li>
              <li>Defesa em Inquérito Policial</li>
              <li>Habeas Corpus nos Tribunais (STJ/STF)</li>
              <li>Tribunal do Júri</li>
              <li>Execução Penal & Progressão</li>
            </ul>
          </div>

          {/* Col 4: Contato Oficial */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#dfbe75] font-bold">
              Plantão Criminal Oficial
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${LAWYER_INFO.phoneRaw}`}
                className="text-[#fcfaf7] font-semibold flex items-center gap-2 hover:text-[#dfbe75] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#dfbe75]" />
                {LAWYER_INFO.phoneDisplay}
              </a>
              <a
                href={`mailto:${LAWYER_INFO.email}`}
                className="text-[#a99086] flex items-center gap-2 hover:text-[#dfbe75] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#dfbe75]" />
                {LAWYER_INFO.email}
              </a>
              <a
                href={LAWYER_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a99086] flex items-center gap-2 hover:text-[#dfbe75] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#dfbe75]" />
                {LAWYER_INFO.instagramHandle}
              </a>
              <p className="text-[#a99086] flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#dfbe75]" />
                Atendimento on-line em todo Brasil
              </p>
              <div className="pt-2">
                <a
                  href={LAWYER_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider text-[#140409] bg-gradient-to-r from-[#edd093] to-[#c8a261] hover:brightness-110 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Plantão 24h</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar & legal disclaimer */}
        <div className="pt-8 border-t border-[#c8a261]/15 text-[11px] text-[#866e66] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} NINA ROSA ADVOCACIA E CONSULTORIA JURÍDICA · OAB/MG nº 243.206. Todos os direitos reservados.
          </p>
          <p className="max-w-xl text-[10px] text-[#715c54]">
            *Este site possui finalidade puramente informativa e educacional, em estrita conformidade com o Código de Ética e Disciplina da OAB e com o Provimento nº 205/2021 do CFOAB.
          </p>
        </div>
      </div>
    </footer>
  );
};
