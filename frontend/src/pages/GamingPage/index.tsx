import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";

export const GAMING_PAGE_ROUTE = '/gaming';

const Page = React.lazy(() => import('./GamingPage'));

function GamingPage() {
	return (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
)
}

export default GamingPage;
