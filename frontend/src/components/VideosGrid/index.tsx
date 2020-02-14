import React, {Suspense} from "react";
import SuspenseFallback from "../SuspenseFallback";
import {generateGridVideos} from "../../services/videosService";

const VideosGrid = React.lazy(() => import('./VideosGrid'));

export default () => (
    <Suspense fallback={<SuspenseFallback />}>
        <VideosGrid
            onLoad={generateGridVideos}
        />
    </Suspense>
);

