import PlayerCard from '../PlayerCard/PlayerCard';
import styles from './TeamSection.module.css';

const TeamSection = () => {
  const players = [
    {
      name: "Fallen",
      position: "Atacante",
      imageUrl: "/assets/Players/Fallen.webp",
      backgroundUrl: "/assets/backgrounds/bg1.jpg"
    },
    {
      name: "Chello",
      position: "Meio-Campo",
      imageUrl: "/assets/Players/Chelo.png",
      backgroundUrl: "/assets/backgrounds/bg2.jpg"
    },
  ];

  return (
    <section className={styles.teamSection}>
      <h2>Nosso Time</h2>
      <div className={styles.cardsContainer}>
        {players.map((player, index) => (
          <PlayerCard 
            key={index}
            name={player.name}
            position={player.position}
            imageUrl={player.imageUrl}
            backgroundUrl={player.backgroundUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;