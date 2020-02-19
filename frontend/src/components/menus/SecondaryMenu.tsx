import React from "react";
import {LIBRARY_MENU_ITEM} from "../pages/LibraryPage";
import {HISTORY_MENU_ITEM} from "../pages/HistoryPage";
import {FAVORITES_MENU_ITEM, WATCH_LATER_MENU_ITEM} from "../pages/PlaylistPage";
import {PURCHASES_MENU_ITEM} from "../pages/PurchasesPage";
import LinksMenu from "../common/LinksMenu";

const SecondaryMenu: React.FC = () => (
    <LinksMenu items={[
        LIBRARY_MENU_ITEM,
        HISTORY_MENU_ITEM,
        WATCH_LATER_MENU_ITEM,
        PURCHASES_MENU_ITEM,
        FAVORITES_MENU_ITEM
    ]} />
);

export default SecondaryMenu;
