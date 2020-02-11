import React from "react";
import Menu from "../Menu";
import {HOME_MENU_ITEM} from "../../pages/HomePage";
import {TRENDING_MENU_ITEM} from "../../pages/TrendingPage";
import {SUBSCRIPTIONS_MENU_ITEM} from "../../pages/SubscriptionsPage";

const PrimaryMenu: React.FC = () => (
    <Menu items={[
        HOME_MENU_ITEM,
        TRENDING_MENU_ITEM,
        SUBSCRIPTIONS_MENU_ITEM
    ]} />
);

export default PrimaryMenu;
