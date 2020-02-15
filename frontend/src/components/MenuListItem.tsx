import ListItem from "@material-ui/core/ListItem";
import React, {ReactElement, ReactNode} from "react";
import {ListItemIcon} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

export interface MenuListItemProps {
    title: string;
    icon?: ReactElement;
    secondaryAction?: ReactNode
    onClick?: () => void,
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
        <ListItem dense button onClick={props.onClick}>
            {listItemIcon}
            <ListItemText
                primary={props.title}
            />
            {listItemSecondaryAction}
        </ListItem>
    )
};

export default MenuListItem;
