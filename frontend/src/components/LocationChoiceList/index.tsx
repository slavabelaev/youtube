import React, {useContext} from "react";
import {generateLanguages} from "../../services/languagesService";
import {LocationModel} from "../../models/LocationModel";
import SingleChoiceList from "../common/SingleChoice/SingleChoiceList";
import {LocationContext} from "../../contexts/LocationContext";

function LocationChoiceList() {
    const context = useContext(LocationContext);

    return (
        <SingleChoiceList
            variant="check"
            initialValue={context?.location.code}
            onLoad={generateLanguages}
            fromModelToProps={(model: LocationModel) => ({
                label: model.label,
                value: model.code
            })}
            onChange={item => context?.switchLocation({
                label: item.label,
                code: item.value
            })}
        />
    )
}
export default LocationChoiceList;
