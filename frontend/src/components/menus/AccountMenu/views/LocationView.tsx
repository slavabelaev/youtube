import React from "react";
import PopoverAppBar from "../../../PopoverAppBar";
import LocationsList from "../../../LocationChoiceList";
import {AccountMenuViewProps} from "../AccountMenuViewProps";

export interface LocationViewProps extends AccountMenuViewProps {}

function LocationView({ onBack }: LocationViewProps) {
    return (
        <div>
            <PopoverAppBar
                title="Choose your location"
                onBack={onBack}
            />
            <LocationsList />
        </div>
    )
}

export default LocationView;
