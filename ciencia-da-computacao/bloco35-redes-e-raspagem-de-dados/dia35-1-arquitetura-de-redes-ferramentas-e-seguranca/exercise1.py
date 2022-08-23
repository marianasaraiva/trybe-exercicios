# Exercício 1: O primeiro server que iremos utilizar é o nosso velho amigo
# HTTP, na camada de aplicação. Você pode tanto criar um, como utilizar um dos
# projetos ou exercícios dos módulos anteriores. A ideia é utilizarmos os
# conhecimentos do conteúdo e a ferramenta cURL para realizarmos uma chamada
# HTTP para ele. O projeto deve ter rotas GET e POST para que seja possível
# enviar requisições para os endpoints e receber respostas, assim como já nos
# acostumamos a receber via browser ou utilizando programas como o Postman.

# Caso tenha dificuldades maiores, você pode utilizar o Postman para converter
# uma requisição em cURL, é só fazer a requisição nele como você já sabe e
# depois clicar no botão code (que fica embaixo do save) e escolher cURL.

# 1. Faça uma chamada GET, utilizando o cURL.
# curl localhost:3000

# 2. Faça uma chamada POST, utilizando o cURL, passando um JSON no body da
# requisição.
# curl -X POST \
#     -H 'Content-Type: application/json' \
#     -d '{ "foo": "bar" }' \
#     localhost:3000


# 3. Faça uma chamada qualquer, utilizando o cURL, passando um header na
# requisição.
# curl --request POST \
#     --header 'Content-Type: application/json' \
#     --header 'Authorization: ApiKey EXAMPLE-TOKEN' \
#     --data '{ "foo": "bar" }' \
#     localhost:3000


# Exercício 2: Ainda utilizando o cURL, vamos explorar mais alguns conceitos
#  do HTTP. Relembre que falamos que o HTTP organiza e dá significado aos
#  dados encapsulados nessa camada. Por exemplo: ao vermos um 200 tanto nós
#  quanto um client HTTP sabemos que aquela request foi realizada com sucesso.
#  Vamos explorar isso com o cURL.

# 1. Faça uma chamada GET, utilizando o cURL, para "google.com".
# curl google.com

# 2. Faça uma nova chamada a "google.com", porém agora utilizando o parâmetro
# -L ou --location, que serve para "seguir redirecionamentos".
# curl -L google.com


# Exercício 3: Agora utilizando o wget, pegue o conteúdo da página do site da
#  Trybe, depois abra o arquivo HTML baixado em seu navegador.
#  Faça o mesmo processo com outras páginas web.
# wget betrybe.com


# Exercício 4: Agora vamos para a camada de transporte. Crie um servidor TCP
# usando o módulo socketserver que já vem embutido com o Python.
# Nosso servidor TCP deverá:
# Responder com um "Olá, client", logo quando estabelecer uma conexão.
# Imprimir no console todo dado recebido.
# Responder com os dados recebidos (como um eco).
# Utilizar a porta 8085.
from socketserver import TCPServer, StreamRequestHandler

ADDRESS = "", 8085


class EchoHandler(StreamRequestHandler):
    """Responde requisições repetindo o que foi recebido."""

    def handle(self):
        # Usar b'' é um jeito literal de escrever bytes em ascii
        self.wfile.write(b"Hello, World!\n")
        # self.wfile e self.rfile são canais de entrada e saída
        # programados para ter a mesma interface de arquivos!
        for line in self.rfile:
            # esta linha responde o cliente
            self.wfile.write(line)
            # esta linha imprime no console
            print(line.decode("ascii").strip())


if __name__ == "__main__":
    # usando with nosso TCPServer vai arrumar a casa direitinho quando
    # encerrado
    with TCPServer(ADDRESS, EchoHandler) as server:
        server.serve_forever()


# Exercício 5: Utilizando o comando telnet ou o Netcat (nc):
# Conecte no server do exercício anterior e envie informações,
#  o server deverá imprimir as mensagens enviadas no console.
# Pare o servidor e verifique o que aconteceu com a conexão que estava
#  aberta com o comando telnet ou nc.
# telnet 127.0.0.1 8085
# Após estabelecer a conexão, digite a mensagem e tecle enter para enviá-las.


# Exercício 6: Reinicie o servidor TCP e agora faça uma requisição utilizando
# o cURL (HTTP).
# Perceba o que é exibido no console do server, já que não estamos utilizando
# o HTTP nele. Perceba também que o comando cURL não recebe uma resposta HTTP
# com sentido (um status code 200, por exemplo), de modo que ele não sabe que
# aquela requisição chegou ao fim.
# curl localhost:8085


