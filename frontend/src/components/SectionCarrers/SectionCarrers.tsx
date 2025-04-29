/* CSS */
import styles from "./SectionCarrers.module.css"

/* translation */
import { useTranslation } from "react-i18next"


const SectionCarrers = ()=>{
    const {t} = useTranslation()

    return (
        <section className={styles.containerInfor}>
            <p>CS:GO</p>
            <h1>{t("carrersTitle")}</h1>
            <h2>{t("joinTheFuria")}</h2>
            <p>{t("sectionCarrersText")}</p>
        </section>
    )
}

export default SectionCarrers