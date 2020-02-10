import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";

const Page = React.lazy(() => import('./NotFoundPage'));

const NotFoundPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default NotFoundPage;
