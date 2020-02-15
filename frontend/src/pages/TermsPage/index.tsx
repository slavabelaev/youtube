import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import {RouteLink} from "../../components/LinkListItem";

export const TERMS_PAGE_ROUTE = '/terms';

export const TERMS_MENU_ITEM: RouteLink = {
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
