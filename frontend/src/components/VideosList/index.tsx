import React, {Suspense} from "react";
import SuspenseFallback from "../SuspenseFallback";
import {generateListVideos} from "../../services/videosService";

const Component = React.lazy(() => import('./VideosList'));

const VideosList: React.FC = () => (
    <Suspense fallback={<SuspenseFallback />}>
        <Component
            onLoad={generateListVideos}
        />
    </Suspense>
);

export default VideosList;
