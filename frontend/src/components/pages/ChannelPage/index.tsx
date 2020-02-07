import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";

export const CHANNEL_PAGE_ROUTE = '/channel/:id';

const ChannelPage = React.lazy(() => import('./ChannelPage'));

export default () => (
    <Suspense fallback={<LinearProgress />}>
        <ChannelPage />
    </Suspense>
);
