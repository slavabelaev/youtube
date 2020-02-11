import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import MenuItem from "../../../../interfaces/MenuItem";
import {Info} from "@material-ui/icons";

export const SETTINGS_PRIVACY_PAGE_ROUTE = '/privacy';

export const SETTINGS_PRIVACY_MENU_ITEM: MenuItem = {
    title: 'Конфиденциальность',
    to: SETTINGS_PRIVACY_PAGE_ROUTE,
    icon: Info
};

const Page = React.lazy(() => import('./SettingsPrivacyPage'));

const SettingsPrivacyPage: React.FC = () => (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
);

export default SettingsPrivacyPage;
