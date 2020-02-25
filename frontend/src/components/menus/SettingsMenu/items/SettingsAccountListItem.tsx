import React from "react";
import LinkListItem from "../../../common/LinkListItem";
import {SETTINGS_ACCOUNT_PAGE_ROUTE} from "../../../../pages/SettingsPage/pages/SettingsAccountPage";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

function SettingsAccountListItem() {
    return (
        <LinkListItem
            title="Account"
            to={SETTINGS_ACCOUNT_PAGE_ROUTE}
            icon={AccountBoxIcon}
        />
    )
}

export default SettingsAccountListItem;
