import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            'randomDish': 'random dish',
            'favorites': 'favorites',
            'addDish': 'add dish',
            'skip': 'skip',
            'addToFavorites': 'add to favorites',
            'addCustomRecipe': 'Add custom recipe',
            'placeholderTitleText': 'Enter your dish title...',
            'placeholderDishTitleText': 'Type your best recipe of dish...',
            'titleError': 'Title could not be empty',
            'textError': 'Recipe field could not be empty',
            'backBtnText': 'back'
        }
    },
};
i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });
export default i18n;
