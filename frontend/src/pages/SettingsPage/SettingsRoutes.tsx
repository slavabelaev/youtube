import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import SettingsAccountPage, {SETTINGS_ACCOUNT_PAGE_ROUTE} from "./pages/SettingsAccountPage";
import SettingsNotificationsPage, {SETTINGS_NOTIFICATIONS_PAGE_ROUTE} from "./pages/SettingsNotificationsPage";
import SettingsPlaybackPage, {SETTINGS_PLAYBACK_PAGE_ROUTE} from "./pages/SettingsPlaybackPage";
import SettingsPrivacyPage, {SETTINGS_PRIVACY_PAGE_ROUTE} from "./pages/SettingsPrivacyPage";
import SettingsSharingPage, {SETTINGS_SHARING_PAGE_ROUTE} from "./pages/SettingsSharingPage";
import SettingsAdvancedPage, {SETTINGS_ADVANCED_PAGE_ROUTE} from "./pages/SettingsAdvancedPage";

function SettingsRoutes() {
	return (
    <Switch>
        <Route path={SETTINGS_ACCOUNT_PAGE_ROUTE} component={SettingsAccountPage} />
        <Route path={SETTINGS_NOTIFICATIONS_PAGE_ROUTE} component={SettingsNotificationsPage} />
        <Route path={SETTINGS_PLAYBACK_PAGE_ROUTE} component={SettingsPlaybackPage} />
        <Route path={SETTINGS_PRIVACY_PAGE_ROUTE} component={SettingsPrivacyPage} />
        <Route path={SETTINGS_SHARING_PAGE_ROUTE} component={SettingsSharingPage} />
        <Route path={SETTINGS_ADVANCED_PAGE_ROUTE} component={SettingsAdvancedPage} />
        <Redirect to={SETTINGS_ACCOUNT_PAGE_ROUTE} />
    </Switch>
)
}

export default SettingsRoutes;
