import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import AddToQueueListItem from "../../listItems/AddToQueueListItem";
import SaveToWatchLaterListItem from "../../listItems/SaveToWatchLaterListItem";
import SaveToPlaylistListItem from "../../listItems/SaveToPlaylistListItem";
import NotInterestedListItem from "../../listItems/NotInterestedListItem";
import NotRecommendListItem from "../../listItems/NotRecommendListItem";
import ReportListItem from "../../listItems/ReportListItem";

function VideoMenu() {
    const primaryList = (
        <List>
            <AddToQueueListItem/>
            <SaveToWatchLaterListItem/>
            <SaveToPlaylistListItem/>
        </List>
    );

    const secondaryList = (
        <List>
            <NotInterestedListItem/>
            <NotRecommendListItem/>
            <ReportListItem/>
        </List>
    );

    return (
        <div>
            {primaryList}
            <Divider />
            {secondaryList}
        </div>
    )
}

export default VideoMenu;
