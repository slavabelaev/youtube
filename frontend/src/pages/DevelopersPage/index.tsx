import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";

export const DEV_PAGE_ROUTE = '/dev';



const Page = React.lazy(() => import('./DevelopersPage'));

function DevelopersPage() {
    return (
        <Layout>
            <Suspense fallback={<LinearProgress/>}>
                <Page/>
            </Suspense>
        </Layout>
    )
}

export default DevelopersPage;
