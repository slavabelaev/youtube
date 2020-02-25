import React from "react";
import MenuListItem, {MenuListItemProps} from "../common/MenuListItem";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import SaveToPlaylistTrigger, {SaveToPlaylistTriggerProps} from "../triggers/SaveToPlaylistTrigger";

export interface SaveToPlaylistListItemProps {
    onClick?: MenuListItemProps['onClick'];
}

function SaveToPlaylistListItem({ onClick }: SaveToPlaylistListItemProps) {
    const renderTrigger: SaveToPlaylistTriggerProps['renderTrigger'] = (showPlaylists) => (
        <MenuListItem
            title={'Save to playlist'}
            icon={<PlaylistAddIcon />}
            onClick={() => {
                showPlaylists();
                if (onClick) onClick();
            }}
        />
    );

    return (
        <SaveToPlaylistTrigger
            renderTrigger={renderTrigger}
        />
    )
}

export default SaveToPlaylistListItem;
