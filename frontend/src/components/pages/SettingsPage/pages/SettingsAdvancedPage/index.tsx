import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import {Settings} from "@material-ui/icons";
import {RouteLink} from "../../../../common/LinkListItem";

export const SETTINGS_ADVANCED_PAGE_ROUTE = '/advanced';

export const SETTINGS_ADVANCED_MENU_ITEM: RouteLink = {
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
