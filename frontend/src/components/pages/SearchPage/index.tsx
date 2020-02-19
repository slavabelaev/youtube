import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";

export const SEARCH_PAGE_ROUTE = '/search';

const Page = React.lazy(() => import('./SearchPage'));

const SearchPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default SearchPage;
