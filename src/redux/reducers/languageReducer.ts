import {SET_LANGUAGE, SetLanguageAction, defaultLanguageState} from '../constants/languageConstants';

const localStorageLang = localStorage.getItem('language');

const initialState: defaultLanguageState = {
    language: localStorageLang ? localStorageLang : 'EN'
}

const languageReducer = (state = initialState, action: SetLanguageAction) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload
            }

        default:
            return state;
    }
}

export default languageReducer;