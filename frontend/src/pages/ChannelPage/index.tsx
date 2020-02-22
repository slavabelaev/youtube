import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import {RouteLink} from "../../components/common/LinkListItem";

export const CHANNEL_PAGE_ROUTE = '/channel/:id';

export const CHANNEL_MENU_ITEM: RouteLink = {
    title: 'Мой канал',
    to: CHANNEL_PAGE_ROUTE,
    icon: AccountBoxIcon
};

const Page = React.lazy(() => import('./ChannelPage'));

function ChannelPage() {
	return (
    <Suspense fallback={<LinearProgress />}>
        <Layout>
            <Page />
        </Layout>
    </Suspense>
)
}

export default ChannelPage;
