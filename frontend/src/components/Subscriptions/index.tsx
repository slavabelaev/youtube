import React, {Suspense} from "react";
import {CircularProgress} from "@material-ui/core";
import {SubscriptionProps} from "./Subscriptions";

const Subscriptions = React.lazy(() => import('./Subscriptions'));

const generateSubscriptions = (): SubscriptionProps[] => Array(12).fill(null).map((item, index: number) => ({
    id: `${index}`,
    title: `Название канала ${index}`,
    linkTo: `/channel/${index}`,
    imageUrl: 'invalid_url'
}));

export default () => (
    <Suspense fallback={<CircularProgress />}>
        <Subscriptions items={generateSubscriptions()} />
    </Suspense>
);
