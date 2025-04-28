import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import chatbotRoutes from "./routes/chatbotRoutes";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/chatbot', chatbotRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});