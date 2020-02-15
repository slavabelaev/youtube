import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import {RouteLink} from "../../components/LinkListItem";

export const GAMING_PAGE_ROUTE = '/gaming';

export const GAMING_MENU_ITEM: RouteLink = {
    title: 'Видеоигры',
    to: GAMING_PAGE_ROUTE,
    icon: VideogameAssetIcon
};

const Page = React.lazy(() => import('./GamingPage'));

const GamingPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default GamingPage;
