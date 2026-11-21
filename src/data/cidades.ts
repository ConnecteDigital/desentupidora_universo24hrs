export type Regiao =
  | 'Campinas e região'
  | 'Americana e região'
  | 'Jaguariúna e Circuito das Águas'
  | 'Mogiana';

export interface Cidade {
  slug: string;
  nome: string;
  regiao: Regiao;
  // Texto exclusivo da página para não repetir conteúdo entre cidades
  sobre: string;
  // slugs de cidades atendidas próximas (viram links)
  vizinhas: string[];
}

export const ordemRegioes: Regiao[] = [
  'Campinas e região',
  'Americana e região',
  'Jaguariúna e Circuito das Águas',
  'Mogiana',
];

export const cidades: Cidade[] = [
  // Campinas e região
  {
    slug: 'campinas',
    nome: 'Campinas',
    regiao: 'Campinas e região',
    sobre:
      'Campinas é a maior cidade da região e reúne de tudo: prédios no Cambuí e no Centro, casas e sobrados em bairros como Taquaral, Ouro Verde e Campo Grande, condomínios em Barão Geraldo e chácaras em Sousas e Joaquim Egídio. Nos prédios, os chamados mais comuns são coluna de esgoto e pia de cozinha entupida; nas áreas de chácara, limpeza de fossa.',
    vizinhas: ['valinhos', 'hortolandia', 'sumare', 'paulinia', 'indaiatuba'],
  },
  {
    slug: 'valinhos',
    nome: 'Valinhos',
    regiao: 'Campinas e região',
    sobre:
      'Valinhos combina bairros residenciais perto do Centro com muitos condomínios e chácaras nas regiões mais afastadas. Por isso atendemos tanto desentupimento de esgoto e de caixa de gordura em casas quanto esgotamento de fossa em imóveis que não estão ligados à rede.',
    vizinhas: ['campinas', 'vinhedo', 'itatiba'],
  },
  {
    slug: 'vinhedo',
    nome: 'Vinhedo',
    regiao: 'Campinas e região',
    sobre:
      'Vinhedo tem grande parte dos moradores em condomínios horizontais e casas de alto padrão, além de chácaras. Atendemos desentupimento de rede de esgoto e caixas de inspeção em condomínios, ralos e pias em residências, e limpa fossa nas áreas sem rede pública.',
    vizinhas: ['valinhos', 'itatiba', 'campinas'],
  },
  {
    slug: 'itatiba',
    nome: 'Itatiba',
    regiao: 'Campinas e região',
    sobre:
      'Itatiba cresceu com loteamentos e condomínios ao redor do Centro e mantém muitas chácaras na zona rural. Em casas, os pedidos mais comuns são vaso e ralo entupidos; nas chácaras e nos sítios, esgotamento de fossa séptica e sumidouro.',
    vizinhas: ['morungaba', 'valinhos', 'vinhedo'],
  },
  {
    slug: 'morungaba',
    nome: 'Morungaba',
    regiao: 'Campinas e região',
    sobre:
      'Morungaba é uma cidade pequena e serrana, com muitas chácaras, sítios e pousadas. Boa parte dos imóveis usa fossa, então a limpeza de fossa é um dos serviços que mais fazemos por lá, junto com o desentupimento de vaso, pia e ralo.',
    vizinhas: ['itatiba', 'pedreira', 'jaguariuna'],
  },
  {
    slug: 'indaiatuba',
    nome: 'Indaiatuba',
    regiao: 'Campinas e região',
    sobre:
      'Indaiatuba tem muitos condomínios fechados, bairros planejados e um setor comercial e industrial forte. Atendemos desentupimento de esgoto e caixa de gordura em casas, condomínios, restaurantes e empresas, a qualquer hora do dia ou da noite.',
    vizinhas: ['monte-mor', 'campinas'],
  },
  {
    slug: 'monte-mor',
    nome: 'Monte Mor',
    regiao: 'Campinas e região',
    sobre:
      'Monte Mor tem bairros residenciais em crescimento e muitas chácaras e sítios no entorno. Fazemos desentupimento de vaso, pia, ralo e rede de esgoto nas casas, e esgotamento de fossa nas propriedades rurais e chácaras.',
    vizinhas: ['hortolandia', 'indaiatuba', 'campinas'],
  },
  {
    slug: 'hortolandia',
    nome: 'Hortolândia',
    regiao: 'Campinas e região',
    sobre:
      'Hortolândia é uma cidade de muitas casas e conjuntos residenciais, com condomínios e uma área industrial grande. Os chamados mais comuns são pia de cozinha com gordura, ralo de área de serviço e caixa de inspeção entupida.',
    vizinhas: ['sumare', 'campinas', 'monte-mor'],
  },
  {
    slug: 'sumare',
    nome: 'Sumaré',
    regiao: 'Campinas e região',
    sobre:
      'Sumaré é grande e espalhada, com o Centro, Nova Veneza, Matão e muitos bairros residenciais, além de áreas industriais. Atendemos desentupimento em casas, condomínios e empresas, e limpa fossa nos bairros e chácaras que ainda não têm rede de esgoto.',
    vizinhas: ['hortolandia', 'nova-odessa', 'paulinia', 'campinas'],
  },
  {
    slug: 'paulinia',
    nome: 'Paulínia',
    regiao: 'Campinas e região',
    sobre:
      'Paulínia tem bairros residenciais bem estruturados, condomínios e um polo industrial importante. Fazemos desentupimento de esgoto, pia e ralo em residências, e atendemos comércios e empresas que precisam de serviço fora do horário comercial.',
    vizinhas: ['campinas', 'cosmopolis', 'sumare', 'jaguariuna'],
  },

  // Americana e região
  {
    slug: 'americana',
    nome: 'Americana',
    regiao: 'Americana e região',
    sobre:
      'Americana tem bairros residenciais antigos, muitos prédios no Centro e chácaras perto da represa. Em casas mais antigas é comum entupimento na rede de esgoto e na caixa de gordura; nos prédios, coluna e pia de cozinha; nas chácaras, limpeza de fossa.',
    vizinhas: ['santa-barbara-d-oeste', 'nova-odessa', 'cosmopolis'],
  },
  {
    slug: 'santa-barbara-d-oeste',
    nome: "Santa Bárbara d'Oeste",
    regiao: 'Americana e região',
    sobre:
      "Santa Bárbara d'Oeste é vizinha de Americana e tem muitos bairros de casas e sobrados, além de áreas rurais. Atendemos desentupimento de vaso, ralo, pia e esgoto nas residências e esgotamento de fossa em sítios e chácaras.",
    vizinhas: ['americana', 'nova-odessa', 'sumare'],
  },
  {
    slug: 'nova-odessa',
    nome: 'Nova Odessa',
    regiao: 'Americana e região',
    sobre:
      'Nova Odessa é uma cidade tranquila, de casas e bairros residenciais, entre Americana e Sumaré. Os chamados mais comuns são ralo e pia entupidos e caixa de inspeção transbordando, que atendemos 24 horas.',
    vizinhas: ['americana', 'sumare', 'santa-barbara-d-oeste'],
  },
  {
    slug: 'cosmopolis',
    nome: 'Cosmópolis',
    regiao: 'Americana e região',
    sobre:
      'Cosmópolis tem bairros residenciais em expansão e muitas propriedades rurais no entorno. Fazemos desentupimento de esgoto, vaso e pia nas casas e limpeza de fossa séptica nas chácaras e sítios.',
    vizinhas: ['paulinia', 'artur-nogueira', 'americana'],
  },
  {
    slug: 'artur-nogueira',
    nome: 'Artur Nogueira',
    regiao: 'Americana e região',
    sobre:
      'Artur Nogueira é uma cidade de casas, com loteamentos novos e muitas chácaras de lazer. Atendemos desde o desentupimento de pia e ralo até o esgotamento de fossa e sumidouro com caminhão limpa fossa.',
    vizinhas: ['cosmopolis', 'engenheiro-coelho', 'holambra'],
  },
  {
    slug: 'engenheiro-coelho',
    nome: 'Engenheiro Coelho',
    regiao: 'Americana e região',
    sobre:
      'Engenheiro Coelho é uma cidade pequena, com grande área rural, sítios e chácaras. Muitos imóveis dependem de fossa, então a limpeza de fossa e o desentupimento da ligação entre a casa e a fossa são serviços frequentes por lá.',
    vizinhas: ['artur-nogueira', 'mogi-mirim', 'holambra'],
  },
  {
    slug: 'holambra',
    nome: 'Holambra',
    regiao: 'Americana e região',
    sobre:
      'Holambra, a Cidade das Flores, tem bairros residenciais, pousadas, restaurantes e muitas propriedades rurais com estufas. Atendemos desentupimento em casas e comércios e esgotamento de fossa em sítios e chácaras.',
    vizinhas: ['jaguariuna', 'santo-antonio-de-posse', 'artur-nogueira'],
  },

  // Jaguariúna e Circuito das Águas
  {
    slug: 'jaguariuna',
    nome: 'Jaguariúna',
    regiao: 'Jaguariúna e Circuito das Águas',
    sobre:
      'Jaguariúna tem condomínios, bairros residenciais novos e um polo de empresas em crescimento, além de chácaras. Fazemos desentupimento de esgoto, pia, ralo e vaso em casas e empresas, e limpa fossa nos imóveis sem rede de esgoto.',
    vizinhas: ['pedreira', 'holambra', 'santo-antonio-de-posse', 'campinas'],
  },
  {
    slug: 'pedreira',
    nome: 'Pedreira',
    regiao: 'Jaguariúna e Circuito das Águas',
    sobre:
      'Pedreira, conhecida pela porcelana, tem muitas casas, lojas e pequenas fábricas, além de chácaras ao redor. Atendemos desentupimento em residências e comércios e esgotamento de fossa nas áreas rurais.',
    vizinhas: ['jaguariuna', 'morungaba', 'santo-antonio-de-posse'],
  },
  {
    slug: 'santo-antonio-de-posse',
    nome: 'Santo Antônio de Posse',
    regiao: 'Jaguariúna e Circuito das Águas',
    sobre:
      'Santo Antônio de Posse é uma cidade pequena, com bairros de casas e grande área rural. Fazemos desentupimento de vaso, pia, ralo e esgoto nas casas e limpeza de fossa em sítios e chácaras.',
    vizinhas: ['jaguariuna', 'holambra', 'mogi-mirim'],
  },
  {
    slug: 'aguas-de-lindoia',
    nome: 'Águas de Lindóia',
    regiao: 'Jaguariúna e Circuito das Águas',
    sobre:
      'Águas de Lindóia é estância hidromineral, com muitos hotéis, pousadas e casas de temporada. Atendemos desentupimento de esgoto, caixa de gordura e pia de cozinha em hotéis e restaurantes, e limpa fossa em chácaras e casas de campo.',
    vizinhas: ['serra-negra'],
  },
  {
    slug: 'serra-negra',
    nome: 'Serra Negra',
    regiao: 'Jaguariúna e Circuito das Águas',
    sobre:
      'Serra Negra recebe muitos turistas e tem hotéis, pousadas, chalés e chácaras espalhados pela serra. Fazemos limpeza de fossa e desentupimento de esgoto em pousadas e casas de campo, e atendemos comércios do Centro a qualquer hora.',
    vizinhas: ['aguas-de-lindoia'],
  },

  // Mogiana
  {
    slug: 'mogi-guacu',
    nome: 'Mogi Guaçu',
    regiao: 'Mogiana',
    sobre:
      'Mogi Guaçu tem muitos bairros residenciais, condomínios e uma área industrial forte. Atendemos desentupimento de esgoto, pia, ralo e vaso em casas, condomínios e empresas, e limpa fossa em chácaras e propriedades rurais.',
    vizinhas: ['mogi-mirim', 'porto-ferreira'],
  },
  {
    slug: 'mogi-mirim',
    nome: 'Mogi Mirim',
    regiao: 'Mogiana',
    sobre:
      'Mogi Mirim mistura casas antigas no Centro, bairros novos e chácaras nos arredores. Nas casas antigas é comum entupimento na rede de esgoto e na caixa de gordura; nas chácaras, esgotamento de fossa.',
    vizinhas: ['mogi-guacu', 'santo-antonio-de-posse', 'engenheiro-coelho'],
  },
  {
    slug: 'mococa',
    nome: 'Mococa',
    regiao: 'Mogiana',
    sobre:
      'Mococa é uma cidade de casas e comércio tradicional, rodeada por fazendas e sítios. Fazemos desentupimento de vaso, pia, ralo e esgoto nas residências e limpeza de fossa nas propriedades rurais.',
    vizinhas: ['sao-jose-do-rio-pardo'],
  },
  {
    slug: 'sao-jose-do-rio-pardo',
    nome: 'São José do Rio Pardo',
    regiao: 'Mogiana',
    sobre:
      'São José do Rio Pardo tem bairros residenciais, comércio no Centro e muitas propriedades rurais no entorno. Atendemos desentupimento em casas e comércios e esgotamento de fossa em sítios e chácaras.',
    vizinhas: ['mococa'],
  },
  {
    slug: 'porto-ferreira',
    nome: 'Porto Ferreira',
    regiao: 'Mogiana',
    sobre:
      'Porto Ferreira, conhecida pela cerâmica, tem muitas casas, lojas e indústrias. Fazemos desentupimento de esgoto, pia, ralo e vaso em residências, comércios e empresas, e limpeza de fossa nas áreas sem rede de esgoto.',
    vizinhas: ['mogi-guacu'],
  },
];

export function cidadePath(c: Cidade) {
  return `/desentupidora-em-${c.slug}/`;
}

export function getCidade(slug: string) {
  return cidades.find((c) => c.slug === slug);
}

export function cidadesPorRegiao() {
  return ordemRegioes
    .map((regiao) => ({ regiao, cidades: cidades.filter((c) => c.regiao === regiao) }))
    .filter((g) => g.cidades.length > 0);
}
