import React from "react";
import SingleChoiceList, {SingleChoiceItemProps} from "../SingleChoiceList";

const generateCountries = (): SingleChoiceItemProps[] => [
    { title: 'Россия', value: 'ru', selected: true },
    { title: 'Беларусия', value: 'be' },
    { title: 'Украина', value: 'ua' },
];

const CountriesList: React.FC = () => (<SingleChoiceList items={generateCountries()} />);

export default CountriesList;
