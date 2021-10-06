// // Metodo aprendido anteriorente, usando looping de repetição:
// const students = [
//   { name: 'Maria', grade: 70, approved: '' },
//   { name: 'José', grade: 56, approved: '' },
//   { name: 'Roberto', grade: 90, approved: '' },
//   { name: 'Ana', grade: 81, approved: '' },
// ];

// function verifyGrades() {
//   for (let i = 0; i < students.length; i += 1) {
//     const student = students[i];
//     if (student.grade >= 60) {
//       student.approved = 'Aprovado';
//     } else {
//       student.approved = 'Recuperação';
//     }
//   }
// }

// verifyGrades();

// console.log(students);
// // [
// //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
// //   { name: 'José', grade: 56, approved: 'Recuperação' },
// //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
// //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// // ]

// // Método usando HoFs:
// const students = [
//   { name: 'Maria', grade: 70, approved: '' },
//   { name: 'José', grade: 56, approved: '' },
//   { name: 'Roberto', grade: 90, approved: '' },
//   { name: 'Ana', grade: 81, approved: '' },
// ];

// function verifyGrades() {
//   students.forEach((student, index) => {
//     if (student.grade >= 60) {
//       students[index].approved = 'Aprovado';
//     } else {
//       students[index].approved = 'Recuperação';
//     }
//   });
// }

// verifyGrades();

// console.log(students);
// // [
// //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
// //   { name: 'José', grade: 56, approved: 'Recuperação' },
// //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
// //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// // ]

// // Queremos encontrar e imprimir no console o primeiro elemento de um array que satisfaça a uma determinada condição. Pode ser, por exemplo, encontrar o primeiro número que seja divisível por 5 em uma lista de números.
// const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
// const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

// console.log(firstMultipleOf5);
// // 50

// // Exemplo de utilização de forEach():
// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
// arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
//   console.log('Cada elemento do array:', element);
//   console.log('Index, posição do elemento:', indexOfTheArray);
//   console.log('Array percorrido:', theEntireArray);
// });

// // => ---------------
// //   Cada elemento do array: josé
// //   Index, posição do elemento: 0
// //   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
// //   ---------------
// //   Cada elemento do array: 50
// //   Index, posição do elemento: 1
// //   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
// //   ---------------
// //   Cada elemento do array: 0.25
// //   Index, posição do elemento: 2
// //   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
// //   ---------------
// //   Cada elemento do array: { comida: 'Chocolate' }
// //   Index, posição do elemento: 3
// //   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]