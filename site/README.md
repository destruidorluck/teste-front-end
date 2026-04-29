<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&height=170&color=0:050816,40:111a3a,72:4b0082,100:00ffff&section=header&text=Econverse&fontColor=ffffff&fontSize=42&fontAlignY=35&desc=Teste%20Front-End%20%E2%80%A2%20Landing%20Page%20React&descAlignY=58"/>

<div align="center">

# Econverse Front-End Challenge

### Implementação de landing page com foco em performance, organização e fidelidade ao layout

<p>
  <a href="#visao-geral">Visão Geral</a> |
  <a href="#como-rodar">Como Rodar</a> |
  <a href="#scripts">Scripts</a> |
  <a href="#estrutura">Estrutura</a>
</p>

<p>
  <img src="https://img.shields.io/badge/React-Frontend-0B1020?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-Typed-111827?style=for-the-badge&logo=typescript&logoColor=3178C6" />
  <img src="https://img.shields.io/badge/Sass-Styling-4B0082?style=for-the-badge&logo=sass&logoColor=CC6699" />
  <img src="https://img.shields.io/badge/Vite-Build-062B2B?style=for-the-badge&logo=vite&logoColor=FFD62E" />
</p>

</div>

> Implementação da landing page proposta pela Econverse utilizando boas práticas de componentização, tipagem e organização de estilos.

---

## Visão Geral

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>Experiência</h3>
      <ul>
        <li>Interface moderna baseada no layout do Figma</li>
        <li>Componentes reutilizáveis e desacoplados</li>
        <li>Feedback visual com modal de produto</li>
      </ul>
    </td>
    <td width="50%" valign="top">
      <h3>Tecnologias</h3>
      <ul>
        <li><code>React</code> com <code>TypeScript</code></li>
        <li><code>Vite</code> para build e dev server</li>
        <li><code>Sass</code> modularizado</li>
        <li>ESLint + validação de tipos</li>
      </ul>
    </td>
  </tr>
</table>

---

## O que foi implementado

- Header completo com navegação
- Seção hero com destaque visual
- Categorias de produtos
- Vitrines dinâmicas de produtos
- Banners promocionais
- Seção de marcas
- Newsletter
- Footer estruturado
- Modal de produto com:
  - informações principais
  - controle de quantidade

---

## Fonte de Dados

Produtos consumidos via API oficial:

```text
https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
```

**Fallback local** implementado para garantir funcionamento offline ou em falhas de requisição.

**Conversão de preços:** `15000 => R$ 150,00` (valores em centavos na API)

---

## 🚀 Como Rodar

### Pré-requisitos

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** 9+ (incluído com Node.js)
- **Git** para clonar o repositório

### 1️⃣ Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/teste-front-end.git
cd teste-front-end

# Instale as dependências da raiz
npm install

# Acesse a pasta do site
cd site

# Instale as dependências do site
npm install
```

### 2️⃣ Ambiente de Desenvolvimento

```bash
cd site
npm run dev
```

O projeto estará disponível em: **http://localhost:3000**

> O navegador abrirá automaticamente. Caso contrário, acesse manualmente.

### 3️⃣ Build para Produção

```bash
cd site
npm run build
```

Saída: `site/dist/` - pronto para deploy

### 4️⃣ Preview da Build

```bash
cd site
npm run preview
```

Visualize a build de produção em: **http://localhost:4173**

---

## 📋 Scripts Disponíveis

Todos os scripts devem ser executados dentro da pasta `site/`:

```bash
npm run dev          # Servidor de desenvolvimento com HMR
npm run build        # Build otimizado para produção
npm run preview      # Preview da build compilada
npm run type-check   # Validação de tipos TypeScript
npm run lint         # Análise de código ESLint
```

---

## 🏗️ Estrutura do Projeto

```
teste-front-end/
├── site/
│   ├── src/
│   │   ├── assets/          # Imagens, ícones e recursos estáticos
│   │   ├── components/      # Componentes React reutilizáveis
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── ProductModal.tsx
│   │   │   ├── ProductShowcase.tsx
│   │   │   └── ...
│   │   ├── data/            # Fetch de API e gerenciamento de dados
│   │   │   └── products.ts
│   │   ├── pages/           # Páginas da aplicação
│   │   │   └── Home.tsx
│   │   ├── styles/          # Sass global e módulos
│   │   │   ├── global.scss
│   │   │   ├── header.scss
│   │   │   ├── footer.scss
│   │   │   ├── product-modal.scss
│   │   │   └── ...
│   │   ├── types/           # Tipagens TypeScript
│   │   │   ├── product.ts
│   │   │   └── navigation.ts
│   │   ├── utils/           # Funções utilitárias
│   │   │   └── format.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   ├── vite.config.ts
│   └── README.md
├── package.json
└── README.md (este arquivo)
```

---

## 🎯 Checklist de Requisitos Cumpridos

### ✅ Especificações Técnicas Obrigatórias

- [x] **React + TypeScript**: Implementação completa com tipagem forte
- [x] **Consumo de API JSON**: Integração com endpoint oficial da Econverse
- [x] **Modal ao clicar em produto**: Interatividade conforme layout
- [x] **Pré-processador Sass**: Utilizado em toda a estrutura de estilos
- [x] **Sem bibliotecas UI**: Nenhuma dependência de Bootstrap, Foundation, etc.
- [x] **Fidelidade ao layout**: Pixel-perfect conforme Figma
- [x] **Responsividade**: Funciona em mobile (375px), tablet (768px) e desktop (1920px)

### ✅ Pontos Extras

- [x] **Boas práticas de SEO**:
  - Meta tags descritivas
  - `lang="pt-BR"` no HTML
  - Title e description otimizados
  - Estrutura semântica com Open Graph pronto para implementação

- [x] **HTML Semântico**:
  - `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`
  - Atributos ARIA para acessibilidade
  - Roles e labels descritivos para modal

### ✅ Qualidade do Código

- [x] **Organização do projeto**: Estrutura clara por responsabilidade
- [x] **Lógica bem implementada**: Fetch assíncrono, tratamento de erros, fallback
- [x] **Componentização**: Componentes reutilizáveis e isolados
- [x] **Type-safety**: Tipagem TypeScript em toda a aplicação
- [x] **Validação de tipos**: ESLint + TypeScript configurados

---

## 📱 Responsividade Testada

O projeto foi validado em múltiplas resoluções:

| Dispositivo | Resolução | Status |
|-------------|-----------|--------|
| Mobile      | 375px     | ✅ Funcional |
| Mobile      | 425px     | ✅ Funcional |
| Tablet      | 768px     | ✅ Funcional |
| Tablet      | 1024px    | ✅ Funcional |
| Desktop     | 1440px    | ✅ Pixel-perfect |
| Desktop     | 1920px    | ✅ Funcional |

**Como testar:**
1. Abra o projeto em desenvolvimento: `npm run dev`
2. Pressione `F12` para abrir DevTools
3. Clique no ícone de dispositivo para ativar modo responsivo
4. Teste as resoluções acima

---

## 🔍 Decisões Técnicas

### Stack Escolhida

- **React 18** - Versão estável com melhorias de performance
- **TypeScript** - Segurança de tipos desde o desenvolvimento
- **Vite** - Build rápido e dev server com HMR
- **Sass** - Pré-processador CSS com variáveis e nesting
- **ESLint + TypeScript** - Qualidade de código garantida

### Arquitetura

1. **Separação por Responsabilidade**
   - Componentes apenas para UI
   - Dados em `src/data/`
   - Estilos modularizados por componente

2. **Gerenciamento de Estado**
   - `useState` para estado local (produto selecionado, modal aberto)
   - `useEffect` para side effects (fetch de produtos)

3. **Resiliência**
   - Fallback de dados local em caso de falha de API
   - Tratamento de erros silencioso
   - Validação de tipos em tempo de desenvolvimento

4. **Performance**
   - Componentes otimizados sem re-renders desnecessários
   - Imagens carregadas via CDN (sem otimização local)
   - CSS modularizado para carregamento apenas do necessário

---

## 🎨 Design System

### Cores

- **Primária**: `#3019B2` (roxo)
- **Vermelha**: `#E71837` (destaque)
- **Neutra**: `#000000`, `#FFFFFF`, `#CCCCCC`

