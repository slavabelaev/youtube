import React from "react";
import SingleChoiceList, {SingleChoiceItemProps} from "./SingleChoiceList";

const items: SingleChoiceItemProps[] = [
    { title: 'Россия', value: 'ru', selected: true },
    { title: 'Беларусия', value: 'be' },
    { title: 'Украина', value: 'ua' },
];

const CountriesList: React.FC = () => (<SingleChoiceList items={items} />);

export default CountriesList;
