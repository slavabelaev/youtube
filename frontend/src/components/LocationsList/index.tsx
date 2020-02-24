import React, {useContext} from "react";
import {generateCountries} from "../../services/countriesService";
import SingleChoiceItem from "../common/SingleChoice/SingleChoiceItem";
import {LocationModel} from "../../models/LocationModel";
import SingleChoice, {SingleChoiceProps} from "../common/SingleChoice/SingleChoice";
import {LocationContext} from "../../contexts/LocationContext";

function LocationsList() {
    const context = useContext(LocationContext);
    const renderItem: SingleChoiceProps['renderItem'] = (item: LocationModel, value, setValue) => (
        <SingleChoiceItem
            label={item.label}
            value={item.code}
            selected={item.code === value}
            onClick={() => {
                setValue(item.code);
                context?.switchLocation(item);
            }}
        />
    );

    return (
        <SingleChoice
            initialValue={context?.location.code}
            onLoad={generateCountries}
            renderItem={renderItem}
        />
    );
}

export default LocationsList;
