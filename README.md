<p align="center">
<img src="./assets/readme.png">
</p>

<p align="center">
League Journal - Aplicativo para fazer um planejador de LoL
</p>

![Tux, the Linux mascot](/assets/screenshot.jpg)

## Funcionalidades

- **Seleção de servidor** - A aplicação funciona em qualquer servidor oficial da Riot
- **Cadastro de perguntas** - Cadastre perguntas para serem feitas durante a tela de carregamento
- **Cadastro de lembretes** - Cadastre perguntas para serem exibidos antes da partida iniciar
- **Partida ao vivo** - O app procura a partida sendo jogada e monta com informações dos times
- **Histórico de partidas recentes** - em desenvolvimento

## Sobre

Sempre joguei LoL mas nunca soube o que estava errando nas minhas partida. A ideia do aplicativo é ter um plano de jogo montado durante a tela de carregamento para que o jogador consiga identificar aonde está errando.

O objetivo do app é:

- Não usar análise de dados, todas as perguntas e lembretes devem partir do jogador
- Não se importar com rank nem quem é aliados/adversários
- Crescer com feedback dos jogadores

## Desenvolvendo

Clone e instale

```bash
git clone https://github.com/RafaelGiro/league-journal.git
cd league-journal
npm i
```

Incie o servidor de desenvolvimento do expo

```bash
npm run client
```

## Desenvolvendo com backend  

Ver: [league-journal-web](https://github.com/RafaelGiro/league-journal-web)

É necessário uma chave de desenvolvimento da [Riot API](https://developer.riotgames.com/).