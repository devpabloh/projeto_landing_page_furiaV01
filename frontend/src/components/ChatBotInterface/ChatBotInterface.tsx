import { useState, useRef, useEffect } from 'react';
import styles from './ChatBotInterface.module.css';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatBotInterfaceProps {
  onClose: () => void;
}

const ChatBotInterface: React.FC<ChatBotInterfaceProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Olá! Sou o assistente virtual da Furia. Como posso ajudar?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;
    
    const userMessage: Message = {
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    
    setTimeout(() => {
      const botResponse: Message = {
        text: "Obrigado por sua mensagem! Nossa equipe irá analisá-la em breve.",
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className={styles.chatbotContainer}>
      <div className={styles.chatbotHeader}>
        <h3>Assistente Furia</h3>
        <button className={styles.closeButton} onClick={onClose}>×</button>
      </div>
      
      <div className={styles.chatbotMessages}>
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`${styles.message} ${msg.isBot ? styles.botMessage : styles.userMessage}`}
          >
            <div className={styles.messageContent}>
              {msg.text}
            </div>
            <div className={styles.messageTime}>
              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className={styles.chatbotInput}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Digite sua mensagem..."
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
};

export default ChatBotInterface;