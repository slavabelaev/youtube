import React from "react";
import LinkListItem from "../../../common/LinkListItem";
import MusicVideoIcon from "@material-ui/icons/MusicVideo";

function AppsMusicListItem() {
    return (
        <LinkListItem
            title="YonTube Music"
            to="/apps/music"
            icon={() => <MusicVideoIcon color="primary" />}
        />
    )
}

export default AppsMusicListItem;
