/* translate */
import { useTranslation } from "react-i18next"

/* CSS */
import styles from "./AboutUs.module.css"

const AboutUs = () => {
  const {t} = useTranslation()
  return (
    <section className={styles.containerAboutUs}>
      <h2>{t("aboutUsTitle")}</h2>
      <p>{t("aboutUsText")}</p>
      <h2>{t("aboutUsSocioculturalMovement")}</h2>
      <p>{t("aboutUsSocioculturalMovementText")}</p>
    </section>
  )
}

export default AboutUs