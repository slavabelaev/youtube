import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import RouteItem from "../../../../interfaces/RouteItem";
import {Notifications} from "@material-ui/icons";

export const SETTINGS_NOTIFICATIONS_PAGE_ROUTE = '/notifications';

export const SETTINGS_NOTIFICATIONS_ROUTE: RouteItem = {
    title: 'Уведомления',
    to: SETTINGS_NOTIFICATIONS_PAGE_ROUTE,
    icon: Notifications
};

const Page = React.lazy(() => import('./SettingsNotificationsPage'));

const SettingsNotificationsPage: React.FC = () => (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
);

export default SettingsNotificationsPage;
