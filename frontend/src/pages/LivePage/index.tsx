import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";

export const LIVE_PAGE_ROUTE = '/streaming';



const Page = React.lazy(() => import('./LivePage'));

function StreamingPage() {
	return (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
)
}

export default StreamingPage;
