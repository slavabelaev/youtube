import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import RouteItem from "../../interfaces/RouteItem";
import WhatshotIcon from "@material-ui/icons/Whatshot";

export const TRENDING_PAGE_ROUTE = '/feed/trending';

export const TRENDING_ROUTE: RouteItem = {
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
