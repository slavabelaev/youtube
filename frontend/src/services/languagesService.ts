import {SingleChoiceItemModel} from "../components/common/SingleChoiceList";

export const generateLanguages = async (): Promise<SingleChoiceItemModel[]> => [
    { title: 'Русский', value: 'ru', selected: true },
    { title: 'Беларуская', value: 'be' },
    { title: 'Украинский', value: 'ua' },
];
