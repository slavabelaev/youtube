import React from "react";
import {LIBRARY_ROUTE} from "../../pages/LibraryPage";
import {HISTORY_ROUTE} from "../../pages/HistoryPage";
import {FAVORITES_ROUTE, WATCH_LATER_ROUTE} from "../../pages/PlaylistPage";
import {PURCHASES_ROUTE} from "../../pages/PurchasesPage";
import Menu from "../Menu";

const SecondaryMenu: React.FC = () => (
    <Menu items={[
        LIBRARY_ROUTE,
        HISTORY_ROUTE,
        WATCH_LATER_ROUTE,
        PURCHASES_ROUTE,
        FAVORITES_ROUTE
    ]} />
);

export default SecondaryMenu;
