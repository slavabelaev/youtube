import React from "react";
import MenuListItem from "../common/MenuListItem";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

function SaveToPlaylistListItem() {
    return (
        <MenuListItem
            title={'Save to playlist'}
            icon={<PlaylistAddIcon />}
        />
    )
}

export default SaveToPlaylistListItem;
