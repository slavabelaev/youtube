import React from "react";
import LibraryListItem from "../listItems/LibraryListItem";
import List from "@material-ui/core/List";
import HistoryListItem from "../listItems/HistoryListItem";
import WatchLaterListItem from "../listItems/WatchLaterListItem";
import PurchasesListItem from "../listItems/PurchasesListItem";
import FavoritesListItem from "../listItems/FavoritesListItem";

function SecondaryMenu() {
    return (
        <List>
            <LibraryListItem/>
            <HistoryListItem/>
            <WatchLaterListItem/>
            <PurchasesListItem/>
            <FavoritesListItem/>
        </List>
    )
}

export default SecondaryMenu;
