import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";

export const HOME_PAGE_ROUTE = '/';

const Page = React.lazy(() => import('./HomePage'));

const HomePage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default HomePage;
