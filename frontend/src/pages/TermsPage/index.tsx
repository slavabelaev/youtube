import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";

export const TERMS_PAGE_ROUTE = '/terms';



const Page = React.lazy(() => import('./TermsPage'));

function TermsPage() {
    return (
        <Layout>
            <Suspense fallback={<LinearProgress/>}>
                <Page/>
            </Suspense>
        </Layout>
    )
}

export default TermsPage;
