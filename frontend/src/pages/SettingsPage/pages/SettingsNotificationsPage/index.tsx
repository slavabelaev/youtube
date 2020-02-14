import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import {Notifications} from "@material-ui/icons";
import {MenuItem} from "../../../../components/MenuListItem";

export const SETTINGS_NOTIFICATIONS_PAGE_ROUTE = '/notifications';

export const SETTINGS_NOTIFICATIONS_MENU_ITEM: MenuItem = {
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
