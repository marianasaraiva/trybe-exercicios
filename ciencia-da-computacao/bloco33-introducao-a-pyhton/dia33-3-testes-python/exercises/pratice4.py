# Exercício 4 Baseado no exercício anterior, escreva uma função que, dado uma
# lista de emails, deve retornar somente os emails válidos. Caso uma exceção
# ocorra, apenas a escreva na tela.
# Exemplo: ["nome@dominio.com", "errad#@dominio.com", "outro@dominio.com"] ->
# ["nome@dominio.com", "outro@dominio.com"]

# Código:
def filter_valid_emails(emails):
    valid_emails = []
    for email in emails:
        try:
            validate_email(email)
        except ValueError as exc:
            print(exc)
        else:
            valid_emails.append(email)
    return valid_emails


# Testes:
def test_if_dont_have_emails_returns_empty_list():
    assert filter_valid_emails([]) == []


def test_only_valid_emails():
    emails = ["username@website.com"]
    expected_emails = ["username@website.com"]
    assert filter_valid_emails(emails) == expected_emails


def test_invalid_emails_should_be_filtered():
    emails = ["inv*alid@website.com"]
    expected_emails = []
    assert filter_valid_emails(emails) == expected_emails


def test_valid_and_invalid_emails_returns_only_valids():
    emails = ["username@website.com", "inv*alid@website.com"]
    expected_emails = ["username@website.com"]
    assert filter_valid_emails(emails) == expected_emails
