# 🪑 Furniro Web

<div align="center">
  
  ![Furniro Web](https://img.shields.io/badge/Furniro-Web-B88E2F?style=for-the-badge&logo=furniture&logoColor=white)
  ![Status](https://img.shields.io/badge/Status-Finalizado-brightgreen?style=for-the-badge)
  
</div>

Projeto em grupo desenvolvido durante o **Programa de Bolsas React - Junho/25**.  
A proposta foi reconstruir fielmente, em React + TypeScript e Tailwind CSS, as páginas do e-commerce fictício **Furniro**, seguindo fielmente o design fornecido no Figma com foco em responsividade e experiência do usuário.

---

## 🚀 Tecnologias Utilizadas

<div align="center">
  
  <img src="https://skillicons.dev/icons?i=react,typescript,vite,tailwind,nodejs,git,github,figma,vscode" alt="Tech Stack" />
  
</div>

### 🔧 **Frontend**
- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool ultra-rápida
- **Tailwind CSS** - Framework CSS utility-first
- **React Router DOM** - Roteamento para SPAs
- **Axios** - Cliente HTTP para requisições

### 🎨 **UI/UX & Componentes**
- **@splidejs/react-splide** - Carrossel responsivo e acessível
- **React Icons** - Biblioteca abrangente de ícones
- **React Toastify** - Notificações elegantes e customizáveis

### 🛠 **Desenvolvimento & Qualidade**
- **ESLint** - Linter para identificar padrões problemáticos
- **Prettier** - Formatador de código automático
- **TypeScript ESLint** - Regras ESLint específicas para TS

### 📊 **Backend Simulado**
- **JSON Server** - API REST simulada para desenvolvimento

---

## ✨ Funcionalidades Principais

🎯 **Navegação Intuitiva**
- Roteamento dinâmico com React Router
- Navegação fluida entre páginas
- URLs amigáveis e semânticas

🛍️ **Catálogo de Produtos**
- Listagem dinâmica com carrossel interativo
- Páginas individuais para cada produto
- Sistema de filtros por categoria
- Paginação responsiva na listagem

🎨 **Interface Responsiva**
- Design mobile-first
- Layout adaptável para todos os dispositivos
- Animações e transições suaves

🔔 **Feedback Visual**
- Notificações toast para ações do usuário
- Estados de hover e interação
- Validação de formulários em tempo real

📧 **Newsletter & Validação**
- Formulário de newsletter no footer
- Validação manual (sem alert/required nativo)
- Feedback visual para entradas inválidas

🎪 **Experiência Rica**
- Carrossel de produtos na home
- Galeria de imagens nos produtos
- Seção de produtos relacionados

---

## 🛠 Como Rodar o Projeto

### 📋 **Pré-requisitos**

Certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior) - [Download](https://nodejs.org/)
- **npm** ou **yarn** como gerenciador de pacotes
- **Git** para controle de versão

### 🚀 **Instalação e Execução**

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/furniro-web.git
cd furniro-web
```

2. **Instale as dependências:**
```bash
npm install
# ou com yarn
yarn install
```

3. **Inicie o servidor JSON (Backend simulado):**
```bash
npx json-server src/services/db.json --port 3001 --watch
```
> 🌐 API disponível em: [http://localhost:3001/products](http://localhost:3001/products)

4. **Execute o projeto em desenvolvimento:**
```bash
npm run dev
# ou com yarn
yarn dev
```
> 🎉 Aplicação disponível em: [http://localhost:5173](http://localhost:5173)

### 📦 **Scripts Disponíveis**

```bash
npm run dev      # Executa em modo desenvolvimento
npm run build    # Gera build para produção
npm run preview  # Visualiza o build localmente
npm run lint     # Executa verificação do ESLint
```

---

## 📁 Arquitetura do Projeto

```
📦 furniro-web/
├── 📂 public/                     # Arquivos estáticos
├── 📂 src/
│   ├── 📂 assets/                 # Recursos estáticos
│   │   ├── 📄 logo.svg
│   │   └── 📂 images/             # Imagens organizadas por seção
│   │       ├── 📂 carousel-images/
│   │       ├── 📂 category-images/
│   │       ├── 📂 features-images/
│   │       ├── 📂 hero-images/
│   │       ├── 📂 mosaic-images/
│   │       ├── 📂 search-images/
│   │       └── 📂 social-images/
│   ├── 📂 components/             # Componentes reutilizáveis
│   │   ├── 📄 Header.tsx          # Cabeçalho responsivo
│   │   ├── 📄 Footer.tsx          # Rodapé com newsletter
│   │   ├── 📄 Carousel.tsx        # Carrossel de produtos
│   │   ├── 📄 Product.tsx         # Card de produto
│   │   ├── 📄 CategorySection.tsx # Seção de categorias
│   │   ├── 📄 FeaturesSection.tsx # Seção de diferenciais
│   │   └── 📄 ... (outros)
│   ├── 📂 pages/                  # Páginas da aplicação
│   │   ├── 📄 Home.tsx            # Página inicial
│   │   ├── 📄 Shop.tsx            # Catálogo de produtos
│   │   └── 📄 SingleProduct.tsx   # Detalhes do produto
│   ├── 📂 services/               # Integração com APIs
│   │   └── 📄 db.json             # Base de dados simulada
│   ├── 📂 types/                  # Definições TypeScript
│   │   ├── 📄 ProductType.tsx     # Tipagem de produtos
│   │   └── 📄 react-splide.d.ts   # Declarações Splide
│   ├── 📂 utils/                  # Utilitários e helpers
│   │   └── 📄 ScrollToTop.tsx     # Componente de scroll
│   ├── 📄 App.tsx                 # Componente raiz
│   ├── 📄 main.tsx                # Ponto de entrada
│   └── 📄 index.css               # Estilos globais
├── 📄 package.json                # Dependências e scripts
├── 📄 tsconfig.json               # Configuração TypeScript
├── 📄 tailwind.config.js          # Configuração Tailwind
├── 📄 vite.config.ts              # Configuração Vite
├── 📄 eslint.config.js            # Configuração ESLint
└── 📄 README.md                   # Documentação
```

### 🏗️ **Padrões de Organização**

- **📁 Separação por funcionalidade:** Componentes, páginas e serviços organizados logicamente
- **🎨 Assets por contexto:** Imagens categorizadas por seção de uso
- **🔧 Configurações centralizadas:** Todos os arquivos de config na raiz
- **📝 Tipagem completa:** Interfaces TypeScript para todas as estruturas de dados

---

## 📝 Fluxo de Desenvolvimento e Git

- **🎯 `main`** - Branch principal (produção)
- **🔧 `developer`** - Branch de desenvolvimento
- **✨ `feature/nome-da-feature`** - Branches para novas funcionalidades

### 📦 **Conventional Commits**

Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: adiciona carrossel de produtos na home
fix: corrige responsividade do header mobile
docs: atualiza README com novas tecnologias
style: ajusta espaçamentos no footer
refactor: reorganiza estrutura de componentes
test: adiciona testes para componente Product
```

### 🗂 **Organização de Tarefas (Trello)**

```
📋 A Fazer          ➡️ 🔄 Em Progresso    ➡️ 👀 Revisão de Código    ➡️ ✅ Concluído
```

---

## 📊 Status do Desenvolvimento

### 🎯 **Páginas Implementadas**

| Página | Status | Responsividade | Funcionalidades | Observações |
|--------|--------|----------------|-----------------|-------------|
| 🏠 **Home** | ✅ Completa | ✅ Mobile-first | Carrossel, Hero, Categorias | Layout totalmente funcional |
| 🛍️ **Shop** | ✅ Completa | ✅ Mobile-first | Filtros, Paginação, Toast | Integração com JSON Server |
| 📦 **Produto** | ✅ Completa | ✅ Mobile-first | Galeria, Detalhes, Relacionados | Rota dinâmica por ID |
| ℹ️ **About** | 🔜 Estruturada | ✅ Mobile-first | - | Conteúdo em desenvolvimento |
| 📞 **Contact** | 🔜 Estruturada | ✅ Mobile-first | - | Formulário em implementação |

### 🎨 **Componentes Desenvolvidos**

| Componente | Status | Reutilização | Testes |
|------------|--------|--------------|--------|
| Header | ✅ | Alta | ⏳ |
| Footer | ✅ | Alta | ⏳ |
| Product Card | ✅ | Alta | ⏳ |
| Carousel | ✅ | Média | ⏳ |
| CategorySection | ✅ | Baixa | ⏳ |
| FeaturesSection | ✅ | Baixa | ⏳ |

---

## ✅ Requisitos do Projeto

### 🎯 **Funcionalidades Obrigatórias**

- ✅ Header fixo e responsivo com navegação
- ✅ Footer funcional com links externos e validação de e-mail
- ✅ Carrossel de produtos na página inicial
- ✅ Roteamento dinâmico com React Router
- ✅ Feedback visual para interações (hover, toast)
- ✅ Integração com JSON Server para dados de produtos
- ✅ Paginação na página de catálogo
- ✅ Estrutura completa com TypeScript
- ✅ Formulário com validação manual (sem alert nativo)
- ✅ Versionamento com commits semânticos
- ✅ Layout totalmente responsivo

### 🏆 **Diferenciais Implementados**

- ✅ Animações suaves com CSS/Tailwind
- ✅ Estados de loading para requisições
- ✅ Sistema de filtros avançado
- ✅ Galeria de imagens nos produtos
- ✅ Seção de produtos relacionados
- ✅ Otimização de performance com lazy loading
- ✅ Acessibilidade (ARIA labels, navegação por teclado)

---

## 📅 Cronograma do Projeto

| Marco | Data Limite | Status |
|-------|-------------|---------|
| 🎯 Criação do repositório | **02/06/2025 - 17h30** | ✅ |
| 🚀 Entrega final | **09/06/2025 - 17h30** | ⏳ |
| 🎤 Apresentação | **10/06/2025 - 14h30** | ⏳ |

---

## 🤝 Equipe e Contribuições

Este projeto foi desenvolvido em equipe como parte do **Programa de Bolsas React**, promovendo:

- 👥 **Colaboração em grupo** - Divisão de tarefas e code review
- 🔄 **Controle de versões** - Git flow e conventional commits  
- 📋 **Gestão de projeto** - Organização via Trello
- 🎨 **Design fidelity** - Implementação precisa do layout Figma
- 💻 **Boas práticas** - Clean code e padrões de desenvolvimento

---

<div align="center">
  
  **Desenvolvido com ❤️ durante o Programa de Bolsas React**
  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com)
  [![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=for-the-badge&logo=github)](https://github.com)
  
</div>
