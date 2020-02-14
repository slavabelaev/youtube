import {SingleChoiceItemProps} from "../components/SingleChoiceList";

export const generateCountries = async (): Promise<SingleChoiceItemProps[]> => [
    { title: 'Россия', value: 'ru', selected: true },
    { title: 'Беларусия', value: 'be' },
    { title: 'Украина', value: 'ua' },
];
