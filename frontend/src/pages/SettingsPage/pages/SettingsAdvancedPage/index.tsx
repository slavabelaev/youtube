import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import RouteItem from "../../../../interfaces/RouteItem";
import {Settings} from "@material-ui/icons";

export const SETTINGS_ADVANCED_PAGE_ROUTE = '/advanced';

export const SETTINGS_ADVANCED_ROUTE: RouteItem = {
    title: 'Расширенные настройки',
    to: SETTINGS_ADVANCED_PAGE_ROUTE,
    icon: Settings
};

const Page = React.lazy(() => import('./SettingsAdvancedPage'));

const SettingsAdvancedPage: React.FC = () => (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
);

export default SettingsAdvancedPage;
