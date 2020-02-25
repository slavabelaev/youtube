import React from "react";
import LinkListItem from "../../../common/LinkListItem";
import {SETTINGS_ADVANCED_PAGE_ROUTE} from "../../../../pages/SettingsPage/pages/SettingsAdvancedPage";
import SettingsIcon from "@material-ui/icons/Settings";

function SettingsAdvancedListItem() {
    return (
        <LinkListItem
            title="Advanced settings"
            to={SETTINGS_ADVANCED_PAGE_ROUTE}
            icon={SettingsIcon}
        />
    )
}

export default SettingsAdvancedListItem;
