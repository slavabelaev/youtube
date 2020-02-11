import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import RouteItem from "../../../../interfaces/RouteItem";
import {People} from "@material-ui/icons";

export const SETTINGS_SHARING_PAGE_ROUTE = '/sharing';

export const SETTINGS_SHARING_ROUTE: RouteItem = {
    title: 'Связанные аккаунты',
    to: SETTINGS_SHARING_PAGE_ROUTE,
    icon: People
};

const Page = React.lazy(() => import('./SettingsSharingPage'));

const SettingsSharingPage: React.FC = () => (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
);

export default SettingsSharingPage;
