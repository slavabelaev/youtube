import React from "react";
import SingleChoiceList, {SingleChoiceListProps} from "../SingleChoiceList";

export interface LanguagesListProps extends SingleChoiceListProps {}

const LanguagesList: React.FC<LanguagesListProps> = ({ onLoad }) => (
    <SingleChoiceList onLoad={onLoad} />
);

export default LanguagesList;
