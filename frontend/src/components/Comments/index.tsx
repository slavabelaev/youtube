import React, {Suspense} from "react";
import {CircularProgress} from "@material-ui/core";

const Comments = React.lazy(() => import('./Comments'));

export default () => (
    <Suspense fallback={<CircularProgress />}>
        <Comments />
    </Suspense>
);
