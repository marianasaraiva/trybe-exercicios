import IEmployee from "./IEmployee";
import Person from "./Person";
import Subject from "./Subject";
import { randomUUID } from 'crypto';

export default class Teacher extends Person implements IEmployee {
  private _subject: Subject;
  private _registration = String();
  private _admissionDate: Date;
  
  constructor(name: string, birthDate: Date, private _salary: number, subject: Subject) {
    super(name, birthDate);

    this._subject = subject;
    this.salary = _salary;
    this._admissionDate = new Date();
    this.registration = this.generateRegistration();
  }

  generateRegistration(): string {
    return `TEA${randomUUID()}`
  }

  public get subject(): Subject {
    return this._subject;
  }
  public set subject(value: Subject) {
    this._subject = value;
  }

  public get registration() {
    return this._registration;
  }
  public set registration(value) {
    if (value.length < 16) {
      throw new Error('O registro deve possuir no mínimo 16 caracteres')
    }
    this._registration = value;
  }
  
  public get salary() {
    return this._salary;
  }
  public set salary(value) {
    if (value < 0) {
      throw new Error ('O salário não pode ser negativo');
    }
    this._salary = value;
  }

  public get admissionDate() {
    return this._admissionDate;
  }
  public set admissionDate(value) {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('A data de admissão não pode ser uma data no futuro.');
    }
    this._admissionDate = value;
  }  
}