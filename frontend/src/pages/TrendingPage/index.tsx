import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import {RouteLink} from "../../components/common/LinkListItem";

export const TRENDING_PAGE_ROUTE = '/feed/trending';

export const TRENDING_MENU_ITEM: RouteLink = {
    title: 'Trending',
    to: TRENDING_PAGE_ROUTE,
    icon: WhatshotIcon
};

const Page = React.lazy(() => import('./TrendingPage'));

function TrendingPage() {
    return (
        <Layout>
            <Suspense fallback={<LinearProgress/>}>
                <Page/>
            </Suspense>
        </Layout>
    )
}

export default TrendingPage;
