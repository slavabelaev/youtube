import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage, {HOME_PAGE_ROUTE} from "./components/pages/HomePage";
import WatchPage, {WATCH_PAGE_ROUTE} from "./components/pages/WatchPage";
import ChannelPage, {CHANNEL_PAGE_ROUTE} from "./components/pages/ChannelPage";
import NotFoundPage from "./components/pages/NotFoundPage";

const App: React.FC = () => (
    <Switch>
        <Route exact={true} path={HOME_PAGE_ROUTE} component={HomePage} />
        <Route path={WATCH_PAGE_ROUTE} component={WatchPage} />
        <Route path={CHANNEL_PAGE_ROUTE} component={ChannelPage} />
        <Route component={NotFoundPage} />
    </Switch>
);

export default App;
