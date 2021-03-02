import {combineReducers} from 'redux';
import languageReducer from './languageReducer';

const rootReducer = combineReducers({
    lang: languageReducer
});

export default rootReducer;