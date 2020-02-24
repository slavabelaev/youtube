import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import WifiTetheringIcon from "@material-ui/icons/WifiTethering";
import {RouteLink} from "../../components/common/LinkListItem";

export const LIVE_PAGE_ROUTE = '/streaming';

export const LIVE_MENU_ITEM: RouteLink = {
    title: 'Live',
    to: LIVE_PAGE_ROUTE,
    icon: WifiTetheringIcon
};

const Page = React.lazy(() => import('./LivePage'));

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
