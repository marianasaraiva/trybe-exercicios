export default class Subject {
  constructor (private _name: string) {
    this._name = _name;
  }
  
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    if (value.length < 3) {
      throw new Error('Nome da disciplina deve conter pelo menos 3 caracteres');
    }
    this._name = value;
  }
}