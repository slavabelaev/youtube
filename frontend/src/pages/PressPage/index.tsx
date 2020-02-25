import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";

export const PRESS_PAGE_ROUTE = '/new';



const Page = React.lazy(() => import('./PressPage'));

function PressPage() {
    return (
        <Layout>
            <Suspense fallback={<LinearProgress/>}>
                <Page/>
            </Suspense>
        </Layout>
    )
}

export default PressPage;
