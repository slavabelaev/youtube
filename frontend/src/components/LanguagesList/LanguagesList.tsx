import React from "react";
import SingleChoiceList, {SingleChoiceItemProps} from "../SingleChoiceList";

const generateLanguages = (): SingleChoiceItemProps[] => [
    { title: 'Русский', value: 'ru', selected: true },
    { title: 'Беларуская', value: 'be' },
    { title: 'Украинский', value: 'ua' },
];

const LanguagesList: React.FC = () => (<SingleChoiceList items={generateLanguages()} />);

export default LanguagesList;
