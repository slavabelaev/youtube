import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import RouteItem from "../../interfaces/RouteItem";
import FlagIcon from "@material-ui/icons/Flag";

export const REPORTS_PAGE_ROUTE = '/reports';

export const REPORTS_ROUTE: RouteItem = {
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
