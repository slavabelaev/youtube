import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import RouteItem from "../../interfaces/RouteItem";

export const CREATORS_PAGE_ROUTE = '/creators';

export const CREATORS_ROUTE: RouteItem = {
    title: 'Авторам',
    to: CREATORS_PAGE_ROUTE
};

const Page = React.lazy(() => import('./CreatorsPage'));

const CreatorsPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default CreatorsPage;
