import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import {LayoutDrawerProvider} from "./components/layouts/Layout/LayoutDrawer/LayoutDrawerContext";
import HomePage, {HOME_PAGE_ROUTE} from "./components/pages/HomePage";
import WatchPage, {WATCH_PAGE_ROUTE} from "./components/pages/WatchPage";
import ChannelPage, {CHANNEL_PAGE_ROUTE} from "./components/pages/ChannelPage";
import NotFoundPage from "./components/pages/NotFoundPage";

const App: React.FC = () => (
    <LayoutDrawerProvider>
        <Layout>
            <Switch>
                <Route exact={true} path={HOME_PAGE_ROUTE} component={HomePage} />
                <Route path={WATCH_PAGE_ROUTE} component={WatchPage} />
                <Route path={CHANNEL_PAGE_ROUTE} component={ChannelPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Layout>
    </LayoutDrawerProvider>
);

export default App;
