import React, { useState } from 'react';
import { Phone, Mail, Instagram, MapPin, Clock, MessageCircle, ShieldCheck, Send } from 'lucide-react';
import { LAWYER_INFO } from '../data/firmData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*CONTATO VIA SITE - NINA ROSA ADVOCACIA*
---------------------------------------
*Nome:* ${formData.name || 'Não informado'}
*Telefone:* ${formData.phone || 'Não informado'}
*Assunto:* ${formData.subject || 'Geral'}
*Mensagem:* ${formData.message || 'Sem mensagem'}
---------------------------------------`;

    const encoded = encodeURIComponent(msg);
    const url = `https://wa.me/5534999419241?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-24 bg-[#140409] relative overflow-hidden border-t border-[#c8a261]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#dfbe75] font-semibold">
                Canais de Atendimento
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#fdfbf7] tracking-tight mt-2">
                Fale diretamente com a Dra. Nina Rosa
              </h2>
              <p className="text-xs sm:text-sm text-[#caa59c] mt-3 leading-relaxed">
                Prontidão para atendimento urgente e agendamento de consultas presenciais ou por videoconferência com total sigilo.
              </p>
            </div>

            {/* Channels list */}
            <div className="space-y-4">
              <a
                href={LAWYER_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#1d060f] border border-[#c8a261]/25 hover:border-[#dfbe75]/60 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2d0815] border border-[#c8a261]/30 flex items-center justify-center text-[#dfbe75] group-hover:scale-110 transition-transform shrink-0">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#dfbe75] font-bold block">
                    Plantão Criminal 24h & WhatsApp
                  </span>
                  <span className="font-display text-base font-bold text-[#fcfaf7]">
                    {LAWYER_INFO.phoneDisplay}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${LAWYER_INFO.phoneRaw}`}
                className="p-4 rounded-xl bg-[#1d060f] border border-[#c8a261]/25 hover:border-[#dfbe75]/60 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2d0815] border border-[#c8a261]/30 flex items-center justify-center text-[#dfbe75] group-hover:scale-110 transition-transform shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#dfbe75] font-bold block">
                    Ligação Direta de Emergência
                  </span>
                  <span className="font-display text-base font-bold text-[#fcfaf7]">
                    {LAWYER_INFO.phoneDisplay}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${LAWYER_INFO.email}`}
                className="p-4 rounded-xl bg-[#1d060f] border border-[#c8a261]/25 hover:border-[#dfbe75]/60 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2d0815] border border-[#c8a261]/30 flex items-center justify-center text-[#dfbe75] group-hover:scale-110 transition-transform shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#dfbe75] font-bold block">
                    E-mail Institucional
                  </span>
                  <span className="font-display text-base font-bold text-[#fcfaf7]">
                    {LAWYER_INFO.email}
                  </span>
                </div>
              </a>

              <a
                href={LAWYER_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#1d060f] border border-[#c8a261]/25 hover:border-[#dfbe75]/60 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2d0815] border border-[#c8a261]/30 flex items-center justify-center text-[#dfbe75] group-hover:scale-110 transition-transform shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#dfbe75] font-bold block">
                    Instagram Oficial
                  </span>
                  <span className="font-display text-base font-bold text-[#fcfaf7]">
                    {LAWYER_INFO.instagramHandle}
                  </span>
                </div>
              </a>
            </div>

            <div className="p-4 rounded-xl bg-[#250711] border border-[#c8a261]/20 flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#dfbe75] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-[#fcfaf7] block">
                  Atendimento em Todo o Brasil
                </span>
                <p className="text-[11px] text-[#caa59c] mt-0.5">
                  Base operacional no Triângulo Mineiro / Minas Gerais e atuação digital em todas as cortes brasileiras.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#1b060f] border border-[#c8a261]/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <h3 className="font-display text-2xl font-bold text-[#fdfbf7] mb-2">
                Envie uma Mensagem Direta
              </h3>
              <p className="text-xs sm:text-sm text-[#caa59c] mb-6">
                Ao preencher e clicar no botão, o formulário abrirá uma conversa privativa e segura com a Dra. Nina Rosa no WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#dfbe75] mb-1.5">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-xl bg-[#140308] border border-[#c8a261]/30 text-[#fdfbf7] placeholder-[#8d757d] text-sm focus:outline-none focus:border-[#dfbe75]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#dfbe75] mb-1.5">
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(DD) 90000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-[#140308] border border-[#c8a261]/30 text-[#fdfbf7] placeholder-[#8d757d] text-sm focus:outline-none focus:border-[#dfbe75]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#dfbe75] mb-1.5">
                    Assunto da Consulta
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Ex: Prisão em flagrante / Audiência de custódia / Inquérito policial"
                    className="w-full px-4 py-3 rounded-xl bg-[#140308] border border-[#c8a261]/30 text-[#fdfbf7] placeholder-[#8d757d] text-sm focus:outline-none focus:border-[#dfbe75]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#dfbe75] mb-1.5">
                    Mensagem / Breve Descrição
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Descreva resumidamente os fatos ou data da ocorrência para agilizar a análise preliminar..."
                    className="w-full px-4 py-3 rounded-xl bg-[#140308] border border-[#c8a261]/30 text-[#fdfbf7] placeholder-[#8d757d] text-sm focus:outline-none focus:border-[#dfbe75]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl text-sm sm:text-base font-bold uppercase tracking-wider text-[#140409] bg-gradient-to-r from-[#edd093] via-[#dfbe75] to-[#c49a4f] hover:brightness-110 active:scale-[0.99] transition-all shadow-xl shadow-[#c8a261]/25 flex items-center justify-center gap-3 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Iniciar Conversa no WhatsApp com a Advogada</span>
                  </button>
                </div>

                {submitted && (
                  <p className="text-xs text-[#10b981] text-center pt-2 font-medium">
                    ✓ Conversa iniciada com a advogada no WhatsApp.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
