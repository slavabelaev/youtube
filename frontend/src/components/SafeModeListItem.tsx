import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Switch from "@material-ui/core/Switch";
import {ListItemIcon} from "@material-ui/core";
import SecurityIcon from "@material-ui/icons/Security";

const SafeModeListItem: React.FC = () => {
    const [checked, setChecked] = React.useState(false);
    const toggle = () => setChecked(!checked);
    return (
        <ListItem dense button onClick={toggle}>
            <ListItemIcon>
                <SecurityIcon />
            </ListItemIcon>
            <ListItemText
                primary="Безопасный режим"
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

export default SafeModeListItem;
