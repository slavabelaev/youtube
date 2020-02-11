import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import RouteItem from "../../interfaces/RouteItem";

export const PRIVACY_PAGE_ROUTE = '/privacy';

export const PRIVACY_ROUTE: RouteItem = { 
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
