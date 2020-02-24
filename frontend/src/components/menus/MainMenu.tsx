import React from "react";
import List from "@material-ui/core/List";
import HomeListItem from "../listItems/HomeListItem";
import TrendingListItem from "../listItems/TrendingListItem";
import SubscriptionsListItem from "../listItems/SubscriptionsListItem";
import LibraryListItem from "../listItems/LibraryListItem";

function MainMenu() {
    return (
        <List>
            <HomeListItem/>
            <TrendingListItem/>
            <SubscriptionsListItem/>
            <LibraryListItem/>
        </List>
    );
}

export default MainMenu;
