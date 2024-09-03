const admin = require("firebase-admin");

// Importa a biblioteca dotenv, que carrega variáveis de ambiente do arquivo .env
const dotenv = require("dotenv");

// Configura o dotenv para carregar as variáveis de ambiente para process.env
dotenv.config();

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  }),
});

const auth = admin.auth();
module.exports = auth;
