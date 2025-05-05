# Projeto Landing Page Furia - Documentação

## Visão Geral

Este projeto consiste em uma landing page para a organização de e-sports Furía, voltada ao time de CS, desenvolvida com tecnologias modernas tanto para o frontend quanto para o backend. A aplicação oferece informações sobre o time, campeonatos, jogadores e inclui também funcionalidades interativas como um chatbot e formulário de recrutamento.

## Tecnologias Utilizadas

### Frontend

- **React**: Framework JavaScript para construção da interface
- **Typescript**: Superset do JavaScript para adicionar tipagem estática
- **CSS modules**: Estilização modular para componentes / escopo local
- **React Router**: Para navegação entre as páginas
- **React Hook Forms**: Para gerenciamento de formulários
- **Zod**: Para validação de dados
- **i18next**: Para internacionalização (suporte a múltiplos idiomas)

### Backend

- **Node.js**: Plataforma para desenvolvimento de aplicações JavaScript no lado do servidor
- **Express**: Framework para criação de APIs RESTful
- **Typescript**: Para tipagem estática
- **axios**: Para fazer requisições HTTP
- **Cors**: Para permitir requisições de diferentes origens
- **dotenv**: Para carregar variáveis de ambiente
- **nodemon**: Para reiniciar automaticamente o servidor quando houver alterações no código

## Funcionalidades Principais

### 1. Interface Multilíngue

- Suporte para vários idiomas: Português e Inglês.
- troca de idioma através do menu de configuraçães na navegação.

### 2. Tema Claro / Escuro

- Pode alternar entre tema claro e escuro.
- Persistência do tema escolhido pelo usuário.

### 3. Seção de jogadores

- Cards interativos com efeito 3D ao passar o mouse
- Exibição de informações sobre os jogadores do time

### 4. Próximos Campeonatos

- Lista de campeonatos futuros com datas e informações
- Classificação e grupos dos campeonatos

### 5. Destaques da Semana

- Exibição dos próximos jogos importantes
- Informações sobre datas e horários das partidas

### 6. Chatbot Assistente

- Interface de chat interativa
- Respostas automáticas para perguntas comuns sobre o time, jogos e produtos
- Suporte para perguntas em português e inglês

### 7. Formulário de Recrutamento

- Formulário para candidatos interessados em ingressar no time
- Validação de campos com feedback visual
- Upload de arquivos

### 8. Carrossel de Imagens

- Exibição de imagens promocionais
- Navegação entre slides

## Estrutura do Projeto

### Frontend

frontend/
├── src/
│   ├── assets/            # Imagens e recursos estáticos
│   ├── components/        # Componentes React reutilizáveis
│   │   ├── ChatBotIcon/   # Ícone do chatbot
│   │   ├── ChatBotInterface/ # Interface do chatbot
│   │   ├── HighlightsOfTheWeek/ # Componente de destaques da semana
│   │   ├── PlayerCard/    # Card de jogador com efeito 3D
│   │   ├── PlayerForm/    # Formulário de recrutamento
│   │   ├── Settings/      # Configurações (tema e idioma)
│   │   ├── TeamSection/   # Seção de exibição do time
│   │   └── upcomingChampionships/ # Próximos campeonatos
│   ├── context/           # Contextos React (tema, etc.)
│   ├── schemas/           # Esquemas de validação
│   ├── App.tsx            # Componente principal
│   └── i18n.ts            # Configuração de internacionalização

### Backend

backend/
├── src/
│   ├── controllers/       # Controladores da aplicação
│   │   └── chatbotController.ts # Controlador do chatbot
│   ├── routes/            # Rotas da API
│   │   └── chatbotRoutes.ts # Rotas do chatbot
│   ├── services/          # Serviços da aplicação
│   │   ├── huggingFaceService.ts # Serviço de IA (opcional)
│   │   └── simpleChatbotService.ts # Serviço simples de chatbot
│   └── server.ts          # Configuração do servidor

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Configuração do Frontend

1. Navegue até a pasta do frontend:

por exemplo: cd c:\Users\devpa\Documents\GitHub\projeto_landing_page_furiaV01\frontend

2. Instale as dependências:

Instale as dependências utilizando o comando npm install 

3. Inicie o servidor de desenvolvimento:

npm run dev

4. O frontend estará disponível em http://localhost:5173 (ou a porta indicada no terminal)

### Configuração do Backend

1. Navegue até a pasta do backend:

por exemplo: cd cd c:\Users\devpa\Documents\GitHub\projeto_landing_page_furiaV01\backend

2. Instale as dependências:

Instale as dependências utilizando o comando npm install

4. Inicie o servidor:

npm start ou npm run start

5. O backend estará disponível em http://localhost:3000

## Funcionalidades do Chatbot

O chatbot responde a perguntas sobre:

- Informações sobre o time e jogadores
- Horários e datas de jogos
- Campeonatos futuros
- Produtos e loja oficial
- Suporta perguntas em português e inglês

## Personalização

### Alterando Temas

O tema pode ser alterado através do componente Settings, que utiliza o ThemeContext para gerenciar o estado do tema.

## Visual das páginas

### Home
- Dark
![image](https://github.com/user-attachments/assets/136e1a7e-d5ce-4e58-80c5-8409d3ede395)

- Light
![image](https://github.com/user-attachments/assets/fee7c8b2-6146-4279-81e1-007337e5d0a1)


### E-sports
- Dark
![image](https://github.com/user-attachments/assets/e398a672-464b-4496-be85-ab6064e5675e)

- Light
![image](https://github.com/user-attachments/assets/462eea61-10c7-4381-9ed3-380dcd17c54d)


### Carreira
- Dark
![image](https://github.com/user-attachments/assets/4748571a-5a73-447e-abda-83b71d617fba)

- Light
![image](https://github.com/user-attachments/assets/3e9b93a8-82db-422d-9fbc-33a78a891d87)


### Chatbot

- Dark
![image](https://github.com/user-attachments/assets/50ace859-6852-4ed8-b498-4a6b7f6a242b)

- Light
![image](https://github.com/user-attachments/assets/e78ad65c-5b87-4e48-b7e2-438c061a4a98)

Desenvolvido com ❤️ para Furia E-sports.
