import React from "react";
import ListItem from "@material-ui/core/ListItem";
import {ListItemIcon, ListItemIconProps, ListItemTextProps} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Switch from "@material-ui/core/Switch";

export interface SwitchListItemProps {
    title: ListItemTextProps['primary'];
    icon?: ListItemIconProps['children'];
}

const SwitchListItem: React.FC<SwitchListItemProps> = ({
    title,
    icon
}) => {
    const [checked, setChecked] = React.useState(false);
    const toggle = () => setChecked(!checked);

    const listItemIcon = icon ? (
        <ListItemIcon>
            {icon}
        </ListItemIcon>
    ) : null;

    return (
        <ListItem dense button onClick={toggle}>
            {listItemIcon}
            <ListItemText
                primary={title}
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

export default SwitchListItem;
