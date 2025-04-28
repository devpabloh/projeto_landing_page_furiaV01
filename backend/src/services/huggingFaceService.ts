import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.HUGGINGFACE_API_KEY;
// Alterando para um modelo disponível na API de inferência
const API_URL = 'https://api-inference.huggingface.co/models/gpt2';

export const getGemmaResponse = async (message: string): Promise<string> => {
  try {
    if (!API_KEY) {
      throw new Error('Chave de API do Hugging Face não encontrada');
    }

    const response = await axios.post(
      API_URL,
      { inputs: message },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // Ajustando o processamento da resposta conforme o formato do modelo
    return response.data[0]?.generated_text || 'Não foi possível gerar uma resposta';
  } catch (error: any) {
    console.error('Erro ao chamar a API do Hugging Face:', error);
    
    if (error.response) {
      console.error('Status do erro:', error.response.status);
      console.error('Dados da resposta:', error.response.data);
    }
    
    throw new Error('Falha ao obter resposta do modelo: ' + (error.message || 'Erro desconhecido'));
  }
};