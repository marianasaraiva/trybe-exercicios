// // exercise 1
// import Person from './Person';

// const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
// const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));

// console.log(maria);
// console.log(luiza);

// // deve retornar erro
// // const invalidPersonName = new Person('An', new Date('2000/06/07'));
// // console.log(invalidPersonName);
// // deve retornar erro
// // const invalidPersonAge = new Person('Ana Vitória', new Date('1900/06/07'));
// // console.log(invalidPersonAge);


// // exercise 2
// import Student from './Student';

// const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
// const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
// const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
// const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
// const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

// carolina.examsGrades = [25, 20, 25, 23];
// lucas.examsGrades = [25, 20, 25, 23];
// jessica.worksGrades = [50, 45];
// tamires.worksGrades = [47, 42];

// console.log(carolina);
// console.log(lucas);
// console.log(jessica);
// console.log(tamires);
// console.log(fernando);


// // exercise 4
// import Subject from './Subject';

// const matematica = new Subject('Matemática');
// const portugues = new Subject('Português');
// const historia = new Subject('História');

// console.log(matematica);
// console.log(portugues);
// console.log(historia);


// exercise 5:
import Subject from './Subject';
import Teacher from './Teacher';

const matematica = new Subject('Matemática');
const portugues = new Subject('Português');
const historia = new Subject('História');

const marta = new Teacher('Maria', new Date('1980/03/30'), 2500, matematica);
const joao = new Teacher('João', new Date('1982/04/21'), 2500, portugues);
const jose = new Teacher('José', new Date('1986/01/29'), 2500, historia);

console.log(marta);
console.log(joao);
console.log(jose);

