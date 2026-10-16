# JOVI — Modo Estudante e Formulário Inteligente

Evolução da landing page da Sprint 03 para a Sprint 04 (Front-End Design + Web Development — FIAP).
O projeto apresenta a solução da Challenge — um **Modo Estudante** para a câmera, que organiza as fotos por matéria, e um **Formulário Inteligente** que adapta a câmera ao perfil do usuário — e agora traz também uma **Área do Estudante** com login, que simula o Modo Estudante funcionando.

🔗 **Deploy na Vercel:** _cole aqui o link depois do deploy_
🔗 **Repositório:** https://github.com/Kaue18-py/SPRINT_4_WebDev_FrontEnd

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso no projeto |
| --- | --- |
| **React 19** | Componentização, props, hooks nativos e hooks customizados |
| **Vite** | Ambiente de desenvolvimento e build |
| **React Router (react-router-dom)** | Rotas públicas, rotas privadas e página 404 |
| **Tailwind CSS 4** | Toda a estilização e a responsividade (Desktop, Tablet e Mobile) |
| **API mockada (JSON + fetch)** | Usuários, matérias e fotos consumidos com `fetch` |
| **ESLint** | Padronização do código |
| **Git + Vercel** | Versionamento e deploy |

---

## ✅ Requisitos atendidos

- **Componentização e props:** a página é dividida em componentes reutilizáveis (`SectionHeader`, `Botao`, `CampoFormulario`, `FotoCard`, `FiltroMaterias`…) que recebem dados por props.
- **Rotas públicas e privadas:**
  | Rota | Tipo | Página |
  | --- | --- | --- |
  | `/` | Pública | Landing page (Solução, Público-Alvo, Galeria, Equipe, Contato) |
  | `/login` | Pública | Login |
  | `/area-do-estudante` | **Privada** | Simulação do Modo Estudante (só entra quem está logado) |
  | `*` | Pública | Página 404 |
- **Hooks nativos:** `useState`, `useEffect`, `useContext`, `useMemo`, `useCallback`.
- **Hooks customizados** (pasta `src/hooks`), separando a lógica da parte visual:
  | Hook | O que faz |
  | --- | --- |
  | `useAuth` | Dá acesso ao usuário logado, login e logout (via Context API) |
  | `useFetch` | Consome a API com estados de carregamento, erro e "tentar novamente" |
  | `useForm` | Valores, validação, envio e erros dos formulários (Login e Contato) |
  | `useModoEstudante` | Toda a lógica da Área do Estudante: busca, filtro por matéria, pesquisa e favoritos |
  | `useLocalStorage` | `useState` que salva no navegador (sessão e favoritos) |
  | `useToggle` | Abre e fecha o menu mobile |
  | `useScrollToHash` | Rola até a seção certa ao clicar nos links do menu (`/#contato` etc.) |
- **Consumo de API mockada:** os dados ficam em `React/public/api/*.json` e são buscados com `fetch` pela camada `src/services/api.js`, com um atraso simulado de servidor.
- **Tailwind CSS e responsividade:** layout testado em Desktop, Tablet e Mobile.

---

## 📦 Como instalar as dependências

Pré-requisito: [Node.js](https://nodejs.org/) 20 ou superior.

```bash
git clone https://github.com/Kaue18-py/SPRINT_4_WebDev_FrontEnd.git
cd SPRINT_4_WebDev_FrontEnd/React
npm install
```

> Todo o projeto React fica dentro da pasta **`React`**. Os comandos `npm` devem ser executados lá dentro.

## ▶️ Como executar o projeto

```bash
npm run dev
```

Abra no navegador o endereço mostrado no terminal (normalmente http://localhost:5173).

Outros comandos:

```bash
npm run build     # gera a versão de produção na pasta dist
npm run preview   # roda a versão de produção localmente
npm run lint      # verifica o código com o ESLint
```

## 🖥️ Back-end

O projeto **não tem back-end próprio** e não é preciso subir nenhum servidor além do `npm run dev`.
A API é mockada: os arquivos `usuarios.json`, `materias.json` e `fotos.json` ficam em `React/public/api/` e são servidos pelo próprio Vite (e pela Vercel no deploy).

## 🔐 Usuários e senhas para teste

| E-mail | Senha |
| --- | --- |
| `estudante@jovi.com` | `jovi123` |
| `professor@fiap.com.br` | `fiap2026` |

Como testar a rota privada:
1. Acesse `/area-do-estudante` sem estar logado → você é redirecionado para `/login`.
2. Entre com um dos usuários acima → você volta para a Área do Estudante.
3. Filtre as fotos por matéria, pesquise e favorite (os favoritos ficam salvos no navegador).
4. Clique em **Sair** no menu para encerrar a sessão.

> A autenticação é apenas uma simulação para fins acadêmicos: em um sistema real, a senha seria verificada no back-end.

---

## 🤖 Uso de Inteligência Artificial

Utilizamos o Claude (IA da Anthropic) como apoio na evolução do projeto da Sprint 03 para a Sprint 04. A IA foi usada para revisar o código existente e comparar com os requisitos da entrega, sugerir e implementar a estrutura de rotas públicas e privadas com React Router, criar os hooks customizados (`useAuth`, `useFetch`, `useForm`, `useModoEstudante`, `useLocalStorage`, `useToggle` e `useScrollToHash`), montar a API mockada da Área do Estudante e escrever a primeira versão deste README. Todo o código gerado foi revisado, testado e ajustado pela equipe, e o conteúdo da solução (Modo Estudante, Formulário Inteligente e Novo Layout) foi definido pelo grupo.

---

## 🗂️ Estrutura do projeto

```
SPRINT_4_WebDev_FrontEnd/
├── INTEGRANTES.TXT
├── README.md
└── React/
    ├── public/
    │   ├── api/              # API mockada (usuarios, materias, fotos)
    │   └── imagens/          # telas do app usadas na Galeria
    ├── src/
    │   ├── Components/       # componentes visuais reutilizáveis
    │   ├── contexts/         # AuthContext + AuthProvider (sessão do usuário)
    │   ├── hooks/            # hooks customizados (lógica separada da tela)
    │   ├── pages/            # Home, Login, AreaEstudante, NotFound
    │   ├── services/api.js   # chamadas à API
    │   ├── App.jsx           # definição das rotas
    │   ├── main.jsx
    │   └── index.css         # Tailwind + cores da marca
    ├── vercel.json           # faz as rotas do React funcionarem na Vercel
    └── package.json
```

## 🚀 Deploy na Vercel

1. Em [vercel.com](https://vercel.com), clique em **Add New → Project** e importe este repositório.
2. Em **Root Directory**, selecione a pasta **`React`**.
3. Framework Preset: **Vite** (detectado automaticamente). Build: `npm run build`, Output: `dist`.
4. Clique em **Deploy** e cole o link gerado no topo deste README.

O arquivo `vercel.json` redireciona todas as rotas para o `index.html`; sem ele, recarregar a página em `/login` ou `/area-do-estudante` daria erro 404 na Vercel.

## 👥 Integrantes

Os nomes completos e RMs estão no arquivo [`INTEGRANTES.TXT`](./INTEGRANTES.TXT).
