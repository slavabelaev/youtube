import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import MenuItem from "../../interfaces/MenuItem";
import WifiTetheringIcon from "@material-ui/icons/WifiTethering";

export const STREAMING_PAGE_ROUTE = '/streaming';

export const STREAMING_MENU_ITEM: MenuItem = {
    title: 'Трансляции',
    to: STREAMING_PAGE_ROUTE,
    icon: WifiTetheringIcon
};

const Page = React.lazy(() => import('./StreamingPage'));

const StreamingPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default StreamingPage;
