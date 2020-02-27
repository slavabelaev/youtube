import React, {Suspense} from "react";
import SuspenseFallback from "../../../layouts/SuspenseFallback";
import {generateAccounts} from "../../../services/accountsService";

const Component = React.lazy(() => import('./AccountsMenu'));

function AccountsMenu() {
	return (
    <Suspense fallback={<SuspenseFallback />}>
        <Component onLoad={generateAccounts} />
    </Suspense>
)
}

export default AccountsMenu;
