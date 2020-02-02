import React, {Suspense} from "react";
import { Switch, Route } from "react-router-dom";
import {withLayout} from "./components/layouts/Layout";
import {CircularProgress} from "@material-ui/core";

const HomePage = withLayout(
    React.lazy(() => import('./components/pages/HomePage'))
);
const WatchPage = withLayout(
    React.lazy(() => import('./components/pages/WatchPage')),
    { drawerVariantUpSm: 'temporary' }
);
const ChannelPage = withLayout(
    React.lazy(() => import('./components/pages/ChannelPage')),
);
const NotFoundPage = withLayout(
    React.lazy(() => import('./components/pages/NotFoundPage'))
);

const App: React.FC = () => (
    <Suspense fallback={<CircularProgress />}>
        <Switch>
            <Route exact={true} path="/" component={HomePage} />
            <Route path="/watch" component={WatchPage} />
            <Route path="/channel" component={ChannelPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </Suspense>
);

export default App;
