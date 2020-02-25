import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";

export const STUDIO_PAGE_ROUTE = '/studio';



const Page = React.lazy(() => import('./StudioPage'));

function StudioPage() {
    return (
        <Layout>
            <Suspense fallback={<LinearProgress/>}>
                <Page/>
            </Suspense>
        </Layout>
    )
}

export default StudioPage;
