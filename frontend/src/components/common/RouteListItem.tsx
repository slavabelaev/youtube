import React from "react";
import {NavLink} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import {ListItemIcon} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";

export interface RouteListItemProps {
    title: string;
    to: string;
    icon: React.FC
}
const RouteListItem: React.FC<RouteListItemProps> = (props) => {
    const Icon = props.icon;
    return (
        <ListItem
            button
            dense
            component={NavLink}
            to={props.to}
            activeClassName="Mui-selected"
        >
            <ListItemIcon>
                <Icon />
            </ListItemIcon>
            <ListItemText
                primary={props.title}
            />
        </ListItem>
    )
};

export default RouteListItem;
