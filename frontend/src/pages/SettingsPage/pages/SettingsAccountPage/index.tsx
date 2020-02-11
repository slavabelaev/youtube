import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import MenuItem from "../../../../interfaces/MenuItem";
import {AccountBox} from "@material-ui/icons";

export const SETTINGS_ACCOUNT_PAGE_ROUTE = '/account';

export const SETTINGS_ACCOUNT_MENU_ITEM: MenuItem = {
    title: 'Аккаунт',
    to: SETTINGS_ACCOUNT_PAGE_ROUTE,
    icon: AccountBox
};

const Page = React.lazy(() => import('./SettingsAccountPage'));

const SettingsAccountPage: React.FC = () => (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
);

export default SettingsAccountPage;
