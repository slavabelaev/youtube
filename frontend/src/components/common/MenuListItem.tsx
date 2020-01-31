import ListItem, {ListItemProps} from "@material-ui/core/ListItem";
import React from "react";
import {ListItemIcon} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

interface MenuListItemProps extends ListItemProps {
    title: string;
    icon: React.FC;
    onClick?: () => void
}

const MenuListItem: React.FC<MenuListItemProps> = ({ title, icon, onClick }) => {
    const Icon = icon;
    return (
        <ListItem dense button onClick={onClick}>
            <ListItemIcon>
                <Icon />
            </ListItemIcon>
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
