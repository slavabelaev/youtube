import React, {Suspense} from "react";
import {CircularProgress} from "@material-ui/core";

const VideosGrid = React.lazy(() => import('./VideosGrid'));

export default () => (
    <Suspense fallback={<CircularProgress />}>
        <VideosGrid />
    </Suspense>
);

