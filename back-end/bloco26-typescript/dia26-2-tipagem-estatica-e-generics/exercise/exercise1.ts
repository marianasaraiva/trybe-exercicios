enum Color {
  PRETA = 'preta',
  BRANCA = 'branca',
  VERMELHA = 'vermelha',
  PRATA = 'prata',
}

enum Direcao {
  ESQUERDA = 'esquerda',
  DIREITA = 'direita',
}

enum Portas {
  MOTORISTA = 'porta do motorista',
  CARONA = 'porta do carona',
  PASSAGEIROESQUERDA = 'porta do passageiro esquerda',
  PASSAGEIRODIREITA = 'porta do passageiro direita',
}

class Car {
  brand: string;
  color: Color;
  doors: number;

  constructor(brand: string, color: Color, doors: number) {
    brand = brand;
    doors = doors

  }

  honk(): void {
    console.log(`Aciona a buzina do carro`);
  }

  openTheDoor(portas: Portas): void {
    console.log(`Abre a porta do carro do lado do ${portas}`);
  }

  closeTheDoor(portas: Portas): void {
    console.log(`Fecha a porta do carro do lado do ${portas}`);
  }

  turnOn(): void {
    console.log(`Liga o carro`);
  }

  turnOff(): void {
    console.log(`Desliga o carro`);
  }

  speedUp(): void {
    console.log("Acelerando o carro.");
  }

  speedDown(): void {
    console.log("Reduzindo a velocidade do carro.");
  }

  stop(): void {
    console.log("Parando o carro.");
  }

  turn(direcao: Direcao): void {
    console.log(`Fecha a porta do carro do lado do ${direcao}`);
  }
}