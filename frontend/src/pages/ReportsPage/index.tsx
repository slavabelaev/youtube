import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import MenuItem from "../../interfaces/MenuItem";
import FlagIcon from "@material-ui/icons/Flag";

export const REPORTS_PAGE_ROUTE = '/reports';

export const REPORTS_MENU_ITEM: MenuItem = {
    title: 'Жалобы',
    to: REPORTS_PAGE_ROUTE,
    icon: FlagIcon
};

const Page = React.lazy(() => import('./ReportsPage'));

const ReportsPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default ReportsPage;
