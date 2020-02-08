import React, {Suspense} from "react";
import {SingleChoiceItemProps} from "../SingleChoiceList";
import SuspenseFallback from "../SuspenseFallback";

const CountriesList = React.lazy(() => import('./CountriesList'));

const generateCountries = (): SingleChoiceItemProps[] => [
    { title: 'Россия', value: 'ru', selected: true },
    { title: 'Беларусия', value: 'be' },
    { title: 'Украина', value: 'ua' },
];

export default () => (
    <Suspense fallback={<SuspenseFallback />}>
        <CountriesList items={generateCountries()} />
    </Suspense>
);
