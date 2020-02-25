import React from "react";
import MenuListItem from "../common/MenuListItem";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import SaveToPlaylistButton, {SaveToPlaylistButtonProps} from "../buttons/SaveToPlaylistButton";

function SaveToPlaylistListItem() {
    const renderAction: SaveToPlaylistButtonProps['renderAction'] = (onClick) => (
        <MenuListItem
            title={'Save to playlist'}
            icon={<PlaylistAddIcon />}
            onClick={onClick}
        />
    );

    return (
        <SaveToPlaylistButton
            renderAction={renderAction}
        />
    )
}

export default SaveToPlaylistListItem;
