import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import {RouteLink} from "../../../../components/common/LinkListItem";

export const CHANNEL_ABOUT_PAGE_ROUTE = '/about';

export const CHANNEL_ABOUT_MENU_ITEM: RouteLink = {
    title: 'About',
    to: CHANNEL_ABOUT_PAGE_ROUTE
};

const Page = React.lazy(() => import('./ChannelAboutPage'));

function ChannelAboutPage() {
	return (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
)
}

export default ChannelAboutPage;
