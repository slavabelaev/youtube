import React from "react";
import {List} from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Playlists from "../Playlists";

function PlaylistsMenu() {
    const [open, setOpen] = React.useState(false);
    const toggle = () => setOpen(!open);

    const triggerItem = (
        <List>
            <ListItem button dense onClick={toggle}>
                <ListItemIcon>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemIcon>
                <ListItemText primary={open ? 'Show less' : 'Show more'} />
            </ListItem>
        </List>
    );

    const collapse = (
        <Collapse in={open} timeout="auto" unmountOnExit>
            <Playlists />
        </Collapse>
    );

    return (
        <>
            {collapse}
            {triggerItem}
        </>
    );
}

export default PlaylistsMenu;
