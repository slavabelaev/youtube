import React, {Suspense} from "react";
import {SubscriptionProps} from "./Subscriptions";
import SuspenseFallback from "../SuspenseFallback";
import {generateSubscriptions} from "../../services/subscriptionsService";

const Subscriptions = React.lazy(() => import('./Subscriptions'));

export default () => (
    <Suspense fallback={<SuspenseFallback />}>
        <Subscriptions
            onLoad={generateSubscriptions}
            onLoadMore={generateSubscriptions}
        />
    </Suspense>
);
