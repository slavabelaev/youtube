import React from "react";
import List from "@material-ui/core/List";
import RouteListItem from "../RouteListItem";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import LoadList, {LoadListProps} from "../LoadList";

export interface PlaylistProps {
    id: string;
    title: string;
    linkTo: string;
}

export interface PlaylistsProps {
    onLoad: LoadListProps['onLoad'];
}

const Playlists: React.FC<PlaylistsProps> = ({ onLoad }) => {
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
            <LoadList
                onLoad={onLoad}
                renderItem={renderItem}
            />
        </List>
    )
};

export default Playlists;
