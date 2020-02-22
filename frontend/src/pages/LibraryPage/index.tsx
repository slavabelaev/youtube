import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import {RouteLink} from "../../components/common/LinkListItem";

export const LIBRARY_PAGE_ROUTE = '/feed/library';

export const LIBRARY_MENU_ITEM: RouteLink = {
    title: 'Library',
    to: LIBRARY_PAGE_ROUTE,
    icon: VideoLibraryIcon
};

const Page = React.lazy(() => import('./LibraryPage'));

function LibraryPage() {
    return (
        <Layout>
            <Suspense fallback={<LinearProgress/>}>
                <Page/>
            </Suspense>
        </Layout>
    )
}

export default LibraryPage;
