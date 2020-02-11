import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import MenuItem from "../../interfaces/MenuItem";

export const ABOUT_PAGE_ROUTE = '/about';

export const ABOUT_MENU_ITEM: MenuItem = {
    title: 'О сервисе',
    to: ABOUT_PAGE_ROUTE
};

const Page = React.lazy(() => import('./AboutPage'));

const AboutPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default AboutPage;
