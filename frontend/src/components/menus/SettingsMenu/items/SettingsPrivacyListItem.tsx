import React from "react";
import LinkListItem from "../../../common/LinkListItem";
import InfoIcon from "@material-ui/icons/Info";
import {SETTINGS_PRIVACY_PAGE_ROUTE} from "../../../../pages/SettingsPage/pages/SettingsPrivacyPage";

function SettingsPrivacyListItem() {
    return (
        <LinkListItem
            title="Privacy"
            to={SETTINGS_PRIVACY_PAGE_ROUTE}
            icon={InfoIcon}
        />
    )
}

export default SettingsPrivacyListItem;
