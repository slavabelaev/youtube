import React, {Suspense} from "react";
import { Switch, Route } from "react-router-dom"
import FallbackPage from "./components/pages/FallbackPage";
import ChannelPage from "./components/pages/ChannelPage";

const HomePage = React.lazy(() => import('./components/pages/HomePage'));
const NotFoundPage = React.lazy(() => import('./components/pages/NotFoundPage'));

const App: React.FC = () => {
  return (
    <Suspense fallback={<FallbackPage />}>
        <Switch>
            <Route exact={true} path="/" component={HomePage} />
            <Route path="/" component={ChannelPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </Suspense>
  );
}

export default App;
