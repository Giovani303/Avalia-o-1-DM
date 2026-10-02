# Guia Turístico de São Paulo

SPA (Single Page Application) feita em React + Vite como projeto do hackathon de 8 horas. Mostra uma seleção de parques, museus e lugares para comer em São Paulo, com um sistema simples de favoritos.

## Tecnologias

- React 18
- Vite
- react-router-dom (navegação entre páginas)
- CSS puro com Flexbox

## Funcionalidades

- **Componentização**: Header, Footer, Card e BackButton são componentes reutilizáveis em pastas próprias.
- **Props e `.map()`**: o componente `Card` recebe os dados de cada lugar via props; a lista é gerada a partir de `src/data/lugares.json` com `.map()`, usando a prop `key`.
- **Estado (`useState`)**: cada lugar pode ser marcado como favorito clicando no botão do card; o contador de favoritos atualiza em tempo real.
- **Roteamento**: duas rotas (`/` e `/lugares`) com `BrowserRouter`, `Routes`, `Route` e `Link`, além de um botão de voltar reutilizável.
- **Layout responsivo**: Flexbox no header e na lista de cards.

## Imagens

As fotos de cada lugar vêm de URLs do Wikimedia Commons (`thumb.wikimedia.org`), referenciadas diretamente em `src/data/lugares.json`. Não é preciso baixar nem incluir nenhum arquivo de imagem no repositório.

Se alguma imagem não carregar, pegue um novo link acessando a API de resumo da Wikipédia:

```
https://pt.wikipedia.org/api/rest_v1/page/summary/NOME_DO_ARTIGO
```

e copiando o valor completo de `thumbnail.source` (atenção: o nome do arquivo aparece duas vezes na URL, uma na pasta e outra no final prefixada com o tamanho, ex. `330px-`).

A pasta `public/imagens/` existe apenas como alternativa, caso você prefira usar fotos próprias — nesse caso, troque o valor de `"imagem"` no JSON por um caminho local, como `/imagens/ibirapuera.jpg`.

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Estrutura de pastas

```
src/
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── Card/
│   └── BackButton/
├── data/
│   └── lugares.json
├── pages/
│   ├── Home.jsx
│   └── Lista.jsx
├── App.jsx
└── main.jsx
```

## Deploy

Aplicação publicada na Vercel: **[cole aqui o link da sua aplicação]**

## Autor(a)

[Seu nome aqui]
