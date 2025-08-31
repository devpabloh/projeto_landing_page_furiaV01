// Configuração da API
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const API_ENDPOINTS = {
  chatbot: `${API_BASE_URL}/chatbot`,
};
