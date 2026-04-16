# Pedidos App (React Native + Expo + Node + MySQL)

Aplicação mobile para **cadastro de pedidos**, desenvolvida com **React Native (Expo + TypeScript)**, integrada a um backend em **Node.js + Express** e banco de dados **MySQL**.

---

# Arquitetura do Projeto
Mobile (Expo)
↓
API (Node.js + Express)
↓
MySQL
---

# Estrutura do Projeto

## Mobile
pedidos-app/
│
├── src/
│ ├── components/
│ ├── screens/
│ ├── services/
│ ├── models/
│ ├── routes/
│ └── utils/
│
├── App.tsx
└── package.json

---

## Backend
backend/
│
├── src/
│ ├── config/
│ ├── controllers/
│ ├── routes/
│ └── server.js
│
└── package.json


---

# Tecnologias Utilizadas

## Mobile
- React Native
- Expo
- TypeScript
- Axios
- React Navigation

## Backend
- Node.js
- Express
- MySQL
- mysql2
- CORS

---

# Configuração do Mobile

## 1. Criar o projeto


npx create-expo-app pedidos-app -t expo-template-blank-typescript
cd pedidos-app

## 2. Instalar dependências
HTTP

## Navegação

npm install @react-navigation/native
npm install @react-navigation/native-stack

## Dependências nativas

npx expo install react-native-screens
npx expo install react-native-safe-area-context
npx expo install react-native-gesture-handler
npx expo install react-native-reanimated

## Web (opcional)

npx expo install react-dom react-native-web

## Rodar o app

npx expo start

## Configuração do Backend
1. Criar projeto
mkdir backend
cd backend
npm init -y

## 2. Instalar dependências

npm install express mysql2 cors
npm install -D nodemon

## 3. Scripts (package.json)

"scripts": {
  "dev": "nodemon src/server.js",
  "start": "node src/server.js"
}

## Rodar backend
npm run dev

## Banco de Dados (MySQL)
CREATE DATABASE pedidos_db;

USE pedidos_db;

CREATE TABLE pedidos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente VARCHAR(100),
  produto VARCHAR(100),
  quantidade INT,
  valor DECIMAL(10,2)
);

