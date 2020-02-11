import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import RouteItem from "../../interfaces/RouteItem";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

export const PAID_MEMBERSHIPS_PAGE_ROUTE = '/paid-memberships';

export const PAID_MEMBERSHIPS_ROUTE: RouteItem = {
    title: 'Платные подписки',
    to: PAID_MEMBERSHIPS_PAGE_ROUTE,
    icon: MonetizationOnIcon
};

const Page = React.lazy(() => import('./PaidMembershipsPage'));

const PaidMembershipsPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default PaidMembershipsPage;
