export default class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  }
  
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    if (value.length < 3 ) {
      throw new Error('Nome precisa ter pelo menos 3  caracteres')
    }
    this._name = value;
  }
  
  public get birthDate(): Date {
    return this._birthDate;
  }
  public set birthDate(value: Date) {
    const dateValid = value.getTime() > new Date().getTime();
    if (dateValid) {
      throw new Error('A data de nascimento precisa ser anterior a data de hoje!')
    }

    const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    const result = Math.floor(diff / yearMs);
    if (result > 120) {
      throw new Error('A pessoa pode ter no máximo 120 anos!')
    }
    this._birthDate = value;
  }
  
}