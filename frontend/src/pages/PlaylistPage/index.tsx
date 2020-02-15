import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import {RouteLink} from "../../components/LinkListItem";

export const PLAYLIST_PAGE_ROUTE = '/playlist';

export const FAVORITES_MENU_ITEM: RouteLink = {
    title: 'Понравившиеся',
    to: `${PLAYLIST_PAGE_ROUTE}/favorites`,
    icon: ThumbUpIcon
};

export const WATCH_LATER_MENU_ITEM: RouteLink = {
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
