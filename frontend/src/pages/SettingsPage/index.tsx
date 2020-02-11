import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import RouteItem from "../../interfaces/RouteItem";
import SettingsIcon from "@material-ui/icons/Settings";

export const SETTINGS_PAGE_ROUTE = '/settings';

export const SETTINGS_ROUTE: RouteItem = {
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
