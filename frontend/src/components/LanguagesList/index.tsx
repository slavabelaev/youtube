import React, {Suspense} from "react";
import SuspenseFallback from "../SuspenseFallback";
import {generateLanguages} from "../../services/languagesService";

const LanguagesList = React.lazy(() => import('./LanguagesList'));

export default () => (
    <Suspense fallback={<SuspenseFallback />}>
        <LanguagesList onLoad={generateLanguages} />
    </Suspense>
);
