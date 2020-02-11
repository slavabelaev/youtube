import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import RouteItem from "../../interfaces/RouteItem";

export const NEW_PAGE_ROUTE = '/new';

export const NEW_ROUTE: RouteItem = {
    title: 'Новые функции',
    to: NEW_PAGE_ROUTE
};

const Page = React.lazy(() => import('./NewPage'));

const NewPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default NewPage;
