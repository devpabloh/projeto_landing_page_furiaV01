import { Request, Response } from 'express';
// import { getGemmaResponse } from '../services/huggingFaceService';
import { getSimpleResponse } from '../services/simpleChatbotService';

export const handleChatbotRequest = async (req: Request, res: Response) => {
  try {
    console.log('Requisição recebida:', req.body);
    
    const { message } = req.body;
    
    if (!message) {
      console.log('Mensagem não fornecida');
      return res.status(400).json({ error: 'Mensagem não fornecida' });
    }
    
    // Usando a implementação simples em vez da API do Hugging Face
    const response = getSimpleResponse(message);
    
    return res.status(200).json({ message: response });
  } catch (error) {
    console.error('Erro no chatbot:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
};