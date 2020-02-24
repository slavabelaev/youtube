import React from "react";
import {generateCountries} from "../../services/countriesService";
import SingleChoiceItem from "../common/SingleChoice/SingleChoiceItem";
import {CountryModel} from "../../models/CountryModel";
import SingleChoice, {SingleChoiceProps} from "../common/SingleChoice/SingleChoice";

function LocationsList() {
    const renderItem: SingleChoiceProps['renderItem'] = (item: CountryModel, value, setValue) => (
        <SingleChoiceItem
            label={item.label}
            value={item.code}
            selected={item.code === value}
            onClick={() => setValue(item.code)}
        />
    );

    return (
        <SingleChoice
            initialValue="en"
            onLoad={generateCountries}
            renderItem={renderItem}
        />
    );
}

export default LocationsList;
