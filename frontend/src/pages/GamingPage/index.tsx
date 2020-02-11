import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import MenuItem from "../../interfaces/MenuItem";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";

export const GAMING_PAGE_ROUTE = '/gaming';

export const GAMING_MENU_ITEM: MenuItem = {
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
