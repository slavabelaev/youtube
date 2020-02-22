import React from "react";
import SingleChoiceList, {SingleChoiceListProps} from "../common/SingleChoiceList";

export interface CountriesListProps extends SingleChoiceListProps {}

function CountriesList({ onLoad }: CountriesListProps) {
    return (
        <SingleChoiceList onLoad={onLoad}/>
    )
}

export default CountriesList;
