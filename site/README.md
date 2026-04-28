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

Fallback local implementado para garantir funcionamento offline ou em falhas de requisição.

Conversão de preços:

15000 => R$ 15.000,00
Como Rodar
1. Pré-requisitos
Node.js 18+
npm 9+
2. Instalação
npm install
3. Ambiente de desenvolvimento
npm run dev

Acesse no navegador:

http://localhost:5173
Scripts
npm run dev          # servidor de desenvolvimento
npm run build        # build de produção
npm run preview      # preview da build
npm run lint         # análise de código (ESLint)
npm run type-check   # validação de tipos (TypeScript)
Estrutura do Projeto
src/
├─ assets/        # imagens e recursos estáticos
├─ components/    # UI (header, footer, modal, vitrine)
├─ data/          # fetch + fallback de produtos
├─ pages/         # páginas (Home)
├─ styles/        # Sass global e módulos
├─ types/         # tipagens TypeScript
└─ utils/         # helpers e formatadores
Arquitetura
econverse-front/
├─ src/
├─ public/
├─ index.html
├─ package.json
├─ tsconfig.json
└─ vite.config.ts

Decisões Técnicas
Nenhuma biblioteca de UI utilizada (foco em CSS/Sass puro)
Organização baseada em separação por responsabilidade
Fallback de dados para resiliência da aplicação
Estrutura semântica com SEO básico
Observações
Fonte principal: Poppins (Google Fonts)
Projeto totalmente funcional mesmo sem API externa
Código preparado para fácil escalabilidade
Possíveis Melhorias
Integração com backend real
Paginação ou infinite scroll
Testes unitários (Jest / React Testing Library)
Melhorias de acessibilidade (ARIA)
Otimização de performance (lazy loading)
Contato

Caso este projeto faça parte de um processo seletivo, fico à disposição para esclarecer decisões técnicas ou expandir a solução.

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&height=130&color=0:00ffff,35:4b0082,70:111a3a,100:050816&section=footer"/> ```