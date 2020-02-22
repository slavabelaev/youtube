import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import {RouteLink} from "../../components/common/LinkListItem";

export const COPYRIGHT_PAGE_ROUTE = '/copyright';

export const COPYRIGHT_MENU_ITEM: RouteLink = {
    title: 'Правообладателям',
    to: COPYRIGHT_PAGE_ROUTE
};

const Page = React.lazy(() => import('./CopyrightPage'));

function CopyrightPage() {
    return (
        <Layout>
            <Suspense fallback={<LinearProgress/>}>
                <Page/>
            </Suspense>
        </Layout>
    )
}

export default CopyrightPage;
