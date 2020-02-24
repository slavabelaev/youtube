import {LocationModel} from "../models/LocationModel";

export const generateCountries = async (): Promise<LocationModel[]> => [
    { label: 'USA', code: 'en' },
    { label: 'Россия', code: 'ru' },
];
