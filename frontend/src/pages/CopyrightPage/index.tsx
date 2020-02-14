import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import {MenuItem} from "../../components/MenuListItem";

export const COPYRIGHT_PAGE_ROUTE = '/copyright';

export const COPYRIGHT_MENU_ITEM: MenuItem = {
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
