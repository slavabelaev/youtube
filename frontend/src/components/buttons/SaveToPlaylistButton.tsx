import React, {useState} from "react";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import Button from "@material-ui/core/Button";
import {createStyles, Dialog, Theme} from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/core/styles";
import LockIcon from "@material-ui/icons/Lock";
import CheckedListItem from "../common/CheckedListItem";
import AppBar from "@material-ui/core/AppBar";
import LoadList from "../common/LoadList";
import {generatePlaylists} from "../../services/playlistsService";
import {PlaylistModel} from "../Playlists/Playlist";

const useStyles = makeStyles((theme: Theme) => createStyles({
    content: {
        padding: 0
    },
    appBar: {
        borderWidth: 0,
        borderBottomWidth: 1
    },
    closeButton: {
        marginLeft: 'auto'
    },
    actions: {
        borderTop: `1px solid ${theme.palette.divider}`
    }
}));

function SaveToPlaylistButton() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    const renderItem = (item: PlaylistModel) => (
        <CheckedListItem
            key={item.id}
            primary={item.title}
            secondaryAction={<LockIcon color="action" />}
        />
    );

    const dialog = (
        <Dialog
            maxWidth="xs"
            open={open}
            onClose={toggle}
        >
            <AppBar
                className={classes.appBar}
                color="inherit"
                variant="outlined"
                position="static"
            >
                <Toolbar>
                    <Typography variant="h6">
                        Сохранить в...
                    </Typography>
                    <IconButton
                        className={classes.closeButton}
                        edge="end"
                        onClick={toggle}
                    >
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <DialogContent
                className={classes.content}
            >
                <List disablePadding>
                    <LoadList
                        onLoad={generatePlaylists}
                        renderItem={renderItem}
                    />
                </List>
            </DialogContent>
            <DialogActions
                className={classes.actions}
            >
                <Button
                    startIcon={<AddIcon />}
                >
                    Создать новый плейлист
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
            Сохранить
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
