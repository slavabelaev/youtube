import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage, {HOME_PAGE_ROUTE} from "./pages/HomePage";
import WatchPage, {WATCH_PAGE_ROUTE} from "./pages/WatchPage";
import ChannelPage, {CHANNEL_PAGE_ROUTE} from "./pages/ChannelPage";
import NotFoundPage from "./pages/NotFoundPage";
import TrendingPage, {TRENDING_PAGE_ROUTE} from "./pages/TrendingPage";
import SubscriptionsPage, {SUBSCRIPTIONS_PAGE_ROUTE} from "./pages/SubscriptionsPage";

const App: React.FC = () => (
    <Switch>
        <Route exact={true} path={HOME_PAGE_ROUTE} component={HomePage} />
        <Route path={WATCH_PAGE_ROUTE} component={WatchPage} />
        <Route path={CHANNEL_PAGE_ROUTE} component={ChannelPage} />
        <Route path={TRENDING_PAGE_ROUTE} component={TrendingPage} />
        <Route path={SUBSCRIPTIONS_PAGE_ROUTE} component={SubscriptionsPage} />
        <Route component={NotFoundPage} />
    </Switch>
);

export default App;
