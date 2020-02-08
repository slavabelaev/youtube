import React, {Suspense} from "react";
import {SubscriptionProps} from "./Subscriptions";
import SuspenseFallback from "../SuspenseFallback";

const Subscriptions = React.lazy(() => import('./Subscriptions'));

const generateSubscriptions = (): SubscriptionProps[] => Array(12).fill(null).map((item, index: number) => ({
    id: `${index}`,
    title: `Название канала ${index}`,
    linkTo: `/channel/${index}`,
    imageUrl: 'invalid_url'
}));

export default () => (
    <Suspense fallback={<SuspenseFallback />}>
        <Subscriptions items={generateSubscriptions()} />
    </Suspense>
);
