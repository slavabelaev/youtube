import ListItem, {ListItemProps} from "@material-ui/core/ListItem";
import React from "react";
import {ListItemIcon, ListItemIconProps, ListItemSecondaryActionProps, ListItemTextProps} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

export interface MenuListItemProps {
    title: ListItemTextProps['primary'];
    icon?: ListItemIconProps['children'];
    secondaryAction?: ListItemSecondaryActionProps['children'];
    selected?: ListItemProps['selected'];
    onClick?: () => void;
}

const MenuListItem: React.FC<MenuListItemProps> = (props) => {
    const listItemIcon = props.icon ? (
        <ListItemIcon>
            {props.icon}
        </ListItemIcon>
    ) : null;

    const listItemSecondaryAction = props.secondaryAction ? (
        <ListItemSecondaryAction>
            {props.secondaryAction}
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
};

export default MenuListItem;
