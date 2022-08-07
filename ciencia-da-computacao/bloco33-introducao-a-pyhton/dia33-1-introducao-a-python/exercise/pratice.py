import math


# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.
def bigger(number, other):
    if other > number:
        return other
    return number


# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
def mean(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)


# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
# Por exemplo:
# n = 5

# *****
# *****
# *****
# *****
# *****
# 🦜 Dica: Python sabe multiplicar sequências! Por exemplo, 3 * 'bla' resulta
# em blablabla. Isso se aplica a listas também, caso você precise.
def draw_square(n):
    for row in range(n):
        print(n * "*")


# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome
# com a maior quantidade de caracteres. Por exemplo, para
# ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
# o retorno deve ser "Fernanda".
# 🦜 Uma dica: Utilize a função len() para verificar o tamanho do nome.
def find_biggest_name(names):
    biggest_name = names[0]
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name


# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3
# metros quadrados e que a tinta é vendida em latas de 18 litros, que custam
# R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a
# quantidade de latas de tinta a serem compradas e o preço total a partir do
# tamanho de uma parede (em m²).
def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price


# Uma alternativa mais direta, utilizando o módulo math
# import math


def paint_costss(area):
    can_price = 80
    required_liters = area / 3
    required_cans = math.ceil(required_liters / 18)
    return required_cans, required_cans * can_price


# Exercício 6: Crie uma função que receba os três lados de um triângulo e
# informe qual o tipo de triâgulo formado ou "não é triangulo", caso não seja
# possível formar um triângulo.
def type_of_triangle(side1, side2, side3):
    is_triangle = (
        side1 + side2 > side3
        and side2 + side3 > side1
        and side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"
