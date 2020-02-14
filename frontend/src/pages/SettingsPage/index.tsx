import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import SettingsIcon from "@material-ui/icons/Settings";
import {MenuItem} from "../../components/MenuListItem";

export const SETTINGS_PAGE_ROUTE = '/settings';

export const SETTINGS_MENU_ITEM: MenuItem = {
    title: 'Настройки',
    to: SETTINGS_PAGE_ROUTE,
    icon: SettingsIcon
};

const Page = React.lazy(() => import('./SettingsPage'));

const SettingsPage: React.FC = () => (
    <Layout largeScreenVariant="temporary">
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default SettingsPage;
