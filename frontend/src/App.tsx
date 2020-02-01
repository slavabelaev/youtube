import React, {Suspense} from "react";
import { Switch, Route } from "react-router-dom"
import FallbackPage from "./components/pages/FallbackPage";
import ChannelPage from "./components/pages/ChannelPage";
import Layout from "./components/layouts/Layout";

const HomePage = React.lazy(() => import('./components/pages/HomePage'));
const NotFoundPage = React.lazy(() => import('./components/pages/NotFoundPage'));

const App: React.FC = () => {
  return (
    <Suspense fallback={<FallbackPage />}>
        <Layout>
            <Switch>
                <Route exact={true} path="/" component={HomePage} />
                <Route path="/" component={ChannelPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Layout>
    </Suspense>
  );
};

export default App;
