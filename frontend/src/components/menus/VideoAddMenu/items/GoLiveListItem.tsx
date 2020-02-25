import React from "react";
import LinkListItem from "../../../common/LinkListItem";
import LiveTvIcon from "@material-ui/icons/LiveTv";

function GoLiveListItem() {
    return (
        <LinkListItem
            title="Go live"
            to="/video/live"
            icon={() => <LiveTvIcon color="primary" />}
        />
    )
}

export default GoLiveListItem;
