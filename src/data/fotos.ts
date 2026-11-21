import type { ImageMetadata } from 'astro';

// Fotos reais de serviços feitos, uma por serviço (src/assets/fotos/<slug>.jpg).
// Os originais ficam em fotos/<slug>/ na raiz do repositório (o script scripts/fotos.mjs converte no build).
// Enquanto não houver foto, o site mostra o ícone do serviço no lugar.
const arquivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.jpg', { eager: true });

const alts: Record<string, string> = {
  'desentupimento-de-vaso-sanitario': 'Desentupidor usando máquina de cabo rotativo para desentupir vaso sanitário',
  'desentupimento-de-ralo': 'Máquina de cabo rotativo desentupindo ralo de piso',
  'desentupimento-de-esgoto': 'Desentupidor com máscara e luvas desentupindo caixa de esgoto com máquina de mola',
  'desentupimento-de-pia': 'Desentupidor limpando o sifão embaixo da pia da cozinha',
  'desentupimento-de-cano': 'Desentupidor passando cabo de desentupimento na tubulação pelo ralo do piso',
  'limpa-fossa': 'Equipe com mangueira do caminhão limpa fossa fazendo o esgotamento de fossa séptica',
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
