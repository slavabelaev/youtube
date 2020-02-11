import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import MenuItem from "../../interfaces/MenuItem";

export const NEW_PAGE_ROUTE = '/new';

export const NEW_MENU_ITEM: MenuItem = {
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
