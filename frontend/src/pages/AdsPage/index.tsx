import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import {RouteLink} from "../../components/common/LinkListItem";

export const ADS_PAGE_ROUTE = '/ads';

export const ADS_MENU_ITEM: RouteLink = {
    title: 'Рекламодателям',
    to: ADS_PAGE_ROUTE
};

const Page = React.lazy(() => import('./AdsPage'));

function AdsPage() {
    return (
        <Layout>
            <Suspense fallback={<LinearProgress/>}>
                <Page/>
            </Suspense>
        </Layout>
    )
}

export default AdsPage;
