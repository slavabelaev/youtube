import {SingleChoiceItemModel} from "../components/common/SingleChoiceList";

export const generateLanguages = async (): Promise<SingleChoiceItemModel[]> => [
    { title: 'English', value: 'en', selected: true },
    { title: 'Русский', value: 'ru' },
];
