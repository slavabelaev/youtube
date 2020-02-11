import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import MenuItem from "../../interfaces/MenuItem";
import HistoryIcon from "@material-ui/icons/History";

export const HISTORY_PAGE_ROUTE = '/feed/history';

export const HISTORY_MENU_ITEM: MenuItem = {
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
