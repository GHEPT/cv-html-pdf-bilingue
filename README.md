# Eduardo Teodoro — Bilingual HTML & PDF CV

A bilingual, responsive, and print-ready professional CV built with Next.js and TypeScript.

>*Um currículo profissional bilíngue, responsivo e preparado para impressão, desenvolvido com Next.js e TypeScript.*


## Live CV

**View the published CV:**  | ***Acesse o currículo publicado:***  
https://ghept.github.io/cv-html-pdf-bilingue/


## Overview

This project provides a single source of truth for my professional CV across web and PDF formats.

>*Este projeto fornece uma única fonte de conteúdo para meu currículo profissional nos formatos web e PDF.*

Instead of maintaining separate documents for different languages and distribution formats, the CV content is structured as typed data and dynamically rendered according to the selected locale.

>*Em vez de manter documentos separados para diferentes idiomas e formatos de distribuição, o conteúdo do currículo é estruturado como dados tipados e renderizado dinamicamente de acordo com o idioma selecionado.*

The result is a professional CV that can be viewed interactively on the web, switched between Portuguese and English, and exported directly to PDF while preserving a dedicated print layout.

>*O resultado é um currículo profissional que pode ser visualizado de forma interativa na web, alternado entre português e inglês e exportado diretamente para PDF, preservando uma diagramação específica para impressão.*


## Features

### Bilingual Content

The CV supports Portuguese (`pt-BR`) and English (`en-US`) through a centralized and typed content structure. Users can switch languages directly from the interface without navigating to another page.

>*O currículo oferece suporte a português (`pt-BR`) e inglês (`en-US`) por meio de uma estrutura de conteúdo centralizada e tipada. O usuário pode alternar entre os idiomas diretamente pela interface, sem navegar para outra página.*

### HTML and PDF from the Same Source

The web and PDF versions are generated from the same React component structure and content source.

>*As versões web e PDF são geradas a partir da mesma estrutura de componentes React e da mesma fonte de conteúdo.*

The print layout uses dedicated CSS rules through `@media print`, allowing the browser to generate an A4-compatible PDF without requiring a separate PDF generation service.

>*A diagramação para impressão utiliza regras CSS específicas por meio de `@media print`, permitindo que o navegador gere um PDF compatível com o formato A4 sem exigir um serviço separado de geração de documentos.*

### Structured CV Architecture

The application is divided into reusable components representing each section of the CV: Header, Professional Summary, Technical Skills, Professional Experience, Projects, Education, Professional Development, and Languages.

>*A aplicação é dividida em componentes reutilizáveis que representam cada seção do currículo: Cabeçalho, Resumo Profissional, Competências Técnicas, Experiência Profissional, Projetos, Formação, Desenvolvimento Profissional e Idiomas.*

### Technical Skill Levels

Technical skills are organized by category and include proficiency levels. The web interface provides additional context for interpreting those levels while keeping the printed version concise.

>*As competências técnicas são organizadas por categoria e incluem níveis de proficiência. A interface web fornece contexto adicional para a interpretação desses níveis, enquanto mantém a versão impressa objetiva.*

### Responsive Design

The interface adapts to desktop and mobile devices while maintaining a dedicated layout configuration for PDF generation.

>*A interface se adapta a dispositivos desktop e mobile, mantendo uma configuração de layout específica para a geração do PDF.*

### Social Sharing Metadata

The project includes custom metadata, a personalized favicon, and a statically generated Open Graph image for professional link previews on platforms such as WhatsApp and LinkedIn.

>*O projeto inclui metadados personalizados, favicon próprio e uma imagem Open Graph gerada estaticamente para a apresentação profissional do link em plataformas como WhatsApp e LinkedIn.*

### Automated Deployment

Every push to the `main` branch triggers a GitHub Actions workflow that installs the dependencies, builds the application, generates the static export, uploads the GitHub Pages artifact, and automatically deploys the latest version.

>*Cada push para a branch `main` aciona um workflow do GitHub Actions que instala as dependências, realiza o build da aplicação, gera a exportação estática, envia o artefato do GitHub Pages e publica automaticamente a versão mais recente.*


## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- CSS
- Next.js Static Export
- GitHub Actions
- GitHub Pages

>*Tecnologias utilizadas no desenvolvimento, tipagem, estilização, exportação estática e processo automatizado de publicação da aplicação.*


## Project Structure

```text
src/
├── app/
│   ├── globals.css
│   ├── icon.svg
│   ├── layout.tsx
│   ├── opengraph-image.tsx
│   └── page.tsx
│
├── components/
│   └── cv/
│       ├── Cv.tsx
│       ├── CvEducation.tsx
│       ├── CvExperience.tsx
│       ├── CvHeader.tsx
│       ├── CvLanguages.tsx
│       ├── CvProfessionalDevelopment.tsx
│       ├── CvProjects.tsx
│       ├── CvSkills.tsx
│       └── CvSummary.tsx
│
├── content/
│   └── cv.ts
│
└── types/
    └── cv.ts
