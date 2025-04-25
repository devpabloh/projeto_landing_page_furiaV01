import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation: {
            "navbar.logoAlt": "Logo Fúria E-sports",
            "navbar.home": "Home",
            "navbar.carrer": "Carrer",
            "navbar.shop": "Shop",
            "themeTitle": "Theme",
            "changeTheme": "Switch to {{theme}} theme",
            "selectLanguage": "Select Language",
            "moonAlt": "Moon icon, switch to dark theme", 
            "sunAlt": "Sun icon, switch to light theme", 
            "light": "Light",
            "dark": "Dark",
            "language": "Language",
            "english": "English",
            "portuguese": "Portuguese",
            "carousel.previous": "Previous slide",
            "carousel.next": "Next slide",
            "carousel.goToSlide": "Go to slide {{index}}",
            "carousel.imageAlt": "Slide {{index}}",
        }
    },
    pt: {
        translation: {
            "navbar.logoAlt": "Logotipo Fúria E-sports",
            "navbar.home": "Inicio",
            "navbar.carrer": "Carreira",
            "navbar.shop": "Loja",
            "themeTitle": "Tema",
            "changeTheme": "Mudar para tema {{theme}}",
            "selectLanguage": "Selecionar Idioma",
            "moonAlt": "Ícone de lua, mudar para tema escuro", 
            "sunAlt": "Ícone de sol, mudar para tema claro", 
            "light": "claro",
            "dark": "escuro",
            "language": "Idioma",
            "english": "Inglês",
            "portuguese": "Português",
            "carousel.previous": "Slide anterior",
            "carousel.next": "Próximo slide",
            "carousel.goToSlide": "Ir para o slide {{index}}",
            "carousel.imageAlt": "Slide {{index}}",
        }
    }
};

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "pt",
        debug: import.meta.env.MODE === "development",
        detection: {
            order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
            caches: ["localStorage"]
        },

        interpolation: {
            escapeValue: false,
        },

        defaultNS: 'translation'
    })

export default i18next;