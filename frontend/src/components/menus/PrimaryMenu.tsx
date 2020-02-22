import React from "react";
import LinksMenu from "../common/LinksMenu";
import {HOME_MENU_ITEM} from "../../pages/HomePage";
import {TRENDING_MENU_ITEM} from "../../pages/TrendingPage";
import {SUBSCRIPTIONS_MENU_ITEM} from "../../pages/SubscriptionsPage";

function PrimaryMenu() {
    return (
        <LinksMenu items={[
            HOME_MENU_ITEM,
            TRENDING_MENU_ITEM,
            SUBSCRIPTIONS_MENU_ITEM
        ]}/>
    )
}

export default PrimaryMenu;
