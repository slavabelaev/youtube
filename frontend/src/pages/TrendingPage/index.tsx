import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";

export const TRENDING_PAGE_ROUTE = '/feed/trending';

const Page = React.lazy(() => import('./TrendingPage'));

const TrendingPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default TrendingPage;
