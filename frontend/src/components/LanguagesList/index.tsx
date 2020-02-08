import React, {Suspense} from "react";
import {SingleChoiceItemProps} from "../SingleChoiceList";
import SuspenseFallback from "../SuspenseFallback";

const LanguagesList = React.lazy(() => import('./LanguagesList'));

const generateLanguages = (): SingleChoiceItemProps[] => [
    { title: 'Русский', value: 'ru', selected: true },
    { title: 'Беларуская', value: 'be' },
    { title: 'Украинский', value: 'ua' },
];

export default () => (
    <Suspense fallback={<SuspenseFallback />}>
        <LanguagesList items={generateLanguages()} />
    </Suspense>
);
