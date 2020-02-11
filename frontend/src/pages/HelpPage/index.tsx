import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import RouteItem from "../../interfaces/RouteItem";
import HelpIcon from "@material-ui/icons/Help";

export const HELP_PAGE_ROUTE = '/help';

export const HELP_ROUTE: RouteItem = {
    title: 'Справка',
    to: HELP_PAGE_ROUTE,
    icon: HelpIcon
};

const Page = React.lazy(() => import('./HelpPage'));

const HelpPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default HelpPage;
