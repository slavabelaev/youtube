import React from "react";
import LinkListItem from "../../../common/LinkListItem";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {SETTINGS_NOTIFICATIONS_PAGE_ROUTE} from "../../../../pages/SettingsPage/pages/SettingsNotificationsPage";

function SettingsNotificationsListItem() {
    return (
        <LinkListItem
            title="Notifications"
            to={SETTINGS_NOTIFICATIONS_PAGE_ROUTE}
            icon={NotificationsIcon}
        />
    )
}

export default SettingsNotificationsListItem;
