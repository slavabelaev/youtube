import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";

export const CHANNEL_FEATURED_PAGE_ROUTE = '/featured';

const Page = React.lazy(() => import('./ChannelFeaturedPage'));

const ChannelFeaturedPage: React.FC = () => (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
);

export default ChannelFeaturedPage;
