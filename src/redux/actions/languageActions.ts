import {LangAction, SET_LANGUAGE} from '../constants/languageConstants';

export const setLanguage = (lang: string): LangAction => {
    localStorage.setItem('language', lang); // nastaví do localstorage vybraný jazyk

    return {
        type: SET_LANGUAGE,
        payload: lang
    }
}