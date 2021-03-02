export const SET_LANGUAGE = "SET_LANGUAGE";

export interface defaultLanguageState {
    language: string;
}

export interface SetLanguageAction {
    type: typeof SET_LANGUAGE;
    payload: string;
}

export type LangAction = SetLanguageAction;