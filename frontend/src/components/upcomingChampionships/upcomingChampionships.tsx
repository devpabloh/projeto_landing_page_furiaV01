/* Hooks */
import { useState } from "react";

/* CSS */
import styles from "./UpcomingChampionships.module.css";

/* Tradução */
import { useTranslation } from "react-i18next";

/* Imagens campeonatos */
import BLASTOpen2025AllMode from "../../assets/Championships/BLASTOpen2025AllMode.png";
import ESLProLeague from "../../assets/Championships/ESLProLeague.png";
import logoPglCluj from "../../assets/Championships/logoPglCluj.webp";

/* Imagens camisas */
import DarkUniform from "../../assets/uniforms/furia1.webp";
import LightUniform from "../../assets/uniforms/CamisaFuriaBranca.png"

interface upcomingChampionshipsItem{
    logoChampionship: string;
    championship: string;
    date: string;
    moth: string;
    classification: string;
    group: string;
    lyrics: string;

}

const upcomingChampionshipsData: upcomingChampionshipsItem[] = [
    {
        logoChampionship: BLASTOpen2025AllMode,
        championship: "Campeonato Brasileiro Série A",
        date: "8-14 ",
        classification: "upcomingChampionshipsClassification",
        group: "upcomingChampionshipsGroup",
        moth: "upcomingChampionshipsMothApril",
        lyrics: "A"
        
        
    },
    {   
        logoChampionship: ESLProLeague,
        championship: "Campeonato Brasileiro Série A",
        date: "8-14 ",
        classification: "upcomingChampionshipsClassification",
        group: "upcomingChampionshipsGroup",
        moth: "upcomingChampionshipsMothMay",
        lyrics: "B"
    },
    {   
        logoChampionship: logoPglCluj,
        championship: "Campeonato Brasileiro Série A",
        date: "8-14 ",
        classification: "upcomingChampionshipsClassification",
        group: "upcomingChampionshipsGroup",
        moth: "upcomingChampionshipsMothMarch",
        lyrics: "C"
    },
]

const UpcomingChampionships = ()=>{
    const { t } = useTranslation();

    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className={styles.containerUpcomingChampionships}>
            <div className={styles.containerInfoUpcomingChampionships}>
                <h2>{t("upcomingChampionshipsTitle")}</h2>
                <div>
                    {upcomingChampionshipsData.map((item, index)=>(
                        <div key={index} className={styles.containerlogoChampionship}>
                            <img src={item.logoChampionship} alt="" />
                            <p>{t(item.date)} {t(item.moth)}</p>
                            <p>{t(item.classification)}: {t(item.group)}: {item.lyrics}</p>
                        </div>
                    ))}
                </div>
                <p><a href="">{t("toAccompany")}</a></p>
            </div>
            <div className={styles.containerLoja}>
                <div 
                onMouseEnter={()=>setIsHovering(false)}
                onMouseLeave={()=>setIsHovering(true)}
                >
                    <img src={isHovering ? DarkUniform : LightUniform } alt="" className={styles.imageUniform} />
                </div>
                <div className={styles.containerLojaInfo}>
                    <p>{t("OfficialUniformAndAccessories")}</p>
                    <a href="">{t("AccessTheStore")}</a>
                </div>
            </div>
        </div>
    )
}

export default UpcomingChampionships