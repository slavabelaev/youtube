import React from "react";
import LinkListItem from "../common/LinkListItem";
import {PLAYLIST_PAGE_ROUTE} from "../../pages/PlaylistPage";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

function FavoritesListItem() {
    return (
        <LinkListItem
            title="Favorites"
            to={`${PLAYLIST_PAGE_ROUTE}/favorites`}
            icon={ThumbUpIcon}
        />
    )
}

export default FavoritesListItem;
