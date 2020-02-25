import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";

export const HELP_PAGE_ROUTE = '/help';



const Page = React.lazy(() => import('./HelpPage'));

function HelpPage() {
    return (
        <Layout>
            <Suspense fallback={<LinearProgress/>}>
                <Page/>
            </Suspense>
        </Layout>
    )
}

export default HelpPage;
