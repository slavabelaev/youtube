import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";

export const PAID_MEMBERSHIPS_PAGE_ROUTE = '/paid-memberships';



const Page = React.lazy(() => import('./PaidMembershipsPage'));

function PaidMembershipsPage() {
    return (
        <Layout>
            <Suspense fallback={<LinearProgress/>}>
                <Page/>
            </Suspense>
        </Layout>
    )
}

export default PaidMembershipsPage;