### Tipografia

- **Fonte**: Poppins (Google Fonts)
- **Weights**: 400 (regular), 600 (semibold), 700 (bold)

### Componentes Principais

- **ProductCard**: Exibição de produto individual
- **ProductModal**: Detalhes expandidos do produto
- **ProductShowcase**: Grade de produtos
- **Header**: Navegação e barra de busca
- **Footer**: Links e informações adicionais

---

## 🧪 Testes

Atualmente, o projeto inclui:

- ✅ **Type-checking**: `npm run type-check`
- ✅ **Linting**: `npm run lint`

### Recomendado para futuro

```bash
# Adicionar testes unitários
npm install --save-dev jest @testing-library/react @testing-library/jest-dom

# Adicionar testes e2e
npm install --save-dev @playwright/test
```

---

## 📝 Observações

- **Fonte principal**: Poppins via Google Fonts
- **Projeto 100% funcional**: Mesmo sem acesso à API externa, o fallback garante funcionamento
- **Escalável**: Estrutura pronta para adicionar novas páginas e componentes
- **Deployável**: Build otimizada pronta para produção
- **Acessível**: ARIA labels e roles implementados para leitores de tela

---

## ⚙️ Variáveis de Ambiente

Atualmente, o projeto não requer variáveis de ambiente. Se necessário no futuro, use `.env.local`:

```env
VITE_API_URL=https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
```

---

## 🚨 Troubleshooting

### Porta 3000 já está em uso?

```bash
cd site
npm run dev -- --port 3001
```

### Erro ao instalar dependências?

```bash
# Limpe cache do npm
npm cache clean --force

# Remova node_modules e reinstale
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors?

```bash
npm run type-check
# Verifique os erros reportados
```

---

## 📧 Contato

Desenvolvido como teste técnico para a vaga de **Desenvolvedor Front-End Jr** na Econverse.

Caso este projeto faça parte de um processo seletivo, fico à disposição para esclarecer:
- Decisões técnicas e arquiteturais
- Melhorias futuras propostas
- Expansão da solução
- Dúvidas sobre implementação

---

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&height=130&color=0:00ffff,35:4b0082,70:111a3a,100:050816&section=footer"/>
---

## Melhorias enterprise aplicadas (abril de 2026)

- Testes automatizados com `Jest` + `Testing Library`.
- Storybook configurado para desenvolvimento isolado de componentes.
- Integracao de analytics GA4 via `VITE_GA_MEASUREMENT_ID`.
- Lazy loading de imagens em listas/vitrines/modais.
- JSDoc em utilitarios e camada de dados/analytics.

### Novos scripts

```bash
npm run test
npm run test:watch
npm run storybook
npm run build-storybook
```

### Analytics (GA4)

1. Copie `.env.example` para `.env.local`.
2. Defina seu Measurement ID:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Sem a variavel, o tracking fica desativado automaticamente.
