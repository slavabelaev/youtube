import React, {useState} from "react";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import Button from "@material-ui/core/Button";
import {createStyles, Dialog, Theme} from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {makeStyles} from "@material-ui/core/styles";
import PopoverAppBar from "../PopoverAppBar";
import PlaylistsMultipleChoice from "../PlaylistsMultipleChoice";

const useStyles = makeStyles((theme: Theme) => createStyles({
    content: {
        padding: 0
    },
    actions: {
        borderTop: `1px solid ${theme.palette.divider}`
    }
}));

function SaveToPlaylistButton() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    const dialog = (
        <Dialog
            maxWidth="xs"
            open={open}
            onClose={toggle}
        >
            <PopoverAppBar
                title="Save to..."
                endAction={
                    <IconButton
                        edge="end"
                        onClick={toggle}
                    >
                        <CloseIcon />
                    </IconButton>
                }
            />
            <DialogContent
                className={classes.content}
            >
                <PlaylistsMultipleChoice />
            </DialogContent>
            <DialogActions
                className={classes.actions}
            >
                <Button
                    startIcon={<AddIcon />}
                >
                    Create new playlist
                </Button>
            </DialogActions>
        </Dialog>
    );

    const button = (
        <Button
            variant="text"
            startIcon={<PlaylistAddIcon />}
            onClick={toggle}
        >
            Save
        </Button>
    );

    return (
        <>
            {button}
            {dialog}
        </>
    )
}

export default SaveToPlaylistButton;
