import {CountryModel} from "../models/CountryModel";

export const generateCountries = async (): Promise<CountryModel[]> => [
    { label: 'USA', code: 'en' },
    { label: 'Россия', code: 'ru' },
];
