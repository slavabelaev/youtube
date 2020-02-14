import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import {MenuItem} from "../../components/MenuListItem";

export const PRESS_PAGE_ROUTE = '/new';

export const PRESS_MENU_ITEM: MenuItem = {
    title: 'Прессе',
    to: PRESS_PAGE_ROUTE
};

const Page = React.lazy(() => import('./PressPage'));

const PressPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default PressPage;
