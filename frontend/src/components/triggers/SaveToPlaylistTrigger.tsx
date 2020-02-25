import React from "react";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import PlaylistsMultipleChoice from "../PlaylistsMultipleChoice";
import DialogTrigger, {DialogTriggerProps} from "./DialogTrigger";

export interface SaveToPlaylistTriggerProps {
    renderTrigger?: DialogTriggerProps['renderTrigger'];
}

function SaveToPlaylistTrigger(props: SaveToPlaylistTriggerProps) {
    const renderTrigger = props.renderTrigger || (
        onClick => (
            <Button
                variant="text"
                startIcon={<PlaylistAddIcon />}
                onClick={onClick}
            >
                Save
            </Button>
        )
    );

    return (
        <DialogTrigger
            title="Save to..."
            maxWidth="xs"
            content={<PlaylistsMultipleChoice />}
            renderTrigger={renderTrigger}
            renderActions={() => (
                <Button
                    startIcon={<AddIcon />}
                >
                    Create new playlist
                </Button>
            )}
        />
    )
}

export default SaveToPlaylistTrigger;
