import React from "react";
import {HOME_MENU_ITEM} from "../pages/HomePage";
import {TRENDING_MENU_ITEM} from "../pages/TrendingPage";
import {SUBSCRIPTIONS_MENU_ITEM} from "../pages/SubscriptionsPage";
import {LIBRARY_MENU_ITEM} from "../pages/LibraryPage";
import LinksMenu from "../common/LinksMenu";

const MainMenu: React.FC = () => (
    <LinksMenu items={[
        HOME_MENU_ITEM,
        TRENDING_MENU_ITEM,
        SUBSCRIPTIONS_MENU_ITEM,
        LIBRARY_MENU_ITEM
    ]} />
);

export default MainMenu;
