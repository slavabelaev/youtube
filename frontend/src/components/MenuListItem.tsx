import ListItem from "@material-ui/core/ListItem";
import React from "react";
import {ListItemIcon} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export interface MenuItem {
    title: string;
    to: string;
    exact?: boolean;
    icon?: React.FC;
}

export interface MenuListItemProps {
    title: string;
    icon?: React.FC;
    onClick?: () => void
}

const MenuListItem: React.FC<MenuListItemProps> = ({
    title,
    icon,
    onClick
}) => {
    const renderIcon = () => {
        if (!icon) return;
        const Icon = icon;
        return (
            <ListItemIcon>
                <Icon />
            </ListItemIcon>
        )
    };

    return (
        <ListItem dense button onClick={onClick}>
            {renderIcon()}
            <ListItemText
                primary={title}
            />
            <ListItemSecondaryAction>
                <ChevronRightIcon />
            </ListItemSecondaryAction>
        </ListItem>
    )
};

export default MenuListItem;
