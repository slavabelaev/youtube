import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";

export const CHANNEL_COMMUNITY_PAGE_ROUTE = '/community';

const Page = React.lazy(() => import('./ChannelCommunityPage'));

const ChannelCommunityPage: React.FC = () => (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
);

export default ChannelCommunityPage;
