/* Translation */
import { useTranslation } from "react-i18next";

/* Componentes */
import PlayerCard from '../PlayerCard/PlayerCard';

/* CSS */
import styles from './TeamSection.module.css';

/* imagens */
import background from "../../assets/background/backgroundFuriaCS.png"
import fallen from "../../assets/Players/Fallen.webp"
import chello from "../../assets/Players/Chelo.png"
import kscerato from "../../assets/Players/Kaike-KSCERATO- Cerato.webp"
import Skullz from "../../assets/Players/FelipeSkullz.webp"
import yuurih from "../../assets/Players/yuurih.webp"

const TeamSection = () => {
  const { t } = useTranslation();
  const players = [
    {
      name: "Fallen",
      position: "Gabriel Toledo",
      imageUrl: fallen,
      backgroundUrl: background
    },
    {
      name: "Chello",
      position: "Marcelo Cespedes",
      imageUrl: chello,
      backgroundUrl: background
    },
    {
      name: "KScerato",
      position: "Kaike Cerato",
      imageUrl: kscerato,
      backgroundUrl: background
    },
    {
      name: "Skullz",
      position: "Felipe Medeiros",
      imageUrl: Skullz,
      backgroundUrl: background
    },
    {
      name: "Yuurih",
      position: "Yuri Boian",
      imageUrl: yuurih,
      backgroundUrl: background
    }
  ];

  return (
    <section className={styles.teamSection}>
      <h2>{t("ourTeam")}</h2>
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