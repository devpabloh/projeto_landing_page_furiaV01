import { useState, useRef, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import styles from "./Settings.module.css";
import { useTheme } from "../../context/ThemeContext";

/* imagens */
import Engrenagem from "../../assets/navbar/engrenagem.svg"
import Lua from "../../assets/navbar/lua.svg"
import Sol from "../../assets/navbar/sol.svg"
import LanguageSeletor from "./SeletorLanguage/SeletorLanguage";

const Settings = () => {
    const [showSettings, setShowSettings] = useState(false);
    const { t } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleSettings = () => {
        setShowSettings(!showSettings);
    }
    
    // Fechar o menu quando clicar fora dele
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                showSettings && 
                buttonRef.current && 
                menuRef.current && 
                !buttonRef.current.contains(event.target as Node) && 
                !menuRef.current.contains(event.target as Node)
            ) {
                setShowSettings(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showSettings]);
    
    const nextThemeKey = theme === 'light' ? 'dark' : 'light';
    const translatedNextThemeName = t(nextThemeKey);

    return (
        <div className={styles.settingsContainer}>
            <button 
                ref={buttonRef}
                className={styles.settingsButton} 
                onClick={toggleSettings} 
                aria-label="Configurações"
            >
                <img src={Engrenagem} alt="" className={styles.configImg} />
            </button>
            {showSettings && (
                <div ref={menuRef} className={styles.settingsMenu}>
                    <div className={styles.settingsSection}>
                        <h4>{t('themeTitle')}</h4>
                        <button 
                            className={styles.themeToggle} 
                            onClick={toggleTheme} 
                            aria-label={t('changeTheme', { theme: translatedNextThemeName })}
                        >
                            {theme === 'light'? (
                                <img src={Lua} alt={t('moonAlt')}></img>
                            ) : (
                                <img src={Sol} alt={t('sunAlt')}></img>
                            )}
                            <span>{translatedNextThemeName}</span>
                        </button>
                    </div>
                    <LanguageSeletor/>
                </div>
            )}
        </div>
    )
}

export default Settings;