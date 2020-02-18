import {SingleChoiceItemModel} from "../components/common/SingleChoiceList";

export const generateCountries = async (): Promise<SingleChoiceItemModel[]> => [
    { title: 'Россия', value: 'ru', selected: true },
    { title: 'Беларусия', value: 'be' },
    { title: 'Украина', value: 'ua' },
];
