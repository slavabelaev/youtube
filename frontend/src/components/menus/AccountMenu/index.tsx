import React, {Suspense} from "react";
import SuspenseFallback from "../../SuspenseFallback";

const Component = React.lazy(() => import('./AccountMenu'));

const AccountMenu: React.FC = () => (
    <Suspense fallback={<SuspenseFallback />}>
        <Component />
    </Suspense>
);

export default AccountMenu;
