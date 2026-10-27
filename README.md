# JOVI - Modo Estudante e Formulário Inteligente

Projeto da Sprint 04 de Front-End Design e Web Development (FIAP), feito a partir da landing page que entregamos na Sprint 03.

A nossa solução para a Challenge tem duas partes: o Modo Estudante, que organiza as fotos da câmera por matéria, e o Formulário Inteligente, que adapta a câmera ao perfil de quem usa.

Deploy na Vercel: (ainda vai adicionar)

Repositório: https://github.com/Kaue18-py/SPRINT_4_WebDev_FrontEnd

## Tecnologias

- React 19
- Vite
- React Router (react-router-dom)
- Tailwind CSS 4
- ESLint
- Git e Vercel

## O que foi feito

### Componentes e props

A página foi dividida em componentes que recebem os dados por props, como `Secao`, `Botao` e `CampoFormulario`.

### Rotas

- `/`: landing page com Solução, Público-Alvo, Galeria, Equipe e Contato
- `*`: página 404

### Hooks

Usamos os hooks do React `useState`, `useEffect` e `useCallback`.

Também criamos hooks próprios na pasta `src/hooks` para deixar a lógica separada das telas:

- `useForm`: valores, validação e envio do formulário de Contato
- `useToggle`: abre e fecha o menu no celular
- `useScrollToHash`: rola até a seção certa quando clica nos links do menu, como `/#contato`

### Envio do formulário

O formulário de Contato é enviado pela função `enviarMensagem`, em `src/services/api.js`. Ela simula o envio com um pequeno atraso, como se fosse um servidor de verdade.

### Responsividade

Toda a estilização foi feita com Tailwind e o layout foi testado no computador, no tablet e no celular.

## Como instalar

É preciso ter o Node.js 20 ou mais recente.

```bash
git clone https://github.com/Kaue18-py/SPRINT_4_WebDev_FrontEnd.git
cd SPRINT_4_WebDev_FrontEnd/React
npm install
```

O projeto React fica dentro da pasta `React`, então os comandos do npm precisam ser rodados lá.

## Como rodar

```bash
npm run dev
```

Depois é só abrir o endereço que aparece no terminal (normalmente http://localhost:5173).

Outros comandos:

```bash
npm run build
npm run preview
npm run lint
```

`build` gera a versão final na pasta `dist`, `preview` roda essa versão localmente e `lint` verifica o código com o ESLint.

## Back-end

O projeto não tem back-end próprio, então não precisa subir nenhum servidor além do `npm run dev`. O envio do formulário de Contato é só simulado no próprio front-end.

## Uso de Inteligência Artificial

Usamos o Claude, da Anthropic, como apoio para passar o projeto da Sprint 03 para a Sprint 04. Ele ajudou a revisar o código que já tínhamos e comparar com os requisitos da entrega, montar as rotas com React Router, criar os hooks customizados, reestilizar o visual do site e escrever a primeira versão deste README. O grupo revisou, testou e ajustou todo o código, e a ideia da solução (Modo Estudante, Formulário Inteligente e Novo Layout) foi definida por nós.

## Estrutura de pastas

```
SPRINT_4_WebDev_FrontEnd/
├── INTEGRANTES.TXT
├── README.md
└── React/
    ├── public/
    │   └── imagens/
    ├── src/
    │   ├── Components/
    │   ├── hooks/
    │   ├── pages/
    │   ├── services/api.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── vercel.json
    └── package.json
```

- `public/imagens`: telas do app usadas na Galeria
- `src/Components`: componentes da página
- `src/hooks`: hooks customizados
- `src/pages`: Home e NotFound
- `src/services/api.js`: simulação do envio do formulário de Contato
- `src/App.jsx`: rotas do site
- `src/index.css`: Tailwind e as cores da marca
- `vercel.json`: configuração para as rotas funcionarem na Vercel

## Deploy na Vercel

1. No site da Vercel, clique em Add New, depois em Project, e importe este repositório.
2. Em Root Directory, escolha a pasta `React`.
3. O Framework Preset deve ser Vite (ele detecta sozinho). O comando de build é `npm run build` e a pasta de saída é `dist`.
4. Clique em Deploy e cole o link gerado no começo deste README.

O `vercel.json` manda todas as rotas para o `index.html`. Sem ele, recarregar a página num endereço que não seja a raiz dá erro 404 da Vercel em vez da nossa página 404.

## Integrantes

Os nomes completos e os RMs estão no arquivo [INTEGRANTES.TXT](./INTEGRANTES.TXT).
