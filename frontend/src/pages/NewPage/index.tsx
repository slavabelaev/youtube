import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";

export const NEW_PAGE_ROUTE = '/new';



const Page = React.lazy(() => import('./NewPage'));

function NewPage() {
    return (
        <Layout>
            <Suspense fallback={<LinearProgress/>}>
                <Page/>
            </Suspense>
        </Layout>
    )
}

export default NewPage;
