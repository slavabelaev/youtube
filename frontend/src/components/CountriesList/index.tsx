import React, {Suspense} from "react";
import SuspenseFallback from "../SuspenseFallback";
import {generateCountries} from "../../services/countriesService";

const Component = React.lazy(() => import('./CountriesList'));

const CountriesList = () => (
    <Suspense fallback={<SuspenseFallback />}>
        <Component onLoad={generateCountries} />
    </Suspense>
);

export default CountriesList;
