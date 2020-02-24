import React from "react";
import HomeListItem from "../listItems/HomeListItem";
import {List} from "@material-ui/core";
import TrendingListItem from "../listItems/TrendingListItem";
import SubscriptionsListItem from "../listItems/SubscriptionsListItem";

function PrimaryMenu() {
    return (
        <List>
            <HomeListItem/>
            <TrendingListItem/>
            <SubscriptionsListItem/>
        </List>
    )
}

export default PrimaryMenu;
