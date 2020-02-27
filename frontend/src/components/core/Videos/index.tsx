import React, { Suspense } from "react";
import {VideosProps} from "./Videos";
import SuspenseFallback from "../../../layouts/SuspenseFallback";

const Component = React.lazy(() => import('./Videos'));

function Videos(props: VideosProps) {
    return (
        <Suspense fallback={<SuspenseFallback />}>
            <Component {...props} />
        </Suspense>
    )
}

export default Videos;
