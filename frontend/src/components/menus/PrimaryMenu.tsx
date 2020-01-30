import React from "react";
import {List} from "@material-ui/core";
import RouteListItem from "../common/RouteListItem";
import {HOME_ROUTE, SUBSCRIPTIONS_ROUTE, TRENDING_ROUTE} from "../../constants/routes";

const PrimaryMenu: React.FC = () => {
    return (
        <List>
            <RouteListItem {...HOME_ROUTE} />
            <RouteListItem {...TRENDING_ROUTE} />
            <RouteListItem {...SUBSCRIPTIONS_ROUTE} />
        </List>
    );
};

export default PrimaryMenu;
