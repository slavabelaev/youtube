import React from "react";
import {HOME_ROUTE} from "../../pages/HomePage";
import {TRENDING_ROUTE} from "../../pages/TrendingPage";
import {SUBSCRIPTIONS_ROUTE} from "../../pages/SubscriptionsPage";
import {LIBRARY_ROUTE} from "../../pages/LibraryPage";
import Menu from "../Menu";

const MainMenu: React.FC = () => (
    <Menu items={[
        HOME_ROUTE,
        TRENDING_ROUTE,
        SUBSCRIPTIONS_ROUTE,
        LIBRARY_ROUTE
    ]} />
);

export default MainMenu;
