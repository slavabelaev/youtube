import React from "react";
import LinkListItem from "../common/LinkListItem";
import {SETTINGS_PAGE_ROUTE} from "../../pages/SettingsPage";
import SettingsIcon from "@material-ui/icons/Settings";

function SettingsListItem() {
    return (
        <LinkListItem
            title="Settings"
            to={SETTINGS_PAGE_ROUTE}
            icon={SettingsIcon}
        />
    )
}

export default SettingsListItem;
