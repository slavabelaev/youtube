import React from "react";
import SingleChoiceList, {SingleChoiceListProps} from "../common/SingleChoiceList";

export interface LanguagesListProps extends SingleChoiceListProps {}

const LanguagesList: React.FC<LanguagesListProps> = ({ onLoad }) => (
    <SingleChoiceList onLoad={onLoad} />
);

export default LanguagesList;
