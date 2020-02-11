import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import RouteItem from "../../interfaces/RouteItem";
import HistoryIcon from "@material-ui/icons/History";

export const HISTORY_PAGE_ROUTE = '/feed/history';

export const HISTORY_ROUTE: RouteItem = {
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
