import React from "react";
import {List} from "@material-ui/core";
import RouteListItem from "../common/RouteListItem";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

const PlaylistsMenu: React.FC = () => {
    const renderItem = (_: null, index: number) => (
        <RouteListItem
            title={`Плэйлист ${index}`}
            to={`/playlist/${index}`}
            icon={PlaylistPlayIcon}
        />
    );
    return (
        <List>
            {Array(10).fill(null).map(renderItem)}
        </List>
    );
};

export default PlaylistsMenu;
