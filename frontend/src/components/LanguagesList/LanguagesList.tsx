import React from "react";
import SingleChoiceList, {SingleChoiceListProps} from "../common/SingleChoiceList";

export interface LanguagesListProps extends SingleChoiceListProps {}

function LanguagesList({ onLoad }: LanguagesListProps) {
    return (
        <SingleChoiceList onLoad={onLoad}/>
    )
}

export default LanguagesList;
