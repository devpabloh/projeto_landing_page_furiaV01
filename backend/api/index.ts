import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import chatbotRoutes from "../src/routes/chatbotRoutes";

const app = express();

app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://furia-frontend.vercel.app', 'https://seu-dominio-frontend.com'] 
    : ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
app.use(bodyParser.json());
app.use('/chatbot', chatbotRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.json({ message: 'API Furia funcionando!' });
});

export default app;
