class SuperClass {
  public isSuper: boolean

  constructor() {
    this.isSuper = true;
  }

  protected sayHello(): void {
    console.log('Olá mundo!')
  }
}

class SubClass extends SuperClass {
  public sayHello2(): void {
    this.sayHello();
  }
}

const myFunc = (object: SubClass) => {
  object.sayHello2();
}

// const sup = new SuperClass();
const sub = new SubClass();

// myFunc(sup);
myFunc(sub);