import React from "react";
import List from "@material-ui/core/List";
import RouteListItem from "../common/RouteListItem";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

export interface PlaylistProps {
    id: string;
    title: string;
    linkTo: string;
}

export interface PlaylistsProps {
    items: PlaylistProps[];
}

const Playlists: React.FC<PlaylistsProps> = ({ items }) => {
    const renderItem = (item: PlaylistProps) => (
        <RouteListItem
            key={item.id}
            title={item.title}
            to={item.linkTo}
            icon={PlaylistPlayIcon}
        />
    );

    return (
        <List>
            {items.map(renderItem)}
        </List>
    )
};

export default Playlists;
