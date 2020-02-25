import React from "react";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import PlaylistsMultipleChoice from "../PlaylistsMultipleChoice";
import DialogButton, {DialogButtonProps} from "./DialogButton";

export interface SaveToPlaylistButtonProps {
    renderAction?: DialogButtonProps['renderAction'];
}

function SaveToPlaylistButton(props: SaveToPlaylistButtonProps) {
    const renderAction = props.renderAction || (
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
        <DialogButton
            title="Save to..."
            maxWidth="xs"
            content={<PlaylistsMultipleChoice />}
            renderAction={renderAction}
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

export default SaveToPlaylistButton;
