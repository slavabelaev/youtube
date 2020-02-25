import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";

export const CHANNEL_PAGE_ROUTE = '/channel/:id';



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
