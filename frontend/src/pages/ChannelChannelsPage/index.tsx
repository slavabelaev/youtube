import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";

export const CHANNEL_CHANNELS_PAGE_ROUTE = '/channels';

const Page = React.lazy(() => import('./ChannelChannelsPage'));

const ChannelChannelsPage: React.FC = () => (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
);

export default ChannelChannelsPage;
