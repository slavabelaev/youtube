import React from "react";
import Items, {ItemsProps} from "../../common/Items";
import List from "@material-ui/core/List";
import {PlaylistModel} from "../../../models/PlaylistModel";
import {PLAYLIST_PAGE_ROUTE} from "../../../pages/PlaylistPage";
import LinkListItem from "../../common/LinkListItem";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

export interface PlaylistsProps {
    onLoad: ItemsProps['onLoad'];
}

function Playlists({
    onLoad
}: PlaylistsProps) {
    const renderItem = (item: PlaylistModel) => (
        <LinkListItem
            title={item.title}
            to={`${PLAYLIST_PAGE_ROUTE}/${item.id}`}
            exact={true}
            icon={PlaylistPlayIcon}
        />
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
