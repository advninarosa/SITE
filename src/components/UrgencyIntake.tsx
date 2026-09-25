import React, { useState } from 'react';
import { Send, Shield, AlertTriangle, CheckCircle, MessageCircle, Phone, Lock } from 'lucide-react';
import { LAWYER_INFO } from '../data/firmData';

export const UrgencyIntake: React.FC = () => {
  const [caseType, setCaseType] = useState('flagrante');
  const [relationship, setRelationship] = useState('familiar');
  const [city, setCity] = useState('');
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');

  const caseTypes = [
    { id: 'flagrante', label: 'Prisão em Flagrante / Custódia' },
    { id: 'bens', label: 'Restituição de Bens Apreendidos' },
    { id: 'intimacao', label: 'Intimação para Depor na Delegacia' },
    { id: 'habeas', label: 'Habeas Corpus / Pedido de Soltura' },
    { id: 'execucao', label: 'Execução Penal (Progressão / SEEU)' },
    { id: 'investigacao', label: 'Defesa em Processo / Inquérito' },
    { id: 'outro', label: 'Outra Situação Penal Urgente' },
  ];

  const relationships = [
    { id: 'familiar', label: 'Para um familiar' },
    { id: 'proprio', label: 'Para mim mesmo' },
    { id: 'terceiro', label: 'Para um amigo / conhecido' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const typeLabel = caseTypes.find((c) => c.id === caseType)?.label || caseType;
    const relLabel = relationships.find((r) => r.id === relationship)?.label || relationship;

    const message = `*SOLICITAÇÃO DE ATENDIMENTO CRIMINAL - PLANTÃO 24H*
---------------------------------------
*Nome:* ${name ? name.trim() : 'Não informado'}
*Situação:* ${typeLabel}
*Atendimento:* ${relLabel}
*Cidade/Estado:* ${city ? city.trim() : 'Não especificada'}
${notes ? `*Breve resumo:* ${notes.trim()}\n` : ''}
---------------------------------------
_Solicito contato prioritário com a Dra. Nina Rosa._`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/5534999419241?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#100307] to-[#17040b] relative border-y border-[#c8a261]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-left">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c8a261]/30 bg-[#2b0813] text-[#f0d494] text-xs font-semibold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            <span>Triagem Rápida & Sigilosa</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#fdfbf7] tracking-tight">
            Encaminhe seu caso diretamente para o Plantão
          </h2>
          <p className="text-xs sm:text-sm text-[#caa59c]">
            Preencha os campos abaixo para gerar um resumo imediato e falar com a Dra. Nina Rosa no WhatsApp com prioridade de atendimento.
          </p>
        </div>

        <div className="bg-[#1e0711] border border-[#c8a261]/35 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Tipo de Situação */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#dfbe75] mb-2.5">
                1. Qual é a situação atual do caso?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {caseTypes.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setCaseType(item.id)}
                    className={`py-3 px-3.5 rounded-xl text-xs font-medium text-left transition-all border ${
                      caseType === item.id
                        ? 'bg-[#3b0b1a] text-[#fbf6f0] border-[#dfbe75] shadow-md shadow-[#c8a261]/15 font-semibold'
                        : 'bg-[#15040a] text-[#cbb8ad] border-[#c8a261]/20 hover:border-[#c8a261]/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Para quem é */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#dfbe75] mb-2.5">
                2. Para quem é o atendimento?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {relationships.map((rel) => (
                  <button
                    type="button"
                    key={rel.id}
                    onClick={() => setRelationship(rel.id)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-medium text-center transition-all border ${
                      relationship === rel.id
                        ? 'bg-[#3b0b1a] text-[#fbf6f0] border-[#dfbe75] font-semibold'
                        : 'bg-[#15040a] text-[#cbb8ad] border-[#c8a261]/20 hover:border-[#c8a261]/50'
                    }`}
                  >
                    {rel.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Informações do contato */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#dfbe75] mb-1.5">
                  Seu Nome
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Carlos Silva"
                  className="w-full px-4 py-3 rounded-xl bg-[#140309] border border-[#c8a261]/30 text-[#fdfbf7] placeholder-[#8d757d] text-sm focus:outline-none focus:border-[#dfbe75] focus:ring-1 focus:ring-[#dfbe75]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#dfbe75] mb-1.5">
                  Cidade / Estado
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Ex: Uberlândia / MG"
                  className="w-full px-4 py-3 rounded-xl bg-[#140309] border border-[#c8a261]/30 text-[#fdfbf7] placeholder-[#8d757d] text-sm focus:outline-none focus:border-[#dfbe75] focus:ring-1 focus:ring-[#dfbe75]"
                />
              </div>
            </div>

            {/* Step 4: Breve resumo */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#dfbe75] mb-1.5">
                Resumo Opcional (sem expor detalhes sigilosos)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                placeholder="Ex: Ocorrência na data de hoje; audiência de custódia prevista para amanhã."
                className="w-full px-4 py-3 rounded-xl bg-[#140309] border border-[#c8a261]/30 text-[#fdfbf7] placeholder-[#8d757d] text-sm focus:outline-none focus:border-[#dfbe75] focus:ring-1 focus:ring-[#dfbe75]"
              />
            </div>

            {/* Alert & Submit button */}
            <div className="p-3.5 rounded-xl bg-[#280814] border border-[#c8a261]/20 flex items-start gap-3">
              <Lock className="w-4 h-4 text-[#dfbe75] shrink-0 mt-0.5" />
              <p className="text-[11px] text-[#caa59c] leading-relaxed">
                Todas as informações são estritamente confidenciais e protegidas pelo sigilo legal entre advogado e cliente (Art. 7º, II da Lei 8.906/94).
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 rounded-xl text-sm sm:text-base font-bold uppercase tracking-wider text-[#140409] bg-gradient-to-r from-[#edd093] via-[#dfbe75] to-[#c49a4f] hover:brightness-110 active:scale-[0.99] transition-all shadow-xl shadow-[#c8a261]/25 flex items-center justify-center gap-3 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Enviar Caso e Falar no WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
