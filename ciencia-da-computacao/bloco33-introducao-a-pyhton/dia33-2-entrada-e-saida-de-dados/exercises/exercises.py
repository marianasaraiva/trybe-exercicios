# Exercício 1: Faça um programa que solicite o nome de uma pessoa usuária
# e imprima-o na vertical. Exemplo:
# F
# U
# L
# A
# N
# O
NAME = input("Insira seu nome: ")

for letter in NAME:
    print(letter)


# Exercício 2: Escreva um programa que receba vários números naturais e
# calcule a soma desses valores. Caso algum valor da entrada seja inválido,
# por exemplo uma letra, uma mensagem deve ser exibida, na saída de erros,
# no seguinte formato: "Erro ao somar valores, {valor} é um valor inválido".
# Ao final, você deve imprimir a soma dos valores válidos.
# 🦜 Receba os valores em um mesmo input, solicitando à pessoa usuária que
# separe-os com um espaço. Receba os valores no formato str e utilize o método
# split para pegar cada valor separado. O método isdigit, embutido no tipo str,
#  pode ser utilizado para verificar se a string corresponde a um número
# natural
nums = input("Insira valores aqui, separados por espaço: ")

numsArr = nums.split(" ")

sum = 0
for num in numsArr:
    if not num.isdigit():
        print(f"Erro ao somar valores, {num} não é um dígito.")
    else:
        sum += int(num)

print(f"A soma dos valores válidos é: {sum}")


# Exercício 3: Dado um arquivo contendo estudantes e suas respectivas notas,
# escreva um programa que lê todas essas informações e filtre mantendo somente
# as pessoas que estão reprovadas, e escreva seus nomes em outro arquivo.
# A nota miníma para aprovação é 6.
recuStudents = []
with open("file.txt") as gradesFile:
    for line in gradesFile:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            recuStudents.append(student_grade[0] + "\n")


with open("recuStudents.txt", mode="w") as recuStudentsFile:
    print(recuStudents)
    recuStudentsFile.writelines(recuStudents)
