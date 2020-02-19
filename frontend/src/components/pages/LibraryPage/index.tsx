import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import {RouteLink} from "../../common/LinkListItem";

export const LIBRARY_PAGE_ROUTE = '/feed/library';

export const LIBRARY_MENU_ITEM: RouteLink = {
    title: 'Библиотека',
    to: LIBRARY_PAGE_ROUTE,
    icon: VideoLibraryIcon
};

const Page = React.lazy(() => import('./LibraryPage'));

const LibraryPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default LibraryPage;
