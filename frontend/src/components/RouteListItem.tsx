import React from "react";
import {NavLink} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import {ListItemIcon} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import RouteItem from "../interfaces/RouteItem";

export interface RouteListItemProps extends RouteItem {}

const RouteListItem: React.FC<RouteListItemProps> = ({ icon, to, exact = false, title }) => {
    const renderIcon = () => {
        if (!icon) return;
        const Icon = icon;
        return (
            <ListItemIcon>
                <Icon />
            </ListItemIcon>
        );
    };

    return (
        <ListItem
            button
            dense
            component={NavLink}
            to={to}
            exact={exact}
            activeClassName="Mui-selected"
        >
            {renderIcon()}
            <ListItemText
                primary={title}
            />
        </ListItem>
    )
};

export default RouteListItem;
