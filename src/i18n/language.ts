import sk from './sk.json';
import cz from './cz.json';
import pl from './pl.json';

export const translateFn = (key: string, language: string): string => {
    let data: {[key: string]: string} = {};

    if(language === "SK") {
        data = sk
    } else if(language === "CZ") {
        data = cz
    } else if (language === "PL") {
        data = pl
    }

    return data[key];
}