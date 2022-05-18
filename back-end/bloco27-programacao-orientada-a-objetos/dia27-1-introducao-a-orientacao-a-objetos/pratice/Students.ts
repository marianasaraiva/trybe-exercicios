class Students {
  private _matricula: string;
  private _nome: string;
  private _prova: number[];
  private _trabalho: number[];

  constructor(matricula: string, nome: string) {
    this._matricula = matricula;
    this._nome = nome;
    this._prova = [];
    this._trabalho = [];
  }

  get matricula(): string {
    return this._matricula;
  }

  set matricula(value: string) {
    this._matricula = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres');
    } else {
      this._nome = value;
    }
  }

  get prova(): number[] {
    return this._prova;
  }

  set prova(value: number[]) {
    if (value.length > 4) {
      throw new Error('O estudante só pode possuir 4 notas de prova');
    } else {
      this._prova = value;
    }
  }

  get trabalho(): number[] {
    return this._trabalho;
  }

  set trabalho(value: number[]) {
    if (value.length > 4) {
      throw new Error('O estudante só pode possuir 2 notas de trabalho');
    } else {
      this._trabalho = value;
    }
  }

  somaNotas(): number {
    const notasAgrupadas: number[] = [...this.prova, ...this.trabalho];
    const soma = Math.round(notasAgrupadas.reduce((acc, curr) => acc + curr, 0));
    return soma;
  }

  mediaNotas(): number {
    const notasAgrupadas: number[] = [...this.prova, ...this.trabalho];
    const media = Math.round(notasAgrupadas.reduce((acc, curr) => acc + curr, 0)/6);
    return media;
  }
};

const student1 = new Students('0001', 'Maria');
student1.prova = [10, 8, 9, 10];
student1.trabalho = [5, 2];

console.log(student1);
console.log('Soma das notas das provas e trabalhos: ', student1.somaNotas());
console.log('Media das notas: ', student1.mediaNotas());

const student2 = new Students('0002', 'Fernanda');
student2.prova = [7, 6, 9, 10];
student2.trabalho = [5, 5];

console.log(student2);
console.log('Soma das notas das provas e trabalhos: ', student2.somaNotas());
console.log('Media das notas: ', student2.mediaNotas());