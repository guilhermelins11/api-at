
# API de Gestão 
Node.js + Prisma + MongoDB

> Este projeto fornece uma **API REST** para operações CRUD de recursos (ex.: itens, usuários, pedidos — ajuste conforme sua modelagem). Foi desenvolvido com **Node.js**, **Prisma** (ORM) e **MongoDB** como banco NoSQL.


---

## ✨ Funcionalidades
- Endpoints REST para criar, listar, buscar por ID e remover recursos.
- Integração com **MongoDB** via **Prisma**.
- Estrutura preparada para **validações**, **tratamento de erros** e **logs**.
- Deploy via Railway.

---

## 🧱 Arquitetura (visão geral)
>- **`server.js`**: ponto de entrada do servidor (Express ou HTTP).
>- **`prisma/`**: schema e client do Prisma.
---

## 🛠️ Tecnologias
>- **Node.js**
>- **Prisma ORM** (provider MongoDB)
>- **MongoDB**
>- **JavaScript** 

---

## ✅ Pré-requisitos
- Node.js 18+ 
- Conta/instância de MongoDB (Atlas ou local)

---

## ⚙️ Configuração e Execução (Local)

1. **Clone o repositório**
   ```bash
   git clone https://github.com/guilhermelins11/api-at
   cd api-at
   code .
2. **Instale as dependências**
   ```bash
   npm install
3. **Configure as variáveis de ambiente:**
   ```bash
   Crie um arquivo .env:
   DATABASE_URL="mongodb+srv://<usuario>:<senha>@<cluster>/<database>?retryWrites=true&w=majority"
4. **Gere o client do Prisma:**
   ```bash
   npx prisma generate
   npx prisma db push
5. **Execute o servidor:**
   ```bash
   node server.js
   OU
   npm run dev

