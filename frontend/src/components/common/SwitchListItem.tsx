import React from "react";
import ListItem from "@material-ui/core/ListItem";
import {ListItemIcon, ListItemIconProps, ListItemTextProps, SwitchProps} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Switch from "@material-ui/core/Switch";

interface SwitchListItemBaseProps {
    title: ListItemTextProps['primary'];
    icon?: ListItemIconProps['children'];
}

export type SwitchListItemProps = SwitchListItemBaseProps & SwitchProps;

function SwitchListItem({
    title,
    icon,
    ...SwitchProps
}: SwitchListItemProps) {
    const listItemIcon = icon ? (
        <ListItemIcon>
            {icon}
        </ListItemIcon>
    ) : null;

    return (
        <ListItem
            dense
            button
            component="label"
            htmlFor="dark-mode-switch"
        >
            {listItemIcon}
            <ListItemText
                primary={title}
            />
            <ListItemSecondaryAction>
                <Switch
                    id="dark-mode-switch"
                    {...SwitchProps}
                />
            </ListItemSecondaryAction>
        </ListItem>
    )
};

export default SwitchListItem;
