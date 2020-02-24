import React, {PropsWithChildren, useState} from "react";
import {LocationModel} from "../../models/LocationModel";

export interface LocationContextProps {
    location: LocationModel;
    switchLocation: (language: LocationModel) => void;
}

export const LocationContext = React.createContext<LocationContextProps | undefined>(undefined);

function LocationProvider(props: PropsWithChildren<{}>) {
    const [location, setLocation] = useState<LocationModel>({
        label: 'USA',
        code: 'en'
    });

    const switchLocation: LocationContextProps['switchLocation'] = (location) => {
        setLocation(location);
    };

    return (
        <LocationContext.Provider value={{
            location,
            switchLocation
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}

export default LocationProvider;
