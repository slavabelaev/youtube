import ListItem, {ListItemProps} from "@material-ui/core/ListItem";
import React from "react";
import {ListItemIcon, ListItemIconProps, ListItemSecondaryActionProps, ListItemTextProps} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";

export interface MenuListItemProps {
    title: ListItemTextProps['primary'];
    icon?: ListItemIconProps['children'];
    endIcon?: ListItemSecondaryActionProps['children'];
    selected?: ListItemProps['selected'];
    onClick?: () => void;
}

function MenuListItem(props: MenuListItemProps) {
    const listItemIcon = props.icon ? (
        <ListItemIcon>
            {props.icon}
        </ListItemIcon>
    ) : null;

    const listItemSecondaryAction = props.endIcon ? (
        <ListItemSecondaryAction>
            <IconButton
                size="small"
                onClick={props.onClick}
            >
                {props.endIcon}
            </IconButton>
        </ListItemSecondaryAction>
    ) : null;

    return (
        <ListItem
            dense
            button
            selected={props.selected}
            onClick={props.onClick}
        >
            {listItemIcon}
            <ListItemText
                primary={props.title}
            />
            {listItemSecondaryAction}
        </ListItem>
    )
}

export default MenuListItem;
