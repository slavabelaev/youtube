import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import {RouteLink} from "../../components/common/LinkListItem";

export const PURCHASES_PAGE_ROUTE = '/feed/purchases';

export const PURCHASES_MENU_ITEM: RouteLink = {
    title: 'Покупки',
    to: PURCHASES_PAGE_ROUTE,
    icon: LocalOfferIcon
};

const Page = React.lazy(() => import('./PurchasesPage'));

const PurchasesPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default PurchasesPage;