import {LanguageModel} from "../models/LanguageModel";

export const generateLanguages = async (): Promise<LanguageModel[]> => [
    { label: 'English', code: 'en' },
    { label: 'Русский', code: 'ru' },
];
