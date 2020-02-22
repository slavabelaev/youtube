import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import {People} from "@material-ui/icons";
import {RouteLink} from "../../../../components/common/LinkListItem";

export const SETTINGS_SHARING_PAGE_ROUTE = '/sharing';

export const SETTINGS_SHARING_MENU_ITEM: RouteLink = {
    title: 'Связанные аккаунты',
    to: SETTINGS_SHARING_PAGE_ROUTE,
    icon: People
};

const Page = React.lazy(() => import('./SettingsSharingPage'));

function SettingsSharingPage() {
    return (
        <Suspense fallback={<LinearProgress/>}>
            <Page/>
        </Suspense>
    )
}

export default SettingsSharingPage;
