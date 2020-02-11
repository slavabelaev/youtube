import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import MenuItem from "../../interfaces/MenuItem";
import WhatshotIcon from "@material-ui/icons/Whatshot";

export const TRENDING_PAGE_ROUTE = '/feed/trending';

export const TRENDING_MENU_ITEM: MenuItem = {
    title: 'В тренде',
    to: TRENDING_PAGE_ROUTE,
    icon: WhatshotIcon
};

const Page = React.lazy(() => import('./TrendingPage'));

const TrendingPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default TrendingPage;
