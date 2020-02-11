import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import RouteItem from "../../interfaces/RouteItem";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import WatchLaterIcon from "@material-ui/icons/WatchLater";

export const PLAYLIST_PAGE_ROUTE = '/playlist';

export const FAVORITES_ROUTE: RouteItem = {
    title: 'Понравившиеся',
    to: `${PLAYLIST_PAGE_ROUTE}/favorites`,
    icon: ThumbUpIcon
};

export const WATCH_LATER_ROUTE: RouteItem = {
    title: 'Смотреть позже',
    to: `${PLAYLIST_PAGE_ROUTE}/WL`,
    icon: WatchLaterIcon
};

const Page = React.lazy(() => import('./PlaylistPage'));

const PlaylistPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default PlaylistPage;
