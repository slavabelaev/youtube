import React from "react";
import SingleChoiceList, {SingleChoiceListProps} from "../SingleChoiceList";

export interface LanguagesListProps extends SingleChoiceListProps {}

const LanguagesList: React.FC<LanguagesListProps> = ({ items }) => (
    <SingleChoiceList items={items} />
);

export default LanguagesList;
