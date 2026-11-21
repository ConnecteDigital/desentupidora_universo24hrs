// Dados centrais da empresa. Altere aqui e o site inteiro é atualizado.

// Formato: 55 + DDD + número, só dígitos
const PHONE_DIGITS = '5519989108292';

export const site = {
  name: 'Desentupidora Universo 24hrs',
  shortName: 'Universo 24hrs',
  // TODO: trocar pelo domínio definitivo quando estiver comprado
  url: 'https://www.desentupidorauniverso24hrs.com.br',
  city: 'Campinas',
  state: 'SP',
  regiao: 'Campinas e região',
  phoneDigits: PHONE_DIGITS,
  // Exibição: (19) 98910-8292
  phoneDisplay: `(${PHONE_DIGITS.slice(2, 4)}) ${PHONE_DIGITS.slice(4, 9)}-${PHONE_DIGITS.slice(9)}`,
  tel: `tel:+${PHONE_DIGITS}`,
  description:
    'Desentupidora 24 horas em Campinas e região: desentupimento de vaso sanitário, ralo, pia, cano e esgoto, e limpa fossa. Atendemos 27 cidades, todos os dias. Chame no WhatsApp.',
};

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da Desentupidora Universo 24hrs e preciso de um desentupimento.';

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://api.whatsapp.com/send?phone=${site.phoneDigits}&text=${encodeURIComponent(message)}`;
}

// Contêiner do Google Tag Manager (ex.: 'GTM-XXXXXXX'). Vazio = sem rastreamento.
export const gtmId = 'GTM-WG62J7CC';
