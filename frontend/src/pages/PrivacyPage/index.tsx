import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import {RouteLink} from "../../components/common/LinkListItem";

export const PRIVACY_PAGE_ROUTE = '/privacy';

export const PRIVACY_MENU_ITEM: RouteLink = {
    title: 'Конфиденциальность', 
    to: PRIVACY_PAGE_ROUTE
};

const Page = React.lazy(() => import('./PrivacyPage'));

const PrivacyPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default PrivacyPage;