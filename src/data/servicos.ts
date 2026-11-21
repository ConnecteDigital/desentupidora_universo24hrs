import type { IconName } from './icons';

export interface Faq {
  q: string;
  a: string;
}

export interface Servico {
  slug: string;
  nome: string;
  // Nome curto usado em menus e cartões
  curto: string;
  // Palavra-chave principal da página (usada no H1 e no title)
  keyword: string;
  resumo: string;
  metaDescription: string;
  icon: IconName;
  intro: string[];
  sinais: string[];
  comoFazemos: string[];
  faq: Faq[];
}

export const servicos: Servico[] = [
  {
    slug: 'desentupimento-de-vaso-sanitario',
    nome: 'Desentupimento de Vaso Sanitário',
    curto: 'Vaso sanitário',
    keyword: 'Desentupidora de vaso sanitário 24 horas',
    resumo: 'Vaso que não desce, transbordando ou com a água subindo? Desentupimos sem quebrar o piso.',
    metaDescription:
      'Desentupidora de vaso sanitário 24h em Campinas e região. Vaso entupido, transbordando ou descendo devagar? Atendemos todos os dias. Chame no WhatsApp.',
    icon: 'toilet',
    intro: [
      'Vaso sanitário entupido é uma das emergências mais comuns dentro de casa, e quase sempre acontece na pior hora. Papel em excesso, lenço umedecido, absorvente, fio dental, brinquedo de criança ou acúmulo na saída do vaso: qualquer um desses bloqueia a passagem e a água começa a subir.',
      'A Desentupidora Universo 24hrs atende 24 horas, inclusive fins de semana e feriados. Usamos equipamentos profissionais, como máquina de cabo rotativo (mola) e desentupidor de pressão, para desobstruir o vaso e a tubulação até a caixa de inspeção, sem quebra-quebra sempre que possível.',
    ],
    sinais: [
      'Água subindo até a borda ao dar descarga',
      'Vaso esvaziando muito devagar depois da descarga',
      'Barulho de borbulha (gorgolejo) no vaso ou no ralo do box',
      'Mau cheiro de esgoto no banheiro',
      'Água voltando pelo ralo quando a descarga é acionada',
    ],
    comoFazemos: [
      'Avaliamos se o entupimento está no vaso, no ramal ou na rede de esgoto',
      'Desobstruímos com o equipamento adequado, sem retirar o vaso sempre que possível',
      'Testamos várias descargas seguidas para confirmar o escoamento',
      'Deixamos o banheiro limpo e explicamos o que causou o entupimento',
    ],
    faq: [
      {
        q: 'Precisa tirar o vaso do lugar para desentupir?',
        a: 'Na maioria dos casos, não. A máquina de cabo rotativo entra pela própria saída do vaso. Só retiramos a louça quando há objeto preso que não sai de outra forma, e sempre conversando com você antes.',
      },
      {
        q: 'Posso jogar soda cáustica no vaso entupido?',
        a: 'Não é recomendado. A soda pode danificar a louça e a tubulação, e quase nunca resolve obstrução por papel ou objeto. Além disso, deixa a água perigosa para quem for fazer o serviço depois.',
      },
      {
        q: 'Vocês desentopem vaso de madrugada?',
        a: 'Sim. O atendimento é 24 horas, todos os dias da semana, incluindo fins de semana e feriados.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-ralo',
    nome: 'Desentupimento de Ralo',
    curto: 'Ralo',
    keyword: 'Desentupidora de ralo 24 horas',
    resumo: 'Ralo do box, da área de serviço ou do quintal entupido? Água parada e mau cheiro resolvidos.',
    metaDescription:
      'Desentupimento de ralo 24h em Campinas e região: ralo de box, banheiro, área de serviço e quintal. Água parada ou mau cheiro? Chame no WhatsApp.',
    icon: 'drain',
    intro: [
      'Cabelo, sabão, restos de xampu e sujeira vão se acumulando no ralo até a água parar de descer. No box, a água empoça; na área de serviço, volta com espuma da máquina de lavar; no quintal, alaga em dia de chuva.',
      'Fazemos o desentupimento de ralos de banheiro, box, lavanderia, cozinha, garagem e quintal, limpando também a caixa sifonada, que é onde a maior parte da sujeira fica presa. O resultado é água descendo rápido e fim do mau cheiro.',
    ],
    sinais: [
      'Água empoçando no box durante o banho',
      'Ralo da área de serviço voltando água ou espuma',
      'Mau cheiro de esgoto saindo do ralo',
      'Ralo do quintal ou da garagem alagando com a chuva',
      'Baratas e insetos saindo pelo ralo',
    ],
    comoFazemos: [
      'Abrimos e limpamos a caixa sifonada',
      'Desobstruímos a tubulação do ralo com máquina de cabo rotativo',
      'Testamos o escoamento com bastante água',
      'Orientamos sobre telas e cuidados para evitar novos entupimentos',
    ],
    faq: [
      {
        q: 'Por que o ralo entupido fica com cheiro de esgoto?',
        a: 'Quando a caixa sifonada está suja ou sem o fecho de água, o gás do esgoto sobe pelo ralo. A limpeza da caixa sifonada costuma resolver o entupimento e o mau cheiro juntos.',
      },
      {
        q: 'Vocês desentopem ralo de quintal e de garagem?',
        a: 'Sim. Atendemos ralos internos e externos, inclusive ralos lineares e grelhas de quintal e garagem.',
      },
      {
        q: 'Atendem ralo entupido no fim de semana?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, inclusive fins de semana e feriados.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-esgoto',
    nome: 'Desentupimento de Esgoto',
    curto: 'Esgoto',
    keyword: 'Desentupidora de esgoto 24 horas',
    resumo: 'Esgoto voltando, caixa de inspeção transbordando ou rede entupida em casa, condomínio ou comércio.',
    metaDescription:
      'Desentupimento de esgoto 24h em Campinas e região: rede de esgoto, caixa de inspeção, caixa de gordura e coluna. Casas, condomínios e comércios.',
    icon: 'sewer',
    intro: [
      'Quando o entupimento está na rede de esgoto, o problema aparece em vários pontos ao mesmo tempo: o vaso não desce, o ralo volta água e a caixa de inspeção transborda no quintal. É um caso que precisa de equipamento profissional, porque a obstrução fica longe e costuma ser mais pesada.',
      'A Desentupidora Universo 24hrs faz desentupimento de rede de esgoto, caixas de inspeção, caixas de gordura, colunas de prédios e ramais até a rede pública, em residências, condomínios, comércios, restaurantes e indústrias.',
    ],
    sinais: [
      'Esgoto voltando por ralos e pelo vaso ao mesmo tempo',
      'Caixa de inspeção cheia ou transbordando',
      'Mau cheiro forte de esgoto na casa ou no quintal',
      'Vários pontos da casa escoando devagar',
      'Caixa de gordura cheia, com gordura endurecida',
    ],
    comoFazemos: [
      'Localizamos o trecho da rede onde está a obstrução',
      'Desobstruímos com máquina de cabo rotativo e, quando necessário, hidrojateamento',
      'Limpamos as caixas de inspeção e de gordura envolvidas',
      'Testamos o fluxo em todos os pontos de saída',
    ],
    faq: [
      {
        q: 'O entupimento do esgoto é responsabilidade minha ou da companhia?',
        a: 'Da caixa de inspeção para dentro do imóvel, a rede é responsabilidade do morador ou do condomínio. Da calçada para a rua, é da companhia de saneamento da cidade. Ajudamos a identificar onde está o problema.',
      },
      {
        q: 'Vocês atendem condomínios e empresas?',
        a: 'Sim. Atendemos casas, condomínios, comércios, restaurantes e indústrias em Campinas e nas cidades da região.',
      },
      {
        q: 'Esgoto voltando de madrugada: vocês atendem?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, inclusive fins de semana e feriados.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-pia',
    nome: 'Desentupimento de Pia',
    curto: 'Pia',
    keyword: 'Desentupidora de pia 24 horas',
    resumo: 'Pia da cozinha ou do banheiro parada, com gordura ou resto de comida? Desentupimos na hora.',
    metaDescription:
      'Desentupimento de pia 24h em Campinas e região: pia de cozinha com gordura, pia de banheiro e tanque. Atendemos todos os dias. Chame no WhatsApp.',
    icon: 'sink',
    intro: [
      'Na cozinha, a gordura que desce com a louça esfria dentro do cano, endurece e vai juntando restos de comida até fechar a passagem. No banheiro, o vilão costuma ser cabelo e creme dental. Em qualquer caso, a água para na cuba e começa a cheirar mal.',
      'Desentupimos pias de cozinha, pias de banheiro, tanques e cubas de comércio, limpando o sifão e a tubulação até a caixa de gordura. Quando a caixa de gordura está cheia, também fazemos a limpeza dela.',
    ],
    sinais: [
      'Água parada na cuba depois de lavar a louça',
      'Pia descendo devagar e com barulho',
      'Mau cheiro saindo pelo ralo da pia',
      'Água voltando no tanque ou na pia vizinha',
      'Caixa de gordura cheia ou transbordando',
    ],
    comoFazemos: [
      'Desmontamos e limpamos o sifão',
      'Desobstruímos o cano da parede com máquina de cabo rotativo',
      'Limpamos a caixa de gordura quando ela está cheia',
      'Testamos com água quente e corrente e damos dicas para evitar novos entupimentos',
    ],
    faq: [
      {
        q: 'Água quente com detergente desentope a pia?',
        a: 'Pode ajudar em entupimentos leves e no começo. Quando a gordura já endureceu dentro do cano, só a desobstrução mecânica resolve de verdade.',
      },
      {
        q: 'Vocês limpam caixa de gordura?',
        a: 'Sim. A caixa de gordura cheia é uma das principais causas de pia entupida, e fazemos a limpeza junto com o desentupimento.',
      },
      {
        q: 'Atendem restaurantes e cozinhas industriais?',
        a: 'Sim. Atendemos comércios, restaurantes e cozinhas industriais em Campinas e região, inclusive fora do horário comercial.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-cano',
    nome: 'Desentupimento de Cano',
    curto: 'Cano e tubulação',
    keyword: 'Desentupimento de cano e tubulação 24 horas',
    resumo: 'Canos e tubulações de esgoto, águas pluviais e calhas desobstruídos com equipamento profissional.',
    metaDescription:
      'Desentupimento de cano e tubulação 24h em Campinas e região: tubulação de esgoto, águas pluviais, calhas e colunas. Sem quebra-quebra sempre que possível.',
    icon: 'pipe',
    intro: [
      'Nem todo entupimento está na pia ou no vaso. Às vezes a obstrução está no meio da tubulação, embaixo do piso, dentro da parede ou no cano que leva a água da chuva. Raízes, acúmulo de gordura, areia de obra e objetos podem fechar a passagem em qualquer ponto.',
      'Fazemos desentupimento de canos e tubulações de esgoto, águas pluviais, calhas, condutores e colunas de prédios, usando máquinas de cabo rotativo e hidrojateamento para alcançar a obstrução por dentro do cano, evitando quebrar piso e parede sempre que possível.',
    ],
    sinais: [
      'Água voltando em pontos diferentes da casa',
      'Calha ou condutor transbordando em dia de chuva',
      'Barulho de borbulha nos canos quando a água desce',
      'Mau cheiro persistente mesmo com os ralos limpos',
      'Entupimento que volta pouco tempo depois de desentupido',
    ],
    comoFazemos: [
      'Identificamos em que trecho da tubulação está a obstrução',
      'Escolhemos o equipamento certo para o diâmetro e o material do cano',
      'Desobstruímos e lavamos a tubulação',
      'Testamos o escoamento em todos os pontos ligados ao trecho',
    ],
    faq: [
      {
        q: 'Vai precisar quebrar o piso ou a parede?',
        a: 'Na grande maioria dos casos, não. Trabalhamos por dentro da tubulação. Só indicamos abertura quando o cano está quebrado ou amassado, e sempre com o seu aceite antes.',
      },
      {
        q: 'Vocês desentopem calha e cano de água de chuva?',
        a: 'Sim. Desentupimos calhas, condutores e tubulações de águas pluviais, além da rede de esgoto.',
      },
      {
        q: 'Por que o cano entope de novo pouco tempo depois?',
        a: 'Geralmente porque só a ponta da obstrução foi retirada, ou porque há gordura, raiz ou cano com caimento errado. No atendimento avaliamos a causa e explicamos o que pode ser feito.',
      },
    ],
  },
  {
    slug: 'limpa-fossa',
    nome: 'Limpa Fossa',
    curto: 'Limpa fossa',
    keyword: 'Limpa fossa e esgotamento de fossa 24 horas',
    resumo: 'Esgotamento de fossa séptica, fossa negra, sumidouro e caixa de gordura com caminhão limpa fossa.',
    metaDescription:
      'Limpa fossa 24h em Campinas e região: esgotamento de fossa séptica, fossa negra, sumidouro e caixa de gordura com caminhão a vácuo. Chame no WhatsApp.',
    icon: 'truck',
    intro: [
      'Em imóveis que não estão ligados à rede de esgoto, como chácaras, sítios, condomínios afastados e muitas casas da região, todo o esgoto vai para a fossa. Com o tempo ela enche, o esgoto para de escoar e começa a voltar pelos ralos e pelo vaso, com mau cheiro forte no quintal.',
      'Fazemos o esgotamento de fossa séptica, fossa negra, sumidouro, caixa de gordura e caixa de passagem com caminhão limpa fossa a vácuo, que suga todo o conteúdo pela tampa da fossa. O resíduo é levado para descarte em local adequado.',
    ],
    sinais: [
      'Vaso e ralos descendo devagar em toda a casa',
      'Esgoto voltando pelos ralos ou pelo vaso',
      'Mau cheiro forte perto da fossa ou no quintal',
      'Terreno úmido ou com poça perto da fossa',
      'Muito tempo sem fazer a limpeza da fossa',
    ],
    comoFazemos: [
      'Localizamos e abrimos a tampa da fossa',
      'Fazemos o esgotamento completo com caminhão a vácuo',
      'Desentupimos a ligação entre a casa e a fossa, se necessário',
      'Fechamos a fossa, deixamos o local limpo e levamos o resíduo para descarte adequado',
    ],
    faq: [
      {
        q: 'De quanto em quanto tempo preciso limpar a fossa?',
        a: 'Depende do tamanho da fossa e de quantas pessoas usam o imóvel. Em uma casa comum, a limpeza costuma ser feita a cada 1 ou 2 anos. Se o esgoto começou a voltar ou a cheirar mal, já passou da hora.',
      },
      {
        q: 'O caminhão precisa chegar até a fossa?',
        a: 'O caminhão estaciona o mais perto possível e a mangueira vai até a tampa da fossa. Se o acesso for longe, conte para a gente pelo WhatsApp e avaliamos antes de sair.',
      },
      {
        q: 'Vocês limpam fossa em chácara e sítio?',
        a: 'Sim. Atendemos chácaras, sítios, condomínios e casas em Campinas e nas cidades da região, inclusive em áreas rurais.',
      },
    ],
  },
];

export function getServico(slug: string) {
  return servicos.find((s) => s.slug === slug);
}
