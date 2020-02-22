import {SingleChoiceItemModel} from "../components/common/SingleChoiceList";

export const generateCountries = async (): Promise<SingleChoiceItemModel[]> => [
    { title: 'USA', value: 'en', selected: true },
    { title: 'Россия', value: 'ru' },
];
