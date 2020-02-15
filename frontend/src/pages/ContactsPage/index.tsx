import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import {RouteLink} from "../../components/LinkListItem";

export const CONTACTS_PAGE_ROUTE = '/contacts';

export const CONTACTS_MENU_ITEM: RouteLink = {
    title: 'Связаться с нами',
    to: CONTACTS_PAGE_ROUTE
};

const Page = React.lazy(() => import('./ContactsPage'));

const ContactsPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default ContactsPage;
