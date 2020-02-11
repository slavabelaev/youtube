import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import RouteItem from "../../../../interfaces/RouteItem";

export const CHANNEL_FEATURED_PAGE_ROUTE = '/featured';

export const CHANNEL_FEATURED_ROUTE: RouteItem = {
    title: 'Главная',
    to: CHANNEL_FEATURED_PAGE_ROUTE
};

const Page = React.lazy(() => import('./ChannelFeaturedPage'));

const ChannelFeaturedPage: React.FC = () => (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
);

export default ChannelFeaturedPage;
