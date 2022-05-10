// exemplos de classes

class Cachorro {
  name: string;
  color: string;
  idade: number;

  constructor(name: string, color: string, idade: number) {
    this.name = name;
    this.color = color;
    this.idade = idade;
  }

  som(): void {
    console.log('Au au au!');
  }
}

class Casa {
  name: string;
  color: string;
  tipo: string;

  constructor(name: string, color: string, tipo: string) {
    this.name = name;
    this.color = color;
    this.tipo = tipo;
  }
}

class Voo {
  aeroporto: string;
  destino: string;
  chegada: Date;
  partida: Date;

  constructor(aeroporto: string, destino: string,chegada: Date, partida: Date) {
    this.aeroporto = aeroporto;
    this.destino = destino;
    this.chegada = chegada;
    this.partida = partida;
  }
}