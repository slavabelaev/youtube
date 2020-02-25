import React from "react";
import List from "@material-ui/core/List";
import SettingsAccountListItem from "./items/SettingsAccountListItem";
import SettingsNotificationsListItem from "./items/SettingsNotificationsListItem";
import SettingsPlaybackListItem from "./items/SettingsPlaybackListItem";
import SettingsPrivacyListItem from "./items/SettingsPrivacyListItem";
import SettingsSharingListItem from "./items/SettingsSharingListItem";
import SettingsAdvancedListItem from "./items/SettingsAdvancedListItem";

function SettingsMenu() {
    return (
        <List>
            <SettingsAccountListItem/>
            <SettingsNotificationsListItem/>
            <SettingsPlaybackListItem/>
            <SettingsPrivacyListItem />
            <SettingsSharingListItem/>
            <SettingsAdvancedListItem/>
        </List>
    );
}

export default SettingsMenu;
