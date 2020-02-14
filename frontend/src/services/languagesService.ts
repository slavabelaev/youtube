import {SingleChoiceItemProps} from "../components/SingleChoiceList";

export const generateLanguages = async (): Promise<SingleChoiceItemProps[]> => [
    { title: 'Русский', value: 'ru', selected: true },
    { title: 'Беларуская', value: 'be' },
    { title: 'Украинский', value: 'ua' },
];
