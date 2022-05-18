class SuperClass {
  public isSuper: boolean

  constructor() {
    this.isSuper = true;
  }

  sayHello() {
    console.log('Olá mundo!')
  }
}

class SubClass extends SuperClass {}

const myFunc = (object: SuperClass) => {
  object.sayHello();
}

const sup = new SuperClass();
const sub = new SubClass();

myFunc(sup);
myFunc(sub);