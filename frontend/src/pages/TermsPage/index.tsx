import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import {MenuItem} from "../../components/MenuListItem";

export const TERMS_PAGE_ROUTE = '/terms';

export const TERMS_MENU_ITEM: MenuItem = {
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
