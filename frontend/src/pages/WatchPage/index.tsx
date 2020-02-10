import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";

export const WATCH_PAGE_ROUTE = '/watch';

const Page = React.lazy(() => import('./WatchPage'));

const WatchPage: React.FC = () => (
    <Layout largeScreenVariant="temporary">
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default WatchPage;
