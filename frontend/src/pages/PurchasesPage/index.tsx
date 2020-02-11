import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import MenuItem from "../../interfaces/MenuItem";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

export const PURCHASES_PAGE_ROUTE = '/feed/purchases';

export const PURCHASES_MENU_ITEM: MenuItem = {
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
