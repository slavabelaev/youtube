import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import MenuItem from "../../interfaces/MenuItem";

export const POLICIES_PAGE_ROUTE = '/policies';

export const RULES_MENU_ITEM: MenuItem = {
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
