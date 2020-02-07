import React from "react";
import SingleChoiceList, {SingleChoiceListProps} from "../SingleChoiceList";

export interface CountriesListProps extends SingleChoiceListProps {}

const CountriesList: React.FC<CountriesListProps> = ({ items }) => (
    <SingleChoiceList items={items} />
);

export default CountriesList;
