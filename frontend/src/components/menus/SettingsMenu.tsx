import React from "react";
import { useRouteMatch } from "react-router-dom";
import Menu from "../Menu";
import {SETTINGS_ACCOUNT_MENU_ITEM} from "../../pages/SettingsPage/pages/SettingsAccountPage";
import {SETTINGS_NOTIFICATIONS_MENU_ITEM} from "../../pages/SettingsPage/pages/SettingsNotificationsPage";
import {SETTINGS_PLAYBACK_MENU_ITEM} from "../../pages/SettingsPage/pages/SettingsPlaybackPage";
import {SETTINGS_PRIVACY_MENU_ITEM} from "../../pages/SettingsPage/pages/SettingsPrivacyPage";
import {SETTINGS_SHARING_MENU_ITEM} from "../../pages/SettingsPage/pages/SettingsSharingPage";
import {SETTINGS_ADVANCED_MENU_ITEM} from "../../pages/SettingsPage/pages/SettingsAdvancedPage";
import {MenuItem} from "../MenuListItem";

const SettingsMenu: React.FC = () => {
    const match = useRouteMatch();
    const items: MenuItem[] = [
        SETTINGS_ACCOUNT_MENU_ITEM,
        SETTINGS_NOTIFICATIONS_MENU_ITEM,
        SETTINGS_PLAYBACK_MENU_ITEM,
        SETTINGS_PRIVACY_MENU_ITEM,
        SETTINGS_SHARING_MENU_ITEM,
        SETTINGS_ADVANCED_MENU_ITEM
    ].map(item => ({ ...item, to: match.url + item.to }));

    return (
        <Menu items={items} />
    );
};

export default SettingsMenu;
