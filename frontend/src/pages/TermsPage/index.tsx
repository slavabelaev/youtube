import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import RouteItem from "../../interfaces/RouteItem";

export const TERMS_PAGE_ROUTE = '/terms';

export const TERMS_ROUTE: RouteItem = {
    title: 'Условия использования',
    to: TERMS_PAGE_ROUTE
};

const Page = React.lazy(() => import('./TermsPage'));

const TermsPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default TermsPage;
