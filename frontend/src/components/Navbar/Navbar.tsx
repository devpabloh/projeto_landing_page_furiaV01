import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

/* CSS */
import styles from './Navbar.module.css'

/* Images */
import logoFuria from '../../assets/navbar/logo-furia-semnome.png'
import Settings from "../Settings/Settings";

interface NavbarItem {
    text: string;
    path: string;
    external?: boolean;
}

const navbarItems1: NavbarItem[] = [
    {
        text: "navbar.home",
        path: "/home"
    },
    {
        text: "E-Sports",
        path: "/esport"
    }
    
]

const navbarItems2: NavbarItem[] = [
    {
        text: "navbar.carrer",
        path: "/carrer"
    },
    {
        text: "navbar.shop",
        path: "https://www.furia.gg/",
        external: true
    },
]


const Navbar = () => {
    const { t } = useTranslation();

    return (
        <nav className={styles.containerList}>
            <ul className={styles.list}>
                {navbarItems1.map((item, index)=>(
                    <li key={index} className={styles.listItem}>
                        <Link to={item.path}>{t(item.text)}</Link>
                    </li>
                ))}
                <li>
                    <Link to="/">
                        <img className={styles.listItemImage} src={logoFuria} alt={t('navbar.logoAlt')} />
                    </Link>
                </li>
                {navbarItems2.map((item, index)=>(
                    <li key={index} className={styles.listItem}>
                        {item.external ? (
                        <Link to={item.path} target="_blank" rel="noopener noreferrer">{t(item.text)}</Link>
                    ) : (
                        <Link to={item.path}>{t(item.text)}</Link>
                    )}
                    </li>
                ))}
                <li className={styles.listItem}>
                    <Settings/>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar