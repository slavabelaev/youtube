import React, {Suspense} from "react";
import SuspenseFallback from "../../SuspenseFallback";

const Component = React.lazy(() => import('./AccountsMenu'));

const AccountsMenu: React.FC = () => (
    <Suspense fallback={<SuspenseFallback />}>
        <Component />
    </Suspense>
);

export default AccountsMenu;
