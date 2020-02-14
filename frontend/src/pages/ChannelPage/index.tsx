import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import {MenuItem} from "../../components/MenuListItem";

export const CHANNEL_PAGE_ROUTE = '/channel/:id';

export const CHANNEL_MENU_ITEM: MenuItem = {
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
