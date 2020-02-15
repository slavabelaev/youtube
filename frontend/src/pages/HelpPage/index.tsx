import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import HelpIcon from "@material-ui/icons/Help";
import {RouteLink} from "../../components/LinkListItem";

export const HELP_PAGE_ROUTE = '/help';

export const HELP_MENU_ITEM: RouteLink = {
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
