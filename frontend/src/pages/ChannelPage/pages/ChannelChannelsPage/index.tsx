import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import MenuItem from "../../../../interfaces/MenuItem";

export const CHANNEL_CHANNELS_PAGE_ROUTE = '/channels';

export const CHANNEL_CHANNELS_MENU_ITEM: MenuItem = {
    title: 'Каналы',
    to: CHANNEL_CHANNELS_PAGE_ROUTE
};

const Page = React.lazy(() => import('./ChannelChannelsPage'));

const ChannelChannelsPage: React.FC = () => (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
);

export default ChannelChannelsPage;
