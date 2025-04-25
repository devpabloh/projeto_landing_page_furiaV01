import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./SeletorLanguage.module.css";

const LanguageSeletor: React.FC = ()=>{
    const { i18n, t } = useTranslation();

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>)=>{
        const lng = event.target.value;
        i18n.changeLanguage(lng);
    }

    return (
        <div>
            <label htmlFor="language-select">{t('language')}:</label>
            <select name="language-select" id="language-select" value={i18n.language.split('-')[0]} onChange={changeLanguage} className={styles.containerSelect}>
                <option value="pt">{t('portuguese')}</option>
                <option value="en">{t('english')}</option>
            </select>

        </div>
    )
}

export default LanguageSeletor;

