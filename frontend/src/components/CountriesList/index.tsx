import React, {Suspense} from "react";
import SuspenseFallback from "../common/SuspenseFallback";
import {generateCountries} from "../../services/countriesService";

const Component = React.lazy(() => import('./CountriesList'));

function CountriesList() {
    return (
        <Suspense fallback={<SuspenseFallback />}>
            <Component onLoad={generateCountries} />
        </Suspense>
    );
}

export default CountriesList;
