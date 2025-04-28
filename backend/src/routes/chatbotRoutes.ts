import { Router } from "express";
import { handleChatbotRequest } from "../controllers/chatbotController";

const router = Router();

// Usando um middleware para envolver a função
router.post('/', (req, res, next) => {
  handleChatbotRequest(req, res).catch(next);
});

export default router;