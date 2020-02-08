import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";

export const CHANNEL_ABOUT_PAGE_ROUTE = '/about';

const Page = React.lazy(() => import('./ChannelAboutPage'));

const ChannelAboutPage: React.FC = () => (
    <Suspense fallback={<LinearProgress />}>
        <Page />
    </Suspense>
);

export default ChannelAboutPage;
