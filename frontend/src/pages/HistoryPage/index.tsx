import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import HistoryIcon from "@material-ui/icons/History";
import {RouteLink} from "../../components/common/LinkListItem";

export const HISTORY_PAGE_ROUTE = '/feed/history';

export const HISTORY_MENU_ITEM: RouteLink = {
    title: 'History',
    to: HISTORY_PAGE_ROUTE,
    icon: HistoryIcon
};

const Page = React.lazy(() => import('./HistoryPage'));

function HistoryPage() {
    return (
        <Layout>
            <Suspense fallback={<LinearProgress/>}>
                <Page/>
            </Suspense>
        </Layout>
    )
}

export default HistoryPage;
