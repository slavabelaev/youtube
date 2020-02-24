import React from "react";
import LinkListItem from "../common/LinkListItem";
import {PLAYLIST_PAGE_ROUTE} from "../../pages/PlaylistPage";
import WatchLaterIcon from "@material-ui/icons/WatchLater";

function WatchLaterListItem() {
    return (
        <LinkListItem
            title="Watch later"
            to={`${PLAYLIST_PAGE_ROUTE}/WL`}
            icon={WatchLaterIcon}
        />
    )
}

export default WatchLaterListItem;
