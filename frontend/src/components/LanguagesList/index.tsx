import React, {Suspense} from "react";
import {CircularProgress} from "@material-ui/core";

const LanguagesList = React.lazy(() => import('./LanguagesList'));

export default () => (
    <Suspense fallback={<CircularProgress />}>
        <LanguagesList />
    </Suspense>
);
