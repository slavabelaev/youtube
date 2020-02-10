import React from "react";
import {List} from "@material-ui/core";
import RouteListItem from "../RouteListItem";
import {HOME_ROUTE, LIBRARY_ROUTE, SUBSCRIPTIONS_ROUTE, TRENDING_ROUTE} from "../../constants/routes";

const MainMenu: React.FC = () => {
    return (
        <List>
            <RouteListItem {...HOME_ROUTE} />
            <RouteListItem {...TRENDING_ROUTE} />
            <RouteListItem {...SUBSCRIPTIONS_ROUTE} />
            <RouteListItem {...LIBRARY_ROUTE} />
        </List>
    );
};

export default MainMenu;
