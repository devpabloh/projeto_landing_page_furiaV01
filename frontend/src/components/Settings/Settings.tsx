import { useState } from "react";
import styles from "./Settings.module.css";

/* imagens */
import Engrenagem from "../../assets/navbar/engrenagem.svg"
import Lua from "../../assets/navbar/lua.svg"
import Sol from "../../assets/navbar/sol.svg"

const Settings = () => {
    const [showSettings, setShowSettings] = useState(false);

    const [theme, setTheme] = useState('light');

    const [language, setLanguage] = useState('pt-br')

    const toggleSettings = ()=>{
        setShowSettings(!showSettings)
    }

    const toggleTheme = ()=>{
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)

        document.documentElement.setAttribute('data-theme', newTheme)
    }

    const changeLanguage = (lang: string)=>{
        setLanguage(lang)
    }

    return (
        <>
            <button className={styles.settingsButton} onClick={toggleSettings} aria-label="Configurações">
                <img src={Engrenagem} alt="" />
            </button>
            {showSettings && (
                <div className={styles.settingsMenu}>
                    <div className={styles.settingsSection}>
                        <h4>Tema</h4>
                        <button className={styles.themeToggle} onClick={toggleTheme} aria-label={theme === 'light' ? 'Mudar para tema escuro' : 'Mudar para tema claro'}>
                            {theme === 'light'? (<img src={Lua} alt="Lua"></img>) : (<img src={Sol} alt="Sol"></img>)}
                            <span>{theme === 'light' ? 'dark' : 'light'}</span>
                        </button>
                    </div>

                </div>
            )}
        </>
    )
}

export default Settings;