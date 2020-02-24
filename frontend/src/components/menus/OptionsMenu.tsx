import React from "react";
import {List} from "@material-ui/core";
import SettingsListItem from "../listItems/SettingsListItem";
import ReportHistoryListItem from "../listItems/ReportHistoryListItem";
import HelpListItem from "../listItems/HelpListItem";
import SendFeedbackListItem from "../listItems/SendFeedbackListItem";

function OptionsMenu() {
    return (
        <List>
            <SettingsListItem/>
            <ReportHistoryListItem/>
            <HelpListItem/>
            <SendFeedbackListItem/>
        </List>
    )
}

export default OptionsMenu;
