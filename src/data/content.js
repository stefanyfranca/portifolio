export const NAV_LINKS = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'pesquisa', label: 'Pesquisa' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'formacao', label: 'Formação' },
  { id: 'contato', label: 'Contato' },
]

export const ROLES = [
  'Cientista de Dados',
  'Pesquisadora em IA',
  'Analista de BI',
  'Engenheira de Dados',
  'Consultora Estatística',
]

export const CONTACT = {
  location: 'Cocal do Sul — SC, Brasil',
  phone: '(48) 99626-0944',
  email: 'stefany.030506@gmail.com',
  github: 'https://github.com/stefanyfranca',
  githubHandle: 'stefanyfranca',
  linkedin: 'https://www.linkedin.com/in/stefany-frança-0b62b4269',
  cv: 'curriculo.pdf',
}

export const STATS = [
  { value: 1.5, decimals: 1, suffix: '+', label: 'Anos em dados & suporte técnico' },
  { value: 3, decimals: 0, suffix: '+', label: 'Áreas de atuação (DS, BI, pesquisa)' },
  { value: 4, decimals: 0, suffix: '+', label: 'Cursos complementares' },
  { value: 2, decimals: 0, suffix: '', label: 'Idiomas falados' },
]

export const ABOUT = [
  'Desenvolvedora e pesquisadora com foco em Data Science e Inteligência Artificial, atuando em projetos estratégicos na parceria Mohawk Brasil / UNESC.',
  'Experiência sólida em suporte técnico de sistemas complexos, com foco em diagnóstico de falhas e análise de dados. Atualmente aprofunda competências em métodos estatísticos aplicados e modelagem computacional.',
  'Fluente em Inglês e estudante de Alemão — comunicando com clareza métricas de negócio e resultados científicos para públicos técnicos e executivos.',
]

export const EXPERIENCE = [
  {
    role: 'Data Scientist & AI',
    period: 'fev 2026 — presente',
    company: 'Mohawk Brasil / UNESC · Criciúma',
    points: [
      'Desenvolvimento de pipelines de dados para suporte a aplicações de Inteligência Artificial voltadas ao Business Intelligence.',
      'Extração, tratamento e modelagem de dados para alimentação de assistente virtual baseado em IA, focado em responder métricas de negócio em tempo real.',
      'Geração de insights estratégicos e dashboards para apresentação de resultados a stakeholders, unindo demandas da indústria com métodos quantitativos.',
      'Atuação na arquitetura de dados, garantindo a integridade e a fluidez da informação desde a origem até o consumo final pela aplicação de IA.',
    ],
    stack: ['Python', 'SQL', 'Power BI', 'IA / LLM', 'Pipelines'],
  },
  {
    role: 'Suporte Técnico Pleno II',
    period: 'dez 2024 — fev 2026',
    company: 'Next Fit · Criciúma',
    points: [
      'Atendimento e resolução de problemas técnicos relacionados ao sistema Next Fit.',
      'Diagnóstico e solução de falhas em hardware e software.',
      'Documentação de atendimentos e colaboração com a equipe de desenvolvimento.',
      'Treinamento de usuários para otimização das ferramentas.',
    ],
    stack: ['Suporte N2', 'Diagnóstico', 'Docs Técnicas', 'Treinamento'],
  },
]

export const RESEARCH = [
  {
    role: 'Pesquisadora Voluntária e Consultora Estatística',
    period: 'fev 2026 — presente',
    company: 'Laboratório de Estatística e Métodos Quantitativos — UNESC (GPMEQ)',
    points: [
      'Consultoria estatística para a área da saúde: suporte direto a pesquisadores do curso de Medicina da UNESC, realizando análise de dados e validação de hipóteses.',
      'Análise multivariada e modelagem: utilização de Python e R, além de softwares como SPSS e Excel, para o processamento de bases de dados acadêmicas e científicas.',
      'Auxílio no ciclo de pesquisa: colaboração no desenvolvimento de metodologias quantitativas, desde a estruturação dos dados até a interpretação de resultados estatísticos.',
    ],
    stack: ['Python', 'R', 'SPSS', 'Estatística', 'Saúde'],
  },
]

export const SKILL_GROUPS = [
  {
    title: 'Linguagens & Ferramentas',
    skills: [
      { name: 'Python', level: 88 },
      { name: 'SQL', level: 82 },
      { name: 'R', level: 75 },
      { name: 'Power BI', level: 85 },
      { name: 'Excel / SPSS', level: 80 },
    ],
  },
  {
    title: 'Data Science & IA',
    skills: [
      { name: 'Análise de dados', level: 90 },
      { name: 'Estatística aplicada', level: 85 },
      { name: 'Machine Learning', level: 70 },
      { name: 'Pipelines de dados', level: 80 },
      { name: 'IA aplicada a BI', level: 78 },
    ],
  },
]

export const RADAR_SKILLS = [
  { label: 'Python', value: 88 },
  { label: 'Estatística', value: 86 },
  { label: 'SQL', value: 80 },
  { label: 'BI', value: 85 },
  { label: 'ML', value: 70 },
  { label: 'Pesquisa', value: 82 },
]

export const MARQUEE_ITEMS = [
  'Python',
  'SQL',
  'R',
  'Power BI',
  'Estatística',
  'Machine Learning',
  'Pandas',
  'NumPy',
  'SPSS',
  'Excel',
  'ETL',
  'Dashboards',
  'Data Viz',
  'LLM',
  'Scikit-learn',
  'Jupyter',
]

export const EDUCATION = [
  {
    period: '2025 — 2028',
    title: 'Ciências da Computação',
    org: 'Universidade do Extremo Sul Catarinense (UNESC)',
    icon: 'graduation',
  },
  {
    period: '2023 — 2025',
    title: 'Ensino Técnico — Informática',
    org: 'Colégio SATC',
    icon: 'code',
  },
]

export const COURSES = [
  {
    period: '2026 — presente',
    title: 'Alemão',
    org: 'KNN Idiomas',
    tag: 'Idioma',
  },
  {
    period: 'out 2025 — dez 2025 · 71h',
    title: 'Estatística com Python',
    org: 'Alura',
    tag: 'Dados',
  },
  {
    period: 'jun 2025 — jul 2025 · 37h',
    title: 'Power BI',
    org: 'Alura',
    tag: 'BI',
  },
  {
    period: '2013 — 2022',
    title: 'Inglês Avançado',
    org: 'KNN Idiomas',
    tag: 'Idioma',
  },
]

export const GITHUB_USER = 'stefanyfranca'
