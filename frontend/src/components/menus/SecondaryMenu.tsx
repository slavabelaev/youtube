import React from "react";
import {List} from "@material-ui/core";
import RouteListItem from "../RouteListItem";
import {
    FAVORITES_ROUTE,
    HISTORY_ROUTE,
    LIBRARY_ROUTE,
    PURCHASES_ROUTE,
    WATCH_LATER_ROUTE
} from "../../constants/routes";

const SecondaryMenu: React.FC = () => {
    return (
        <List>
            <RouteListItem {...LIBRARY_ROUTE} />
            <RouteListItem {...HISTORY_ROUTE} />
            <RouteListItem {...WATCH_LATER_ROUTE} />
            <RouteListItem {...PURCHASES_ROUTE} />
            <RouteListItem {...FAVORITES_ROUTE} />
        </List>
    );
};

export default SecondaryMenu;
