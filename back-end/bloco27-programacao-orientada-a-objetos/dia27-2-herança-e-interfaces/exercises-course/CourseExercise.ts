class SuperClass {
  public isSuper: boolean

  constructor() {
    this.isSuper = true;
  }

  public sayHello(): void {
    console.log('Olá mundo!')
  }
}

class SubClass extends SuperClass {
  constructor() {
    super();
    this.isSuper = false;
  }

  // public sayHello2(): void {
  //   this.sayHello();
  // }
}

const myFunc = (object: SubClass) => {
  object.sayHello();
  console.log(object.isSuper ? 'Super' : 'Sub');
}

const sup = new SuperClass();
const sub = new SubClass();

myFunc(sup);
myFunc(sub);