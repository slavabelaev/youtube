import React from "react";
import MenuListItem from "../common/MenuListItem";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

function AddToQueueListItem() {
    return (
        <MenuListItem
            title="Add account"
            icon={<PlaylistPlayIcon />}
        />
    )
}

export default AddToQueueListItem;
