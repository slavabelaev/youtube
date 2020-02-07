import React, {Suspense} from "react";
import {CircularProgress} from "@material-ui/core";
import {SingleChoiceItemProps} from "../SingleChoiceList";

const CountriesList = React.lazy(() => import('./CountriesList'));

const generateCountries = (): SingleChoiceItemProps[] => [
    { title: 'Россия', value: 'ru', selected: true },
    { title: 'Беларусия', value: 'be' },
    { title: 'Украина', value: 'ua' },
];

export default () => (
    <Suspense fallback={<CircularProgress />}>
        <CountriesList items={generateCountries()} />
    </Suspense>
);
