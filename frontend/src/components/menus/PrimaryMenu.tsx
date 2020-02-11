import React from "react";
import Menu from "../Menu";
import {HOME_ROUTE} from "../../pages/HomePage";
import {TRENDING_ROUTE} from "../../pages/TrendingPage";
import {SUBSCRIPTIONS_ROUTE} from "../../pages/SubscriptionsPage";

const PrimaryMenu: React.FC = () => (
    <Menu items={[
        HOME_ROUTE,
        TRENDING_ROUTE,
        SUBSCRIPTIONS_ROUTE
    ]} />
);

export default PrimaryMenu;
