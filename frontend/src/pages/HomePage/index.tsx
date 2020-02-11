import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import MenuItem from "../../interfaces/MenuItem";
import HomeIcon from "@material-ui/icons/Home";

export const HOME_PAGE_ROUTE = '/';

export const HOME_MENU_ITEM: MenuItem = {
    title: 'Главная',
    to: HOME_PAGE_ROUTE,
    exact: true,
    icon: HomeIcon
};

const Page = React.lazy(() => import('./HomePage'));

const HomePage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default HomePage;
