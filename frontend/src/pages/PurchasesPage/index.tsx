import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";

export const PURCHASES_PAGE_ROUTE = '/feed/purchases';



const Page = React.lazy(() => import('./PurchasesPage'));

function PurchasesPage() {
	return (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
)
}

export default PurchasesPage;
