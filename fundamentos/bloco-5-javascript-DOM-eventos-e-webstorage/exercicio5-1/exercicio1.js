//header verde
document.getElementById('header-container').style.backgroundColor = 'green'
//section esquerda rosa
document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'pink'
//section direita amarela
document.querySelector('.no-emergency-tasks').style.backgroundColor = 'yellow'
//títulos direita preto
const tarefasSemEmergencia = document.querySelectorAll('.no-emergency-tasks h3')
for (let index = 0; index < tarefasSemEmergencia.length; index += 1){
  tarefasSemEmergencia[index].style.backgroundColor = 'black'
}
//títulos esquerda roxo
const tarefasEmergencia = document.querySelectorAll('.emergency-tasks h3')
for (let index = 0; index < tarefasEmergencia.length; index += 1){
  tarefasEmergencia[index].style.backgroundColor = 'purple'
}
//footer cinza
document.getElementById('footer-container').style.backgroundColor = 'gray'

