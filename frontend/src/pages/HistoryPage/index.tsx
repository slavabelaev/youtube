import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import HistoryIcon from "@material-ui/icons/History";
import {RouteLink} from "../../components/LinkListItem";

export const HISTORY_PAGE_ROUTE = '/feed/history';

export const HISTORY_MENU_ITEM: RouteLink = {
    title: 'История',
    to: HISTORY_PAGE_ROUTE,
    icon: HistoryIcon
};

const Page = React.lazy(() => import('./HistoryPage'));

const HistoryPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default HistoryPage;
