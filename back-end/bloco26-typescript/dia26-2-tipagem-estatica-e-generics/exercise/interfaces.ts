interface Automovel {
  name: string;
  modelo: string;
  marca: string;
  portas: number;
  ligar(): void;
  desligar(): void;
  freiar(): void;
}

interface Felino {
  nome: string;
  raca: string;
  comer(): void;
  andar(): void;
}

interface Aeronave {
  modelo: string;
  marca: string;
  asas: number;
  ligar: () => void;
  desligar: () => void;
  velocidadeMaxima: () => void;
  velocidadeMinima: () => void;
}