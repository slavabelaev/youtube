import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";

export const CHANNEL_VIDEOS_PAGE_ROUTE = '/channel/:id/videos';

const Page = React.lazy(() => import('./ChannelVideosPage'));

const ChannelVideosPage: React.FC = () => (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
);

export default ChannelVideosPage;
