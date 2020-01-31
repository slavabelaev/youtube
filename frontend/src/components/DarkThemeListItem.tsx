import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Switch from "@material-ui/core/Switch";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import {ListItemIcon} from "@material-ui/core";

const DarkThemeListItem: React.FC = () => {
    const [checked, setChecked] = React.useState(false);
    const toggle = () => setChecked(!checked);
    return (
        <ListItem dense button onClick={toggle}>
            <ListItemIcon>
                <Brightness4Icon />
            </ListItemIcon>
            <ListItemText
                primary="Темная тема"
            />
            <ListItemSecondaryAction>
                <Switch
                    checked={checked}
                    onChange={toggle}
                />
            </ListItemSecondaryAction>
        </ListItem>
    )
};

export default DarkThemeListItem;
