import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import HelpIcon from "@material-ui/icons/Help";
import {RouteLink} from "../../components/common/LinkListItem";

export const HELP_PAGE_ROUTE = '/help';

export const HELP_MENU_ITEM: RouteLink = {
    title: 'Help',
    to: HELP_PAGE_ROUTE,
    icon: HelpIcon
};

const Page = React.lazy(() => import('./HelpPage'));

function HelpPage() {
    return (
        <Layout>
            <Suspense fallback={<LinearProgress/>}>
                <Page/>
            </Suspense>
        </Layout>
    )
}

export default HelpPage;
