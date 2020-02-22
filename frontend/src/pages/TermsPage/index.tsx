import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import {RouteLink} from "../../components/common/LinkListItem";

export const TERMS_PAGE_ROUTE = '/terms';

export const TERMS_MENU_ITEM: RouteLink = {
    title: 'Terms',
    to: TERMS_PAGE_ROUTE
};

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
