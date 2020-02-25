import {LocationModel} from "../models/LocationModel";

export const generateLocations = async (): Promise<LocationModel[]> => [
    { label: 'USA', code: 'en' },
    { label: 'Россия', code: 'ru' },
];
