import type { ImageMetadata } from 'astro';

// Fotos reais de serviços feitos, uma por serviço (src/assets/fotos/<slug>.jpg).
// Os originais ficam em fotos/<slug>/ na raiz do repositório (o script scripts/fotos.mjs converte no build).
// Enquanto não houver foto, o site mostra o ícone do serviço no lugar.
const arquivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.jpg', { eager: true });

const alts: Record<string, string> = {
  'desentupimento-de-vaso-sanitario': 'Desentupimento de vaso sanitário feito pela Desentupidora Universo 24hrs',
  'desentupimento-de-ralo': 'Desentupimento de ralo de banheiro com máquina de cabo rotativo',
  'desentupimento-de-esgoto': 'Desentupimento de rede de esgoto em caixa de inspeção',
  'desentupimento-de-pia': 'Desentupimento de pia de cozinha com gordura acumulada',
  'desentupimento-de-cano': 'Desentupimento de cano e tubulação com equipamento profissional',
  'limpa-fossa': 'Caminhão limpa fossa fazendo o esgotamento de fossa séptica',
};

export interface Foto {
  src: ImageMetadata;
  alt: string;
}

export function fotoDoServico(slug: string): Foto | undefined {
  const mod = arquivos[`../assets/fotos/${slug}.jpg`];
  if (!mod) return undefined;
  return { src: mod.default, alt: alts[slug] ?? 'Serviço realizado pela Desentupidora Universo 24hrs' };
}
