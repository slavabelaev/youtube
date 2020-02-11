import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import MenuItem from "../../interfaces/MenuItem";

export const DEV_PAGE_ROUTE = '/dev';

export const DEV_MENU_ITEM: MenuItem = {
    title: 'Разработчикам',
    to: DEV_PAGE_ROUTE
};

const Page = React.lazy(() => import('./DevelopersPage'));

const DevelopersPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default DevelopersPage;
