import MultipleChoiceList from "./common/MultipleChoice";
import {generatePlaylists} from "../services/playlistsService";
import {PlaylistModel} from "../models/PlaylistModel";
import React from "react";

function PlaylistsMultipleChoice() {
    return (
        <MultipleChoiceList
            onLoad={generatePlaylists}
            fromModelToProps={(item: PlaylistModel) => ({
                label: item.title,
                value: item.id
            })}
        />
    )
}

export default PlaylistsMultipleChoice;
