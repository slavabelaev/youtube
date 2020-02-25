import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";

export const PERSONAL_DATA_PAGE_ROUTE = '/personal-data';



const Page = React.lazy(() => import('./PersonalDataPage'));

function PersonalDataPage() {
	return (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
)
}

export default PersonalDataPage;
