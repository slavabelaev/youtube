import React from "react";
import { useRouteMatch } from "react-router-dom";
import Menu from "../Menu";
import {SETTINGS_ACCOUNT_ROUTE} from "../../pages/SettingsPage/pages/SettingsAccountPage";
import {SETTINGS_NOTIFICATIONS_ROUTE} from "../../pages/SettingsPage/pages/SettingsNotificationsPage";
import {SETTINGS_PLAYBACK_ROUTE} from "../../pages/SettingsPage/pages/SettingsPlaybackPage";
import {SETTINGS_PRIVACY_ROUTE} from "../../pages/SettingsPage/pages/SettingsPrivacyPage";
import {SETTINGS_SHARING_ROUTE} from "../../pages/SettingsPage/pages/SettingsSharingPage";
import {SETTINGS_ADVANCED_ROUTE} from "../../pages/SettingsPage/pages/SettingsAdvancedPage";
import RouteItem from "../../interfaces/RouteItem";

const SettingsMenu: React.FC = () => {
    const match = useRouteMatch();
    const items: RouteItem[] = [
        SETTINGS_ACCOUNT_ROUTE,
        SETTINGS_NOTIFICATIONS_ROUTE,
        SETTINGS_PLAYBACK_ROUTE,
        SETTINGS_PRIVACY_ROUTE,
        SETTINGS_SHARING_ROUTE,
        SETTINGS_ADVANCED_ROUTE
    ].map(item => ({ ...item, to: match.url + item.to }));

    return (
        <Menu items={items} />
    );
};

export default SettingsMenu;
