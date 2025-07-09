# 🪑 Furniro Web

<div align="center">
  
  ![Furniro Web](https://img.shields.io/badge/Furniro-Web-B88E2F?style=for-the-badge&logo=furniture&logoColor=white)
  ![Status](https://img.shields.io/badge/Status-Finalizado-brightgreen?style=for-the-badge)
  
</div>

Este desafio individual faz parte da Semana 12 do programa Scholarship | UFMS, IFF e IF Goiano - Front-end Development (React.js) - AWS Cloud Context, promovido pela Compass UOL.
A proposta foi recriar com fidelidade, usando React + TypeScript e Tailwind CSS, as páginas que estavam faltando no desafio da Semana 8 do e-commerce fictício **Furniro**: Cart, Checkout e Contact. O foco principal foi a responsividade e a experiência do usuário, sempre seguindo à risca o layout fornecido no Figma.
Além disso, todas as imagens do projeto foram armazenadas na AWS S3, e a aplicação foi publicada na AWS EC2.



## 🚀 Tecnologias Utilizadas

<div align="center">
  
  <img src="https://skillicons.dev/icons?i=react,typescript,vite,tailwind,nodejs,git,github,figma,vscode" alt="Tech Stack" />
  
</div>

### 🔧 **Frontend**
- **React 19** – Biblioteca moderna para construção de interfaces reativas
- **TypeScript** – Superset do JavaScript com tipagem estática
- **Vite 6** – Ferramenta de build ultra-rápida
- **Tailwind CSS 4** – Framework CSS utility-first
- **React Router DOM 7** – Roteamento moderno para SPAs
- **Axios** – Cliente HTTP para comunicação com APIs
- **Redux + React Redux** – Gerenciamento de estado global
- **Zod** – Validação de schemas TypeScript-friendly

### 🎨 **UI/UX & Componentes**
- **@splidejs/react-splide** – Carrossel responsivo e acessível
- **@splidejs/splide** – Núcleo do Splide para customizações
- **React Icons** – Biblioteca de ícones SVG para React
- **React Toastify** – Sistema de notificações elegante e personalizável
- **@clerk/clerk-react** – Autenticação e gerenciamento de usuários

### 🧩 **Formulários & Validação**
- **react-hook-form** – Manipulação de formulários com performance
- **@hookform/resolvers** – Integração entre React Hook Form e Zod

### 🛠 **Desenvolvimento & Qualidade**

- **Prettier** – Formatador automático de código
- **ESLint + plugins** – Linting e boas práticas de código
- **Tailwind CSS IntelliSense** – Autocompletar e visualização de classes no editor
- **Jest + Testing Library** – Testes unitários e de integração com foco em acessibilidade e usabilidade
- **Redux Logger** – Middleware para debug de ações Redux

### 📊 **Backend Simulado**
- **JSON Server** – API REST fake para desenvolvimento local
  - **Total de Produtos:** 24 itens
  - **Categorias:** Dining, Living e Bedroom
  - **Dados completos** com imagens, descrições e especificações
  - **Imagens** hospedadas via **AWS S3**


## ✨ Funcionalidades Principais

### 🎯 Navegação Intuitiva
- Roteamento dinâmico com React Router DOM
- URLs amigáveis e semânticas
- Proteção de rotas para páginas de Checkout e Contact (usuário precisa estar logado)
- Breadcrumbs com redirecionamento para Home

### 🛍️ Catálogo de Produtos
- Listagem dinâmica com dados via JSON Server
- Filtros por categoria: Dining, Living e Bedroom
- Paginação responsiva
- Páginas individuais de produto
- Botão **Add to Cart** funcional e interativo

### 🛒 Carrinho de Compras
- Sidebar lateral com produtos adicionados
- Edição e remoção de itens direto do sidebar
- Carrinho persistido via Redux
- Páginas de **Cart** e **Checkout** com sincronização total com o sidebar
- Botões de navegação dentro do sidebar: Cart, Checkout, Comparison (apenas navegação)

### 🎨 Interface Responsiva
- Design **mobile-first**
- Layout adaptável para todos os dispositivos
- Animações suaves com transições elegantes
- Componentes adaptáveis com Tailwind CSS

### 🔔 Feedback Visual
- Toasts com React Toastify para ações importantes (ex: pedido feito, formulário enviado)
- Validação de formulários em tempo real com React Hook Form + Zod
- Estados visuais de hover, loading e erro personalizados

### 📧 Newsletter & Formulários
- Formulário de newsletter no rodapé com validação manual
- Formulário de checkput com validação
- Formulário de contato com validação
- Validação customizada 
- Toast de sucesso ao enviar os formulários

### 🎪 Experiência Rica
- Carrossel interativo na Home (Splide)
- Proteção de rota: pagina de **Chekout** e **Contact** exige autenticação com Clerk
- Galeria de imagens nos produtos
- Seção de produtos relacionados
- Todas as imagens hospedadas via AWS S3
- Deploy em instância EC2 com porta pública

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
npx json-server src/services/db.json --port 3000 --watch
```
> 🌐 API disponível em: [http://localhost:3000/products](http://localhost:3000/products)

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
```

---
## ☁️ Demonstração na AWS EC2

A aplicação foi publicada em uma instância **EC2** da AWS, com porta liberada para acesso externo.  
Todas as imagens utilizadas no projeto estão armazenadas em um **bucket S3** público.


### 📹 Vídeo de Demonstração
> O vídeo a seguir mostra a instância EC2 rodando a aplicação, com navegação entre as páginas principais e testes de responsividade, login e funcionamento dos formulários.

[🎥 Assista aqui](https://drive.google.com/file/d/1omUlv1Dba2FryRcDTI8f2Rf_sBxcwBSB/view?usp=sharing)

---




## 📁 Estrutura do Projeto

```bash
├── public/                   # Arquivos públicos
├── src/                      # Código-fonte da aplicação
│   ├── components/           # Componentes reutilizáveis da UI
│   ├── hooks/                # Hooks customizados
│   ├── pages/                # Páginas da aplicação (Cart, Checkout, Contact etc.)
│   ├── redux/                # Configuração do Redux (slices, store)
│   ├── schemas/              # Schemas de validação (Zod)
│   ├── services/             # Serviços (ex: integração com ViaCEP, API do JSON Server)
│   ├── tests/                # Testes com Jest + Testing Library
│   ├── types/                # Tipagens globais TypeScript
│   ├── utils/                # Funções utilitárias
│   ├── App.tsx               # Componente raiz da aplicação
│   ├── main.tsx              # Ponto de entrada principal
│   ├── index.css             # Estilos globais
│   ├── setupTests.ts         # Configuração global dos testes
│   └── vite-env.d.ts         # Declarações para o Vite
├── .env                      # Variáveis de ambiente
├── .gitignore                # Arquivos ignorados pelo Git
├── eslint.config.js          # Configurações do ESLint
├── jest.config.js            # Configurações do Jest
├── index.html                # HTML base
├── package.json              # Dependências e scripts
├── tsconfig.json             # Configuração principal do TypeScript
├── tsconfig.app.json         # TSConfig para aplicação
├── tsconfig.node.json        # TSConfig para ambiente Node
├── vite.config.ts            # Configuração do Vite
└── README.md                 # Documentação do projeto
```

### 🏗️ **Padrões de Organização**

- **📁 Separação por funcionalidade:** Componentes, páginas e serviços organizados logicamente
- **🔧 Configurações centralizadas:** Todos os arquivos de config na raiz
- **📝 Tipagem completa:** Interfaces TypeScript para todas as estruturas de dados

---

## 📝 Fluxo de Desenvolvimento e Git

- **🎯 `main`** - Branch principal (produção)
- **🔧 `developer`** - Branch de desenvolvimento
- **✨ `feature/nome-da-feature`** - Branches para novas funcionalidades

## ✅ Requisitos do Projeto

### 🎯 **Funcionalidades Obrigatórias**

- ✅ Header fixo e responsivo com navegação
- ✅ Footer com links externos e formulário de newsletter com validação customizada
- ✅ Carrossel de produtos na página inicial usando Splide
- ✅ Roteamento com React Router DOM com proteção de rotas (Checkout e Contact exigem login)
- ✅ Sidebar do carrinho funcional com Redux (abrir/fechar, adicionar/remover produtos, total dinâmico)
- ✅ Página de Cart exibindo produtos adicionados com opção de alterar quantidade
- ✅ Página de Checkout com preenchimento automático de endereço via API do ViaCEP
- ✅ Página de Contact com validação de campos e toast de envio
- ✅ Integração com JSON Server para simular banco de dados
- ✅ Toasts personalizados com React Toastify para feedback visual
- ✅ Todos os formulários validados com React Hook Form + Zod (sem uso de alert ou required nativo)
- ✅ Layout mobile-first e totalmente responsivo
- ✅ Versionamento com Conventional Commits e estrutura de branches (`developer`, `feature/nome`)
- ✅ Autenticação com Clerk (restrição de acesso e redirecionamentos)
- ✅ Breadcrumb funcional em todas as páginas
- ✅ Todas as imagens hospedadas em bucket AWS S3
- ✅ Deploy da aplicação em instância EC2 da AWS com porta pública
- ✅ Testes automatizados com Jest + Testing Library com cobertura mínima de 80% nas páginas de Checkout e Contact


### 🏆 **Diferenciais Implementados**

- ✅ Animações suaves com CSS/Tailwind
- ✅ Sistema de filtros
- ✅ Galeria de imagens nos produtos
- ✅ Seção de produtos relacionados


## 🤝 Equipe e Contribuições

O projeto completo foi desenvolvido em equipe, promovendo:

- 👥 **Colaboração em grupo** - Divisão de tarefas e code review
- 🔄 **Controle de versões** - Git flow e conventional commits  
- 📋 **Gestão de projeto** - Organização via Trello
- 🎨 **Design fidelity** - Implementação precisa do layout Figma
- 💻 **Boas práticas** - Clean code e padrões de desenvolvimento

### 👥 **Time de Desenvolvimento**

<div align="center">
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/JVSecundo">
          <img src="https://github.com/JVSecundo.png" width="100px;" style="border-radius: 50%;" alt="João Victor Secundo"/>
          <br />
          <sub><b>João Victor Secundo</b></sub>
        </a>
        <br />
        <a href="https://github.com/JVSecundo" title="Code"></a>
      </td>
      <td align="center">
        <a href="https://github.com/yasminebelmiro">
          <img src="https://github.com/yasminebelmiro.png" width="100px;" style="border-radius: 50%;" alt="Yasmine Belmiro"/>
          <br />
          <sub><b>Yasmine Belmiro</b></sub>
        </a>
        <br />
        <a href="https://github.com/yasminebelmiro" title="Code"></a>
      </td>
      <td align="center">
        <a href="https://github.com/italogmfaria">
          <img src="https://github.com/italogmfaria.png" width="100px;" style="border-radius: 50%;" alt="Ítalo Faria"/>
          <br />
          <sub><b>Ítalo Faria</b></sub>
        </a>
        <br />
        <a href="https://github.com/italogmfaria" title="Code"></a>
      </td>
      <td align="center">
        <a href="https://github.com/gessikajulia">
          <img src="https://github.com/gessikajulia.png" width="100px;" style="border-radius: 50%;" alt="Gessika Julia"/>
          <br />
          <sub><b>Gessika Julia</b></sub>
        </a>
        <br />
        <a href="https://github.com/gessikajulia" title="Code"></a>
      </td>
    </tr>
  </table>
</div>
---

<div align="center">
  
  **Desenvolvido com ❤️ durante o programa Scholarship | UFMS, IFF e IF GOIANO - Front-end Development (React.js) - AWS Cloud Context**
  
</div>
