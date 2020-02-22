import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import {RouteLink} from "../../components/common/LinkListItem";

export const NEW_PAGE_ROUTE = '/new';

export const NEW_MENU_ITEM: RouteLink = {
    title: 'Новые функции',
    to: NEW_PAGE_ROUTE
};

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
