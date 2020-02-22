import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import {RouteLink} from "../../components/common/LinkListItem";

export const PRESS_PAGE_ROUTE = '/new';

export const PRESS_MENU_ITEM: RouteLink = {
    title: 'Press',
    to: PRESS_PAGE_ROUTE
};

const Page = React.lazy(() => import('./PressPage'));

function PressPage() {
    return (
        <Layout>
            <Suspense fallback={<LinearProgress/>}>
                <Page/>
            </Suspense>
        </Layout>
    )
}

export default PressPage;
