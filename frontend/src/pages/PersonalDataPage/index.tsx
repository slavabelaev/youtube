import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import SecurityIcon from "@material-ui/icons/Security";
import {RouteLink} from "../../components/common/LinkListItem";

export const PERSONAL_DATA_PAGE_ROUTE = '/personal-data';

export const PERSONAL_DATA_MENU_ITEM: RouteLink = {
    title: 'Личные данные на YouTube',
    to: PERSONAL_DATA_PAGE_ROUTE,
    icon: SecurityIcon
};

const Page = React.lazy(() => import('./PersonalDataPage'));

const PersonalDataPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default PersonalDataPage;
