import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import {RouteLink} from "../../components/common/LinkListItem";

export const SUBSCRIPTIONS_PAGE_ROUTE = '/feed/subscriptions';

export const SUBSCRIPTIONS_MENU_ITEM: RouteLink = {
    title: 'Подписки',
    to: SUBSCRIPTIONS_PAGE_ROUTE,
    icon: SubscriptionsIcon
};

const Page = React.lazy(() => import('./SubscriptionsPage'));

const SubscriptionsPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default SubscriptionsPage;
