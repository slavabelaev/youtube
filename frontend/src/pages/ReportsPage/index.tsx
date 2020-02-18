import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import FlagIcon from "@material-ui/icons/Flag";
import {RouteLink} from "../../components/common/LinkListItem";

export const REPORTS_PAGE_ROUTE = '/reports';

export const REPORTS_MENU_ITEM: RouteLink = {
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
