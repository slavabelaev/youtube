import React from "react";
import SingleChoiceList, {SingleChoiceListProps} from "../common/SingleChoiceList";

export interface CountriesListProps extends SingleChoiceListProps {}

const CountriesList: React.FC<CountriesListProps> = ({ onLoad }) => (
    <SingleChoiceList onLoad={onLoad} />
);

export default CountriesList;
