import React from "react";
import SingleChoiceList, {SingleChoiceItemProps} from "./SingleChoiceList";

const items: SingleChoiceItemProps[] = [
    { title: 'Русский', value: 'ru', selected: true },
    { title: 'Беларуская', value: 'be' },
    { title: 'Украинский', value: 'ua' },
];

const LanguageList: React.FC = () => (<SingleChoiceList items={items} />);

export default LanguageList;
