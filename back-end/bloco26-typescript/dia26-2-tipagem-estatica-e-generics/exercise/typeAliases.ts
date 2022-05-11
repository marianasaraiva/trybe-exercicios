// type aliases

type passaros= {
  asas: 2,
  penas: true,
  especie: 'papagaio',
}

type Soma = (x: number, y: number) => number;

type Endereco = {
  rua: string;
  numero: number;
  complemento: string,
  cidade: string;
  estado: string;
}


// type unions

type EstadosMateria = "solido" | "liquido" | "gasoso";

type CPFDocumento = string | number;

type SistemaOperacional = 'linux' | 'mac' | 'windows';

type vogais = 'a' | 'e' | 'i' | 'o' | 'u';


