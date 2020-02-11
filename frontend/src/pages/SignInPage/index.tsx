import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import RouteItem from "../../interfaces/RouteItem";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export const SIGN_IN_PAGE_ROUTE = '/sign-in';
export const SIGN_OUT_PAGE_ROUTE = '/sign-out';

export const SIGN_OUT_ROUTE: RouteItem = {
    title: 'Выйти',
    to: SIGN_OUT_PAGE_ROUTE,
    icon: ExitToAppIcon
};

const Page = React.lazy(() => import('./SignInPage'));

const SignInPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default SignInPage;
