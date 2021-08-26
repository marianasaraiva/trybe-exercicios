var percentagem = 50;

if(percentagem < 0 && percentagem >100){
  console.log("Erro, nota incorreta!")
}else if(percentagem >= 90){
  console.log("A");
}else if (percentagem >= 80){
  console.log("B");
}else if (percentagem >= 70){
  console.log("C");
}else if (percentagem >= 60){
  console.log("D");
}else if (percentagem >= 50){
  console.log("E");
}else{
  console.log("F")
}


/*
//Gabarito

const grade = 76;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}
*