/* CSS */
import styles from "./ChatBotIcon.module.css"

/* Hooks */
import { useState } from "react";

/* Componentes */
import ChatBotInterface from "../ChatBotInterface/ChatBotInterface";

interface ChatBotIconProps{
  imageSrc: string;
  altText?: string;
}

const ChatBotIcon: React.FC<ChatBotIconProps> = ({imageSrc, altText})=>{
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatBot = ()=>{
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.chatbotIconContainer} onClick={toggleChatBot}>
        <img src={imageSrc} alt={altText} className={styles.chatbotIcon} />
      </div>
      {isOpen && <ChatBotInterface onClose={() => setIsOpen(false)} />}
    </>
  )
}

export default ChatBotIcon;