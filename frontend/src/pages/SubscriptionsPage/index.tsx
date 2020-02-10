import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";

export const SUBSCRIPTIONS_PAGE_ROUTE = '/feed/subscriptions';

const Page = React.lazy(() => import('./SubscriptionsPage'));

const SubscriptionsPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default SubscriptionsPage;
