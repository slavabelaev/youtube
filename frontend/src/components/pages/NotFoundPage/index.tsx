import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";

const Page = React.lazy(() => import('./NotFoundPage'));

const NotFoundPage = () => (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
);

export default NotFoundPage;
