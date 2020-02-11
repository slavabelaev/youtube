import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import MenuItem from "../../interfaces/MenuItem";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

export const STUDIO_PAGE_ROUTE = '/studio';

export const STUDIO_MENU_ITEM: MenuItem = {
    title: 'Творческая студия YouTube',
    to: STUDIO_PAGE_ROUTE,
    icon: PlayCircleFilledIcon
};

const Page = React.lazy(() => import('./StudioPage'));

const StudioPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default StudioPage;
