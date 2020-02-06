import React from "react";
import {List} from "@material-ui/core";
import RouteListItem from "../common/RouteListItem";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const items = Array(10).fill(null);
const PlaylistsMenu: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const toggle = () => setOpen(!open);

    const renderItem = (_: null, index: number) => (
        <RouteListItem
            key={index}
            title={`Плэйлист ${index}`}
            to={`/playlist/${index}`}
            icon={PlaylistPlayIcon}
        />
    );

    const triggerListItem = (
        <ListItem button dense onClick={toggle}>
            <ListItemIcon>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
            <ListItemText primary={open ? 'Скрыть' : 'Развернуть'} />
        </ListItem>
    );

    const collapse = (
        <Collapse in={open} timeout="auto" unmountOnExit>
            {items.map(renderItem)}
        </Collapse>
    );

    return (
        <List>
            {collapse}
            {triggerListItem}
        </List>
    );
};

export default PlaylistsMenu;
