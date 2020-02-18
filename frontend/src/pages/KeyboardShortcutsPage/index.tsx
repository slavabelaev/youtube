import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import {RouteLink} from "../../components/common/LinkListItem";

export const KEYBOARD_SHORTCUTS_PAGE_ROUTE = '/keyboard-shortcuts';

export const KEYBOARD_SHORTCUTS_MENU_ITEM: RouteLink = {
    title: 'Быстрые клавишы',
    to: KEYBOARD_SHORTCUTS_PAGE_ROUTE,
    icon: KeyboardIcon
};

const Page = React.lazy(() => import('./KeyboardShortcutsPage'));

const KeyboardShortcutsPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default KeyboardShortcutsPage;