import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import {MenuItem} from "../../components/MenuListItem";

export const ADS_PAGE_ROUTE = '/ads';

export const ADS_MENU_ITEM: MenuItem = {
    title: 'Рекламодателям',
    to: ADS_PAGE_ROUTE
};

const Page = React.lazy(() => import('./AdsPage'));

const AdsPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default AdsPage;
