import styles from './Header.module.css'

/* Componentes */
import Navbar from '../Navbar/Navbar'

const Header = () => {
    return (
        <header className={styles.containerHeader}>
            <Navbar/>
        </header>
    )
}

export default Header