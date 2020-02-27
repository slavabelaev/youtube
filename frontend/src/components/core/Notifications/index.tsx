import React, {Suspense} from "react";
import SuspenseFallback from "../../../layouts/SuspenseFallback";
import {generateNotifications} from "../../../services/notificationsService";

const Notifications = React.lazy(() => import('./Notifications'));

export default () => (
    <Suspense fallback={<SuspenseFallback />}>
        <Notifications onLoad={generateNotifications} />
    </Suspense>
);
