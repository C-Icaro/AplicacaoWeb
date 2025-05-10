# KeepRoom

## 📝 Descrição

Opção escolhida: 2

&nbsp;&nbsp;&nbsp;&nbsp;O projeto KeepRoom surgiu da necessidade de otimizar o uso de espaços compartilhados em instituições e organizações que lidam com um grande número de discentes e colaboradores. Essa demanda evidencia a importância de um sistema eficiente para a reserva desses espaços de maneira sistemática, controlada e sincronizada.

&nbsp;&nbsp;&nbsp;&nbsp;Para atender a essa necessidade, o KeepRoom propõe uma solução web completa, com banco de dados, backend e frontend totalmente integrados, visando transformar e organizar a dinâmica de utilização desses ambientes.

&nbsp;&nbsp;&nbsp;&nbsp;Este documento apresenta os principais componentes envolvidos no desenvolvimento do projeto, desde sua concepção até os aspectos técnicos e estratégicos.

## 🏗️ Estrutura do Projeto

```
AplicacaoWeb/
├── assets/           # Arquivos estáticos (imagens, ícones, etc.)
├── config/           # Configurações do projeto
├── controllers/      # Controladores da aplicação
├── documents/        # Documentação do projeto
├── models/          # Modelos do banco de dados
├── routes/          # Rotas do sistema
├── services/        # Serviços auxiliares do sistema
├── tests/           # Testes automatizados
├── .gitignore       # Arquivos ignorados pelo Git
├── package.json     # Dependências e scripts do projeto
├── server.js        # Arquivo principal da aplicação
└── README.md        # Este arquivo
```

### 📁 Descrição das Pastas

- **assets/**: Contém todos os recursos estáticos do projeto como imagens, ícones e outros arquivos de mídia.
- **config/**: Arquivos de configuração do projeto, como variáveis de ambiente e configurações do banco de dados.
- **controllers/**: Controladores que gerenciam as requisições HTTP.
- **documents/**: Documentação do projeto=.
- **models/**: Definições dos modelos de dados e esquemas do banco de dados.
- **routes/**: Definição das rotas do sistema.
- **services/**: Serviços auxiliares do sistema.
- **tests/**: Testes automatizados da aplicação.

### 🛠️ Arquivos Principais

- **server.js**: Ponto de entrada da aplicação, configuração do servidor Express.
- **package.json**: Gerenciamento de dependências e scripts do projeto.
- **.gitignore**: Lista de arquivos e diretórios ignorados pelo Git.

## ⚙️ Como Executar o Projeto Localmente

### Pré-requisitos

- Node.js (versão 14.x ou superior)
- npm (gerenciador de pacotes do Node.js)
- Git

### Passos para Execução

1. **Clone o repositório**
   ```bash
   git clone https://github.com/C-Icaro/AplicacaoWeb.git
   cd AplicacaoWeb
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor**
   ```bash
   npm start
   ```

4. **Acesse a aplicação**
   - Abra seu navegador
   - Acesse `http://localhost:3000`
