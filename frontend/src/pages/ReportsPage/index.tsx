import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";

export const REPORTS_PAGE_ROUTE = '/reports';



const Page = React.lazy(() => import('./ReportsPage'));

function ReportsPage() {
    return (
        <Layout>
            <Suspense fallback={<LinearProgress/>}>
                <Page/>
            </Suspense>
        </Layout>
    )
}

export default ReportsPage;
