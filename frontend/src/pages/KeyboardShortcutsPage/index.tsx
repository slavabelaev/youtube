import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import MenuItem from "../../interfaces/MenuItem";
import KeyboardIcon from "@material-ui/icons/Keyboard";

export const KEYBOARD_SHORTCUTS_PAGE_ROUTE = '#keyoard-shortcuts';

export const KEYBOARD_SHORTCUTS_MENU_ITEM: MenuItem = {
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
