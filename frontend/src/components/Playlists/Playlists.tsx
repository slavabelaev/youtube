import React from "react";
import List from "@material-ui/core/List";
import LoadList, {LoadListProps} from "../common/LoadList";
import Playlist, {PlaylistProps} from "./Playlist";

export interface PlaylistsProps {
    onLoad: LoadListProps['onLoad'];
}

function Playlists({ onLoad }: PlaylistsProps) {
    const renderItem = (item: PlaylistProps) => (
        <Playlist {...item} />
    );

    return (
        <List>
            <LoadList
                onLoad={onLoad}
                renderItem={renderItem}
            />
        </List>
    )
}

export default Playlists;
