import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import RouteItem from "../../../../interfaces/RouteItem";

export const CHANNEL_ABOUT_PAGE_ROUTE = '/about';

export const CHANNEL_ABOUT_ROUTE: RouteItem = {
    title: 'О канале',
    to: CHANNEL_ABOUT_PAGE_ROUTE
};

const Page = React.lazy(() => import('./ChannelAboutPage'));

const ChannelAboutPage: React.FC = () => (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
);

export default ChannelAboutPage;
