import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import RouteItem from "../../interfaces/RouteItem";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

export const CHANNEL_PAGE_ROUTE = '/channel/:id';

export const CHANNEL_ROUTE: RouteItem = {
    title: 'Мой канал',
    to: CHANNEL_PAGE_ROUTE,
    icon: AccountBoxIcon
};

const Page = React.lazy(() => import('./ChannelPage'));

const ChannelPage: React.FC = () => (
    <Suspense fallback={<LinearProgress />}>
        <Layout>
            <Page />
        </Layout>
    </Suspense>
);

export default ChannelPage;
