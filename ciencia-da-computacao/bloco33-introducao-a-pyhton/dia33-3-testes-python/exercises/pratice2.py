# Exercício 2 Em alguns lugares é comum lembrar um número do telefone
# associando seus dígitos a letras. Dessa maneira a expressão MY LOVE
# significa 69 5683. Claro que existem alguns problemas, uma vez que
# alguns números de telefone não formam uma palavra ou uma frase e os
# dígitos 1 e 0 não estão associados a nenhuma letra.
# Sua tarefa é ler uma expressão e encontrar o número de telefone
# correspondente baseado na tabela abaixo. Uma expressão é composta
# por letras maiúsculas (A-Z), hifens (-) e os números 1 e 0.

# Letras  ->  Número
# ABC     ->  2
# DEF     ->  3
# GHI     ->  4
# JKL     ->  5
# MNO     ->  6
# PQRS    ->  7
# TUV     ->  8
# WXYZ    ->  9

# Exemplo de entrada:
# 1-HOME-SWEET-HOME
# MY-MISERABLE-JOB

# Saídas correspondentes:
# 1-4663-79338-4663
# 69-647372253-562

# Verifique casos como entrada maior que 30 caracteres, vazia e com caracteres
# inválidos.

# Código:
def translate_to_number(expression):
    if not 1 < len(expression) <= 30:
        raise ValueError("Expression with invalid length")
    number = ""
    for char in expression:
        if char in "ABC":
            number += "2"
        elif char in "DEF":
            number += "3"
        elif char in "GHI":
            number += "4"
        elif char in "JKL":
            number += "5"
        elif char in "MNO":
            number += "6"
        elif char in "PQRS":
            number += "7"
        elif char in "TUV":
            number += "8"
        elif char in "WXYZ":
            number += "9"
        elif char in "-01":
            number += char
        else:
            raise ValueError("Invalid character")
    return number


# Testes:
def test_abc_should_be_converted_in_2():
    assert translate_to_number("ABC") == "222"


def test_def_should_be_converted_in_3():
    assert translate_to_number("DEF") == "333"


def test_ghi_should_be_converted_in_4():
    assert translate_to_number("GHI") == "444"


def test_jkl_should_be_converted_in_5():
    assert translate_to_number("JKL") == "555"


def test_mno_should_be_converted_in_6():
    assert translate_to_number("MNO") == "666"


def test_pqrs_should_be_converted_in_7():
    assert translate_to_number("PQRS") == "7777"


def test_tuv_should_be_converted_in_8():
    assert translate_to_number("TUV") == "888"


def test_wxyz_should_be_converted_in_9():
    assert translate_to_number("WXYZ") == "9999"


def test_dashe_zero_one_should_be_keeped():
    assert translate_to_number("0-1") == "0-1"


def test_expression_should_be_at_least_one_char():
    with pytest.raises(ValueError):
        translate_to_number("")


def test_expression_maximum_are_thirty_chars():
    long_expression = "1111111111" "1111111111" "1111111111" "1"  # 10 chars
    with pytest.raises(ValueError):
        translate_to_number(long_expression)


def test_expression_with_invalid_chars():
    with pytest.raises(ValueError):
        translate_to_number("I-****-MY_JOB")
