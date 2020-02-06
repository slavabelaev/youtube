import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";

const NotFoundPage = React.lazy(() => import('./NotFoundPage'));

export default () => (
    <Suspense fallback={<LinearProgress />}>
        <NotFoundPage />
    </Suspense>
);
