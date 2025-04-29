import { useState, useRef } from 'react';
import styles from './PlayerCard.module.css';

interface PlayerCardProps {
  name: string;
  position: string;
  imageUrl: string;
  backgroundUrl: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ name, position, imageUrl, backgroundUrl }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calcular posição relativa do mouse (de -1 a 1)
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    
    // Aplicar rotação (limitada a 10 graus)
    const rotateY = x * 10;
    const rotateX = -y * 10;
    
    // Aplicar transformação
    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(-10px)`;
    
    // Mover a imagem do jogador baseado na posição do mouse
    const playerImage = card.querySelector(`.${styles.playerImage}`) as HTMLElement;
    if (playerImage) {
      playerImage.style.transform = `translateX(calc(-50% + ${x * 10}px)) translateY(calc(-20px + ${y * 5}px)) translateZ(50px) scale(1.1)`;
    }
  };
  
  const handleMouseEnter = () => {
    setIsHovering(true);
    if (cardRef.current) {
      cardRef.current.classList.add(styles.moving);
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    if (cardRef.current) {
      cardRef.current.classList.remove(styles.moving);
      cardRef.current.style.transform = '';
      
      const playerImage = cardRef.current.querySelector(`.${styles.playerImage}`) as HTMLElement;
      if (playerImage) {
        playerImage.style.transform = '';
      }
    }
  };

  // Suporte para touch
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const touch = e.touches[0];
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calcular posição relativa do toque
    const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((touch.clientY - rect.top) / rect.height) * 2 - 1;
    
    // Aplicar rotação (limitada a 5 graus para touch - mais sutil)
    const rotateY = x * 5;
    const rotateX = -y * 5;
    
    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(-10px)`;
    
    const playerImage = card.querySelector(`.${styles.playerImage}`) as HTMLElement;
    if (playerImage) {
      playerImage.style.transform = `translateX(calc(-50% + ${x * 5}px)) translateY(calc(-20px + ${y * 3}px)) translateZ(50px) scale(1.1)`;
    }
    
    e.preventDefault(); // Prevenir scroll
  };

  return (
    <div className={styles.cardContainer}>
      <div 
        ref={cardRef}
        className={styles.card}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchMove={handleTouchMove}
        onTouchStart={handleMouseEnter}
        onTouchEnd={handleMouseLeave}
      >
        <div 
          className={styles.cardBackground} 
          style={{ backgroundImage: `url(${backgroundUrl})` }}
        />
        <img 
          src={imageUrl} 
          alt={name} 
          className={styles.playerImage} 
        />
        <div className={styles.cardContent}>
          <h3>{name}</h3>
          <p>Posição: {position}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;