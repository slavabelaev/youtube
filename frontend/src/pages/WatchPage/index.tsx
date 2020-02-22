import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";

export const WATCH_PAGE_ROUTE = '/watch';

const Page = React.lazy(() => import('./WatchPage'));

function WatchPage() {
	return (
    <Layout largeScreenVariant="temporary">
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
)
}

export default WatchPage;
