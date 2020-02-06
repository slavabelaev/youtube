import React, {Suspense} from "react";
import {CircularProgress} from "@material-ui/core";

const VideosList = React.lazy(() => import('./VideosList'));

export default () => (
    <Suspense fallback={<CircularProgress />}>
        <VideosList />
    </Suspense>
);
