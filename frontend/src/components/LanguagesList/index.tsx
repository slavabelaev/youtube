import React, {Suspense} from "react";
import {CircularProgress} from "@material-ui/core";
import {SingleChoiceItemProps} from "../SingleChoiceList";

const LanguagesList = React.lazy(() => import('./LanguagesList'));

const generateLanguages = (): SingleChoiceItemProps[] => [
    { title: 'Русский', value: 'ru', selected: true },
    { title: 'Беларуская', value: 'be' },
    { title: 'Украинский', value: 'ua' },
];

export default () => (
    <Suspense fallback={<CircularProgress />}>
        <LanguagesList items={generateLanguages()} />
    </Suspense>
);
