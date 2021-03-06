import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";


export const SIGN_OUT_PAGE_ROUTE = '/sign-out';



const Page = React.lazy(() => import('./SignInPage'));

function SignInPage() {
	return (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
)
}

export default SignInPage;
