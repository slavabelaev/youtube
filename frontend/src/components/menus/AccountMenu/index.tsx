import React, {Suspense} from "react";
import SuspenseFallback from "../../common/SuspenseFallback";

const Component = React.lazy(() => import('./AccountMenu'));

function AccountMenu() {
    return (
        <Suspense fallback={<SuspenseFallback/>}>
            <Component/>
        </Suspense>
    )
}

export default AccountMenu;
