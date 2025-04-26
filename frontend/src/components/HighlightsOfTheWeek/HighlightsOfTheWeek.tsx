import { useTranslation } from "react-i18next";

/* css */
import styles from "./HighlightsOfTheWeek.module.css"

/* teams */
import furiaLogo from '../../assets/teams/furiaEsportsLogo.png';
import loudLogo from '../../assets/teams/loudEsportsLogo.png';

interface GamesItem{
  championship: string;
  teamOne: string;
  teamTwo: string;
  alt: string;
  date: string;
  time: string;

}
const games:GamesItem[] = [
  {
    championship: "BLAST PREMIER",
    teamOne: furiaLogo,
    teamTwo: loudLogo,
    alt: "",
    date: "19/04",
    time: "14:00"
  },
  {
    championship: "ESL PRO LEAGUE",
    teamOne: furiaLogo,
    teamTwo: loudLogo,
    alt: "",
    date: "19/04",
    time: "14:00"
  },
  {
    championship: "BSUPR",
    teamOne: furiaLogo,
    teamTwo: loudLogo,
    alt: "",
    date: "19/04",
    time: "14:00"
  },
  {
    championship: "BLAST PREMIER",
    teamOne: furiaLogo,
    teamTwo: loudLogo,
    alt: "",
    date: "19/04",
    time: "14:00"
  },
]

const HighlightsOfTheWeek = () =>{
  const {t} = useTranslation();

  return(
    <section className={styles.containerHighlightsOfTheWeek}>
      <h2>Destaques da semana</h2>
      <div className={styles.containerGeneral}>
        {games.map((game, index) => (
          <div key={index} className={styles.containerGames}>
            <p>{game.championship}</p>
            <div className={styles.cardGames}>
              <img src={game.teamOne} alt="" />
              <span>VS</span>
              <img src={game.teamTwo} alt="" />
            </div>
            <div className={styles.gameInfo}>
              <p>{game.date}</p>
              <p>{game.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HighlightsOfTheWeek