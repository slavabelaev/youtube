import React from "react";
import LinkListItem from "../common/LinkListItem";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

export interface PlaylistModel {
    id: string;
    title: string;
    linkTo: string;
}

export interface PlaylistProps extends PlaylistModel {
}

const Playlist: React.FC<PlaylistProps> = (props) => (
    <LinkListItem
        key={props.id}
        title={props.title}
        to={props.linkTo}
        icon={PlaylistPlayIcon}
    />
);

export default Playlist;
