import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import WifiTetheringIcon from "@material-ui/icons/WifiTethering";
import {RouteLink} from "../../components/common/LinkListItem";

export const STREAMING_PAGE_ROUTE = '/streaming';

export const STREAMING_MENU_ITEM: RouteLink = {
    title: 'Live',
    to: STREAMING_PAGE_ROUTE,
    icon: WifiTetheringIcon
};

const Page = React.lazy(() => import('./StreamingPage'));

function StreamingPage() {
	return (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
)
}

export default StreamingPage;
