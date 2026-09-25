export interface PracticeArea {
  id: string;
  title: string;
  category: 'urgency' | 'defense' | 'tribunals' | 'execution';
  shortDesc: string;
  fullDesc: string;
  urgencyLevel: 'Alta' | 'Crítica' | 'Estratégica';
  actions: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CaseOutcome {
  tag: string;
  outcome: string;
  context: string;
  citation: string;
}

export const LAWYER_INFO = {
  name: 'Dra. Nina Rosa',
  firmName: 'NINA ROSA',
  tagline: 'ADVOCACIA E CONSULTORIA JURÍDICA',
  title: 'Advogada Criminalista',
  oab: 'OAB/MG 243.206',
  phoneDisplay: '(34) 99941-9241',
  phoneRaw: '5534999419241',
  whatsappUrl: 'https://wa.me/5534999419241?text=Ol%C3%A1%2C%20Dra.%20Nina%20Rosa.%20Preciso%20de%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20criminal%20urgente.',
  email: 'advninarosa@gmail.com',
  instagramHandle: '@adv.ninarosa',
  instagramUrl: 'https://www.instagram.com/adv.ninarosa',
  cityRegion: 'Minas Gerais & Atendimento Nacional',
  availability: 'Plantão Criminal 24 Horas',
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'flagrante-custodia',
    title: 'Prisão em Flagrante & Audiência de Custódia',
    category: 'urgency',
    urgencyLevel: 'Crítica',
    shortDesc: 'Atuação combativa nos primeiros instantes da prisão para evitar abusos e buscar a imediata soltura perante o juiz.',
    fullDesc: 'As primeiras 24 horas são decisivas. Realizamos intervenção na delegacia, contato reservado com o detido, verificação de legalidade da abordagem e atuação enérgica na audiência de custódia para obtenção de liberdade provisória ou revogação de prisão ilegal.',
    actions: ['Plantão 24h na delegacia', 'Audiência de custódia presencial e online', 'Pedido de relaxamento de prisão ilegal', 'Concessão de liberdade provisória sem fiança'],
  },
  {
    id: 'inquerito-policial',
    title: 'Acompanhamento em Inquérito Policial',
    category: 'defense',
    urgencyLevel: 'Alta',
    shortDesc: 'Defesa preliminar perante a Polícia Civil e Federal para evitar o indiciamento e a deflagração de ação penal indevida.',
    fullDesc: 'A melhor defesa criminal começa na fase investigativa. Acompanhamos oitivas e interrogatórios, postulamos diligências defensivas, garantimos o direito ao silêncio sem prejuízo e atuamos para o arquivamento das investigações antes do oferecimento da denúncia.',
    actions: ['Acompanhamento de depoimentos e interrogatórios', 'Acesso integral aos autos de investigação', 'Requerimento de diligências e perícias', 'Prevenção de medidas cautelares e buscas'],
  },
  {
    id: 'habeas-corpus',
    title: 'Habeas Corpus & Recursos Urgentes',
    category: 'tribunals',
    urgencyLevel: 'Crítica',
    shortDesc: 'Medida constitucional ágil contra prisões ilegais, excesso de prazo e constrangimentos ilícitos da liberdade.',
    fullDesc: 'Impetração de Habeas Corpus perante os Tribunais de Justiça estaduais (TJMG e outros), Tribunais Regionais Federais (TRFs), Superior Tribunal de Justiça (STJ) e Supremo Tribunal Federal (STF), com sustentação oral combativa e pedido de liminar imediata.',
    actions: ['Pedido liminar de soltura urgente', 'Combate ao excesso de prazo na instrução', 'Trancamento de ação penal por falta de justa causa', 'Despacho presencial com relatores e desembargadores'],
  },
  {
    id: 'crimes-economicos',
    title: 'Direito Penal Econômico & Fraudes',
    category: 'defense',
    urgencyLevel: 'Estratégica',
    shortDesc: 'Defesa especializada em crimes contra o sistema financeiro, ordem tributária, lavagem de dinheiro e estelionato.',
    fullDesc: 'Atuação técnica e minuciosa na análise contábil, financeira e probatória. Desconstrução de acusações genéricas, garantia de legalidade na quebra de sigilo bancário e fiscal, e celebração de Acordo de Não Persecução Penal (ANPP) quando cabível.',
    actions: ['Defesa em crimes tributários e societários', 'Combate a bloqueios indevidos de bens e contas', 'Acordo de Não Persecução Penal (ANPP)', 'Consultoria preventiva criminal para empresários'],
  },
  {
    id: 'trafico-drogas',
    title: 'Tráfico de Drogas & Crimes Patrimoniais',
    category: 'defense',
    urgencyLevel: 'Alta',
    shortDesc: 'Análise minuciosa de nulidades em abordagens policiais, invasão de domicílio sem mandado e quebra da cadeia de custódia.',
    fullDesc: 'Atuação técnica para demonstrar violações a direitos constitucionais durante abordagens, busca domiciliar sem justa causa, desclassificação de tráfico para posse de uso pessoal ou aplicação da minorante de tráfico privilegiado com consequente liberdade.',
    actions: ['Arguição de nulidade por invasão de domicílio', 'Desclassificação para usuário (Art. 28)', 'Aplicação de tráfico privilegiado', 'Revogação de prisão preventiva'],
  },
  {
    id: 'tribunal-do-juri',
    title: 'Tribunal do Júri (Crimes Dolosos Contra a Vida)',
    category: 'tribunals',
    urgencyLevel: 'Estratégica',
    shortDesc: 'Atuação perante o Conselho de Sentença com preparação técnica, oratória persuasiva e defesa da dignidade humana.',
    fullDesc: 'Condução completa da primeira fase (instrução preliminar com oitivas de testemunhas e busca pela impronúncia/desclassificação) e da sessão plenária de julgamento perante os jurados, com oratória firme, conhecimento forense e fidelidade à prova dos autos.',
    actions: ['Defesa na 1ª fase (busca de impronúncia/absolvição sumária)', 'Sustentação oral combativa em plenário do júri', 'Preparação psicológica e técnica do acusado', 'Recursos em caso de decisão contrária às provas'],
  },
  {
    id: 'execucao-penal',
    title: 'Execução Penal & Cumprimento de Pena',
    category: 'execution',
    urgencyLevel: 'Alta',
    shortDesc: 'Fiscalização rigorosa do cumprimento de pena, cálculo minucioso de benefícios e preservação da dignidade do apenado.',
    fullDesc: 'Análise completa da Guia de Recolhimento e do processo de execução penal (SEEU). Pedidos ágeis de progressão de regime (fechado para semiaberto, semiaberto para aberto), livramento condicional, remição de pena por estudo/trabalho e transferências.',
    actions: ['Progressão de regime e saída temporária', 'Cálculo de remição por trabalho e leitura', 'Livramento condicional', 'Transferência de estabelecimento prisional'],
  },
  {
    id: 'restituicao-bens',
    title: 'Restituição de Bens Apreendidos & Desbloqueio',
    category: 'urgency',
    urgencyLevel: 'Alta',
    shortDesc: 'Medidas judiciais para liberação de veículos, celulares, quantias financeiras e bens apreendidos ilegalmente.',
    fullDesc: 'Atuação célere por meio de incidente de restituição de coisas apreendidas e mandado de segurança para comprovar a origem lícita e a propriedade de bens constritos, bem como desbloqueio de contas e ativos financeiros atingidos por medidas cautelares.',
    actions: ['Incidente de restituição de coisa apreendida', 'Liberação de veículos e celulares apreendidos', 'Desbloqueio de contas bancárias e ativos', 'Mandado de segurança contra apreensão ilegal'],
  },
  {
    id: 'consultoria-preventiva',
    title: 'Consultoria Penal Preventiva & Compliance',
    category: 'defense',
    urgencyLevel: 'Estratégica',
    shortDesc: 'Orientação preventiva para mitigar riscos de responsabilização criminal antes do surgimento de qualquer inquérito.',
    fullDesc: 'Análise antecipada de condutas corporativas e individuais, pareceres jurídicos para respaldar decisões de alto impacto e preparação de diretores e colaboradores em relação às normas de direito penal econômico e ambiental.',
    actions: ['Pareceres e análises de risco penal', 'Treinamento de postura perante fiscalizações', 'Mitigação de exposição criminal em negócios', 'Auditoria de compliance criminal'],
  },
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Contato Imediato 24h',
    desc: 'Atendimento direto com a advogada por WhatsApp ou ligação de emergência para relatar o que aconteceu sem intermediários.',
  },
  {
    step: '02',
    title: 'Diagnóstico & Ação Imediata',
    desc: 'Verificação em tempo real do paradeiro do detido, do número do inquérito ou da ordem de prisão junto à delegacia e sistemas judiciais.',
  },
  {
    step: '03',
    title: 'Intervenção no Local ou nos Autos',
    desc: 'Deslocamento até a delegacia ou presídio, entrevista reservada com o cliente e protocolo imediato do pedido de liberdade cabível.',
  },
  {
    step: '04',
    title: 'Defesa Contínua & Transparência',
    desc: 'Acompanhamento irrestrito em todas as instâncias judiciais com relatórios constantes para a família e sigilo absoluto.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Um familiar foi preso agora. Qual o primeiro passo que devo tomar?',
    answer: 'Entre em contato imediatamente com uma advogada criminalista pelo nosso plantão 24h. O detido não deve prestar nenhum depoimento sem a presença de sua defesa e tem direito constitucional de permanecer em silêncio. Nós nos deslocamos até a delegacia para garantir sua integridade física, conversar de forma reservada e traçar a estratégia antes do termo de declaração.',
  },
  {
    question: 'O que é a Audiência de Custódia e por que ela é tão importante?',
    answer: 'A audiência de custódia ocorre em até 24 horas após a prisão em flagrante. Nela, o juiz avalia a legalidade da prisão e se há necessidade real de convertê-la em preventiva ou se o acusado pode responder em liberdade (liberdade provisória com ou sem medidas cautelares). É o momento de ouro da defesa para evitar o encarceramento provisório prolongado.',
  },
  {
    question: 'Recebi uma intimação da Polícia Civil ou Federal para depor. Devo ir sozinho?',
    answer: 'Nunca compareça a uma delegacia sem a orientação e o acompanhamento de uma advogada especialista. Mesmo sendo intimado na condição de "testemunha", a situação pode mudar rapidamente para investigado. A advogada tem o direito de acessar o inquérito antes do depoimento para que você saiba exatamente o teor da acusação.',
  },
  {
    question: 'A Dra. Nina Rosa atende em outras cidades e estados fora de Minas Gerais?',
    answer: 'Sim. Graças à digitalização completa dos tribunais brasileiros (PJe, SEEU, e-STJ e e-STF), atuamos em audiências virtuais, inquéritos e recursos criminais em todo o território nacional. Em casos de flagrante ou júri presencial, há atuação direta na região do Triângulo Mineiro e disponibilidade para deslocamentos sob demanda.',
  },
  {
    question: 'Como funciona o sigilo e a privacidade das informações que compartilho?',
    answer: 'O sigilo profissional entre cliente e advogado é uma garantia inviolável protegida pelo Estatuto da OAB (Lei 8.906/94) e pelo Código de Processo Penal. Todas as conversas, documentos e estratégias são estritamente confidenciais e jamais serão divulgados a terceiros ou autoridades.',
  },
  {
    question: 'O que fazer se a prisão for decorrente de busca e apreensão na minha casa?',
    answer: 'A busca domiciliar exige mandado judicial específico ou justificativa inequívoca de flagrante delito sob fundadas razões. Caso os policiais tenham entrado sem autorização legal ou sem seu consentimento válido, todas as provas coletadas podem ser anuladas. Registre o contato da advogada para intervenção imediata.',
  },
];

