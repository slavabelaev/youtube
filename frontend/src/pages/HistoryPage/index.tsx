import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";

export const HISTORY_PAGE_ROUTE = '/feed/history';



const Page = React.lazy(() => import('./HistoryPage'));

function HistoryPage() {
    return (
        <Layout>
            <Suspense fallback={<LinearProgress/>}>
                <Page/>
            </Suspense>
        </Layout>
    )
}

export default HistoryPage;
