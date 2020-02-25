import React from "react";
import MenuListItem from "../common/MenuListItem";
import WatchLaterIcon from "@material-ui/icons/WatchLater";

function SaveToWatchLaterListItem() {
    return (
        <MenuListItem
            title={'Save to "Watch later"'}
            icon={<WatchLaterIcon />}
        />
    )
}

export default SaveToWatchLaterListItem;
