import React from "react";
import LinkListItem from "../../../common/LinkListItem";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

function AppsArtistsListItem() {
    return (
        <LinkListItem
            title="YonTube Artists"
            to="/apps/artists"
            icon={() => <MusicNoteIcon color="primary" />}
        />
    )
}

export default AppsArtistsListItem;
