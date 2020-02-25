import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";

export const REVIEWS_PAGE_ROUTE = '/reviews';



const Page = React.lazy(() => import('./ReviewsPage'));

function ReviewsPage() {
    return (
        <Layout>
            <Suspense fallback={<LinearProgress/>}>
                <Page/>
            </Suspense>
        </Layout>
    )
}

export default ReviewsPage;
