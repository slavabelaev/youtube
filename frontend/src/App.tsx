import React, {Suspense} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import FallbackPage from "./pages/FallbackPage";
import ChannelPage from "./pages/ChannelPage";

const HomePage = React.lazy(() => import('./pages/HomePage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

const App: React.FC = () => {
  return (
    <Suspense fallback={<FallbackPage />}>
        <Router>
            <Switch>
                <Route exact={true} path="/" component={HomePage} />
                <Route path="/" component={ChannelPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    </Suspense>
  );
}

export default App;
