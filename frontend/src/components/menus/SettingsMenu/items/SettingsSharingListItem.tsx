import React from "react";
import LinkListItem from "../../../common/LinkListItem";
import {SETTINGS_SHARING_PAGE_ROUTE} from "../../../../pages/SettingsPage/pages/SettingsSharingPage";
import PeopleIcon from "@material-ui/icons/People";

function SettingsSharingListItem() {
    return (
        <LinkListItem
            title="Connected accounts"
            to={SETTINGS_SHARING_PAGE_ROUTE}
            icon={PeopleIcon}
        />
    )
}

export default SettingsSharingListItem;
