import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import RouteItem from "../../interfaces/RouteItem";

export const COPYRIGHT_PAGE_ROUTE = '/copyright';

export const COPYRIGHT_ROUTE: RouteItem = {
    title: 'Правообладателям',
    to: COPYRIGHT_PAGE_ROUTE
};

const Page = React.lazy(() => import('./CopyrightPage'));

const CopyrightPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default CopyrightPage;
