import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";

export const PRIVACY_PAGE_ROUTE = '/privacy';

const Page = React.lazy(() => import('./PrivacyPage'));

function PrivacyPage() {
    return (
        <Layout>
            <Suspense fallback={<LinearProgress/>}>
                <Page/>
            </Suspense>
        </Layout>
    )
}

export default PrivacyPage;
