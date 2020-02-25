import React from "react";
import {List} from "@material-ui/core";
import ReportListItem from "../../listItems/ReportListItem";
import AddTranslationsListItem from "../../listItems/AddTranslationsListItem";

function VideoMenu() {
    return (
        <List>
            <ReportListItem/>
            <AddTranslationsListItem/>
        </List>
    )
}

export default VideoMenu;
