import React, {Suspense} from "react";
import SuspenseFallback from "../../SuspenseFallback";
import {generateAccounts} from "../../../services/accountsService";

const Component = React.lazy(() => import('./AccountsMenu'));

const AccountsMenu: React.FC = () => (
    <Suspense fallback={<SuspenseFallback />}>
        <Component onLoad={generateAccounts} />
    </Suspense>
);

export default AccountsMenu;
