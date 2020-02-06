import React, {Suspense} from "react";
import {CircularProgress} from "@material-ui/core";

const CountriesList = React.lazy(() => import('./CountriesList'));

export default () => (
    <Suspense fallback={<CircularProgress />}>
        <CountriesList />
    </Suspense>
);
