import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import RouteItem from "../../interfaces/RouteItem";

export const POLICIES_PAGE_ROUTE = '/policies';

export const RULES_ROUTE: RouteItem = {
    title: 'Правила и безопасность',
    to: `${POLICIES_PAGE_ROUTE}/rules-and-safety`
};

const Page = React.lazy(() => import('./PoliciesPage'));

const PoliciesPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default PoliciesPage;
