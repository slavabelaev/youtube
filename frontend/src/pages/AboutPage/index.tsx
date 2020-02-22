import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import {RouteLink} from "../../components/common/LinkListItem";

export const ABOUT_PAGE_ROUTE = '/about';

export const ABOUT_MENU_ITEM: RouteLink = {
    title: 'About',
    to: ABOUT_PAGE_ROUTE
};

const Page = React.lazy(() => import('./AboutPage'));

function AboutPage() {
    return (
        <Layout>
            <Suspense fallback={<LinearProgress/>}>
                <Page/>
            </Suspense>
        </Layout>
    )
}

export default AboutPage;
