// Serviço de chatbot simples com respostas variadas baseadas em palavras-chave

export const getSimpleResponse = (message: string): string => {
  // Converter a mensagem para minúsculas para facilitar a comparação
  const lowerMessage = message.toLowerCase();
  
  // Verificar palavras-chave na mensagem e retornar respostas apropriadas
  if (lowerMessage.includes('olá') || lowerMessage.includes('ola') ||  lowerMessage.includes('oi') || lowerMessage.includes('opa') ||
  lowerMessage.includes('e aí') ) {
    return "Olá! Como posso ajudar você hoje?";
  }

  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('and there')) {
    return "Hello! How can I help you today?";
  }
  
  if (lowerMessage.includes('quem é você') || lowerMessage.includes('seu nome')) {
    return "Sou o assistente virtual da Furia, estou aqui para responder suas perguntas sobre o time, campeonatos e produtos!";
  }

  if (lowerMessage.includes('who are you') || lowerMessage.includes('your name')) {
    return "I'm Furia's virtual assistant, I'm here to answer your questions about the team, championships and products!";
  }
  
  if (lowerMessage.includes('horário') || lowerMessage.includes('horários') || lowerMessage.includes('horario') || lowerMessage.includes('horarios') || lowerMessage.includes('jogo') || lowerMessage.includes('jogos') || lowerMessage.includes('partida') || lowerMessage.includes('partidas') || lowerMessage.includes('próximo')  ) {
    return "Nosso próximo jogo será no dia 09 de maio às 19:00, na liga PGL Astana 2025. Mas também teremos jogos dia 18 de maio às 20:00 na liga IEM Dallas 2025 e 31 de junho às 19:00 na liga BLAST.tv Austin Major 2025. ";
  }

  if (lowerMessage.includes('time') || lowerMessage.includes('schedules') ||lowerMessage.includes('game') || lowerMessage.includes('games') || lowerMessage.includes('match') || lowerMessage.includes('matches') || lowerMessage.includes('next') ) {
    return "Our next game will be on May 9th at 7:00 PM in the PGL Astana 2025 league. But we will also have games on May 18th at 8:00 PM in the IEM Dallas 2025 league and June 31st at 7:00 PM in the BLAST.tv Austin Major 2025 league.";
  }
  
  if (lowerMessage.includes('loja') || lowerMessage.includes('comprar') || lowerMessage.includes('camisa') || lowerMessage.includes('produto')) {
    return `Você pode visitar nossa loja oficial em https://www.furia.gg/ para conferir todos os produtos!`;
  }
  
  if (lowerMessage.includes('time') || lowerMessage.includes('jogadores') || lowerMessage.includes('equipe')) {
    return "Nossa equipe atual conta com os melhores jogadores do Brasil! Visite a seção 'E-Sports' no site para conhecer todos os membros.";
  }
  
  if (lowerMessage.includes('campeonato') || lowerMessage.includes('torneio') || lowerMessage.includes('competição')) {
    return "Estamos participando de vários campeonatos este ano! O próximo é o Campeonato Brasileiro Série A que acontecerá em abril.";
  }
  
  if (lowerMessage.includes('obrigado') || lowerMessage.includes('valeu') || lowerMessage.includes('agradeço')) {
    return "Por nada! Estou sempre à disposição para ajudar. Tem mais alguma pergunta?";
  }

  if (lowerMessage.includes('thank you') || lowerMessage.includes('it cost') || lowerMessage.includes('I thank')) {
    return "You're welcome! I'm always available to help. Do you have any other questions?";
  }
  
  return "Não entendi completamente sua pergunta. Você pode perguntar sobre nossos jogos, campeonatos, loja ou time. Como posso ajudar?";
};