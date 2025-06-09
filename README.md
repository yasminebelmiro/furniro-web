# 🪑 Furniro Web

Projeto em grupo desenvolvido durante o Programa de Bolsas React - Abril/25.  
A proposta foi reconstruir fielmente, em React + TypeScript e Tailwind, as páginas do e-commerce fictício Furniro, de acordo com o design fornecido no Figma.

---

## ✅ Funcionalidades principais

- Navegação entre páginas com React Router
- Listagem de produtos com carrossel e página individual por item
- Integração com JSON Server para simular banco de dados de produtos
- Filtro por categoria de produto via URL (`/shop?category=living`, etc.)
- Validação de formulário de newsletter no footer (sem `alert` ou `required` nativo)
- Cards com feedback de adição ao carrinho (via Toast)
- Paginação na listagem de produtos
- Layout completamente responsivo
- Controle e versionamento com Git + Conventional Commits

---

## 🚀 Tecnologias utilizadas

- React + Vite
- TypeScript
- Tailwind CSS
- React Router DOM
- SplideJS – carrossel
- JSON Server – simulação de backend
- React Toastify – notificações
- React Icons – biblioteca de ícones
- ESLint + Prettier – padronização de código

---

## 🛠 Como rodar o projeto localmente

### Pré-requisitos

- Node.js (recomendado: v18 ou superior)
- npm ou yarn
- JSON Server instalado globalmente (`npm install -g json-server`)

### Passo a passo

1. Clone o repositório:

```bash
git clone git@github.com:seu-usuario/furniro-web.git
cd furniro-web
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Inicie o JSON Server com os dados simulados:

```bash
npm run server
```

> Isso vai disponibilizar os produtos em: [http://localhost:3001/products](http://localhost:3001/products)

4. Em outro terminal, rode o projeto React:

```bash
npm run dev
```

> Acesse no navegador: [http://localhost:5173](http://localhost:5173)

---

## 🧩 Estrutura de Pastas (resumida)

```
furniro-web/
├── public/                   # Arquivos públicos e favicon
├── src/
│   ├── assets/               # Imagens, ícones e logos
│   ├── components/           # Componentes reutilizáveis (Header, Footer, Card, etc.)
│   ├── data/                 # Dados mockados para JSON Server
│   ├── hooks/                # Hooks customizados
│   ├── layouts/              # Estruturas de layout das páginas
│   ├── pages/
│   │   ├── Home/
│   │   ├── Shop/
│   │   ├── Product/
│   │   └── NotFound.tsx
│   ├── routes/               # Rotas protegidas e públicas
│   ├── services/             # Funções para requisições à API
│   ├── styles/               # Estilos globais
│   ├── types/                # Tipagens TypeScript
│   ├── utils/                # Funções auxiliares
│   ├── App.tsx               # Componente raiz
│   └── main.tsx              # Ponto de entrada
├── db.json                   # Banco de dados fake para JSON Server
├── tailwind.config.js
├── eslint.config.js
├── .prettierrc
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 📝 Regras de Git e Organização

- **Branch principal:** `main`
- **Branch de desenvolvimento:** `developer`
- **Branches de funcionalidades:** `feature/nome-da-feature`
- **Commits:** padrão [Conventional Commits](https://www.conventionalcommits.org/)
- **Organização de tarefas no Trello:**  
  - To Do  
  - In Progress  
  - Code Review  
  - Done

---

## 🗂 Status das páginas

| Página         | Status | Observações                                       |
|----------------|--------|---------------------------------------------------|
| Home           | ✅     | Layout e carrossel completos                      |
| Shop           | ✅     | Listagem com paginação, filtros e toast          |
| Produto        | ✅     | Página individual dinâmica por ID                |
| About/Contact  | 🔜     | Estrutura criada, conteúdo ainda não funcional   |
| Responsividade | ✅     | Mobile-first concluído                            |

---

## 🔒 Requisitos atendidos

- Header fixo e responsivo com navegação
- Footer funcional com links externos e validação de e-mail
- Carrossel de produtos na Home
- Roteamento dinâmico protegido com React Router
- Feedback visual para ações (hover, toast)
- Integração com JSON Server para produtos
- Paginação na página de Shop
- Estrutura do projeto com TypeScript
- Formulário com validação manual (sem alert/requerido nativo)
- Código versionado com commits semânticos
- Projeto responsivo

---

## 📅 Datas importantes

- Criação do repositório: até **02/06/2025 – 17h30**
- Entrega final: **09/06/2025 – 17h30**
- Apresentação do projeto: **10/06/2025 – 14h30**

---

## 🧠 Observações finais

Este projeto foi um ótimo exercício de desenvolvimento front-end com React + TypeScript, estimulando a colaboração em grupo, controle de versões e organização de tarefas via Trello.
