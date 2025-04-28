/* CSS */
import styles from "./Footer.module.css";

/* logos redes sociais */
import instagram from "../../assets/redesSociais/icons8-instagram.svg"


const Footer = ()=>{
  return (
    <footer className={styles.containerFooter}>
      <p>&copy; Fúria E-Sports</p>
      <div className={styles.containerRedesSociais}>
        <a href="https://www.instagram.com/furiagg/?hl=pt-br" target="_blank"><img src={instagram} alt="" /></a>
      </div>
      
    </footer>
  )
}

export default Footer;