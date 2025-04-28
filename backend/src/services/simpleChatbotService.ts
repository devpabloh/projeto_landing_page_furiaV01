export const getSimpleResponse = (message: string): string => {
  message = message.toLowerCase();
  
  if (message.includes('olá') || message.includes('oi') || message.includes('hey')) {
    return 'Olá! Como posso ajudar você hoje?';
  }
  
  if (message.includes('como você está') || message.includes('tudo bem')) {
    return 'Estou bem, obrigado por perguntar! Como posso ajudar?';
  }
  
  if (message.includes('ajuda') || message.includes('preciso de ajuda')) {
    return 'Estou aqui para ajudar! Por favor, me diga mais sobre o que você precisa.';
  }
  
  if (message.includes('obrigado') || message.includes('valeu')) {
    return 'De nada! Estou sempre à disposição para ajudar.';
  }
  
  return 'Desculpe, não entendi completamente. Poderia reformular sua pergunta?';
};