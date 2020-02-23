import React from "react";
import List from "@material-ui/core/List";
import Items, {ItemsProps} from "../common/Items";
import Playlist, {PlaylistProps} from "./Playlist";

export interface PlaylistsProps {
    onLoad: ItemsProps['onLoad'];
}

function Playlists({ onLoad }: PlaylistsProps) {
    const renderItem = (item: PlaylistProps) => (
        <Playlist {...item} />
    );

    return (
        <List>
            <Items
                onLoad={onLoad}
                renderItem={renderItem}
            />
        </List>
    )
}

export default Playlists;
