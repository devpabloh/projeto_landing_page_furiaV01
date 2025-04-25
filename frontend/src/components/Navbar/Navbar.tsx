import { Link } from "react-router-dom";

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
        text: "Home",
        path: "/"
    },
    {
        text: "E-Sport",
        path: "/esport"
    }
    
]

const navbarItems2: NavbarItem[] = [
    {
        text: "Carreira",
        path: "/carreira"
    },
    {
        text: "Shop",
        path: "https://www.furia.gg/",
        external: true
    },
]


const Navbar = () => {
    return (
        <nav className={styles.containerList}>
            <ul className={styles.list}>
                {navbarItems1.map((item, index)=>(
                    <li key={index} className={styles.listItem}>
                        <Link to={item.path}>{item.text}</Link>
                    </li>
                ))}
                <li>
                    <Link to="/">
                        <img className={styles.listItemImage} src={logoFuria} alt="" />
                    </Link>
                </li>
                {navbarItems2.map((item, index)=>(
                    <li key={index} className={styles.listItem}>
                        <Link to={item.path} target="_blank" rel="noopener noreferrer">{item.text}</Link>
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