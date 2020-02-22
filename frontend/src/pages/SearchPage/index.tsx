import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";

export const SEARCH_PAGE_ROUTE = '/search';

const Page = React.lazy(() => import('./SearchPage'));

function SearchPage() {
	return (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
)
}

export default SearchPage;
