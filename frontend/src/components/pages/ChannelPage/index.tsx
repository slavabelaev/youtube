import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";

export const CHANNEL_PAGE_ROUTE = '/channel/:id';

const Page = React.lazy(() => import('./ChannelPage'));

const ChannelPage: React.FC = () => (
    <Suspense fallback={<LinearProgress />}>
        <Layout>
            <Page />
        </Layout>
    </Suspense>
);

export default ChannelPage;
