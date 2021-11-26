import React from "react";
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

describe('Testando App.js', () => {

  beforeEach(()=> {
    render(<App />);
  })

  it('Exercicio 1- Testando de o carregando aparece na tela', () => {
    const loading = screen.getByText(/carregando/i);
    expect(loading).toBeInTheDocument();
  });

  it('Exercicio 2- Verifica se o jogo com o texto `Minecraft` é renderizado na tela após a saída do carregando.', async () => {
    const loadingElement = await screen.findByRole('heading', {name:/Minecraft/i})
    expect(loadingElement).toBeInTheDocument();
  });

  it('Exercicio 3- Na home do projeto, após o carregamento da lista de jogos, clique no link `Ver detalhes` do segundo jogo da lista. E verifique se a tela de detalhes exibe as informações `Release Year` e `Sales`, do jogo correspondente.', async () => {
    const detailsLinks = await screen.findAllByText(/ver detalhes/i)
    
    userEvent.click(detailsLinks[1])

    await waitForElementToBeRemoved(screen.getByText(/carregando.../i))
    const sales = screen.getByText(/sales/i);
    const releaseYear = screen.getByText(/Release Year/i);

    expect(sales).toBeInTheDocument();
    expect(releaseYear).toBeInTheDocument();
  });

    it('Bonus- Verifica se quando clicado no botão voltar na tela de detalhes após o carregando, é renderizada a lista de jogos.', async () => {
      const backButton = await screen.findAllByText(/voltar/i)
      userEvent.click(backButton)

      const loadingElement = await screen.findByRole('heading', {name:/Minecraft/i})
      expect(loadingElement).toBeInTheDocument();
    });
});