export const SUCCESS_CASES: CaseOutcome[] = [
  {
    tag: 'Flagrante Delito / Audiência de Custódia',
    outcome: 'Liberdade Provisória Concedida',
    context: 'Acusação de porte e posse, com demonstração de desproporcionalidade da prisão preventiva e fixação de medidas cautelares diversas.',
    citation: 'Decisão proferida em sede de Audiência de Custódia',
  },
  {
    tag: 'Inquérito Policial / Defesa Preliminar',
    outcome: 'Arquivamento sem Denúncia',
    context: 'Atuação antecipada com juntada de provas defensivas e perícias documentais que comprovaram a atipicidade da conduta antes do relatório policial.',
    citation: 'Procedimento Investigatório Criminal Preliminar',
  },
  {
    tag: 'Habeas Corpus / Tribunal de Justiça',
    outcome: 'Anulação de Prova Ilícita',
    context: 'Demonstração de invasão de domicílio sem mandado judicial e sem fundadas razões, resultando no trancamento da ação penal e soltura imediata.',
    citation: 'Ordem de Habeas Corpus concedida por unanimidade',
  },
  {
    tag: 'Execução Penal / Vara de Execuções',
    outcome: 'Progressão ao Regime Aberto & Remição',
    context: 'Recálculo detalhado da liquidação de penas com inclusão de dias remidos por cursos e trabalho, antecipando o livramento condicional.',
    citation: 'Processo no Sistema Eletrônico de Execução Unificado (SEEU)',
  },
];
