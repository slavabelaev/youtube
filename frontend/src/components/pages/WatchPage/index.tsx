import React, {Suspense, useContext} from "react";
import {LinearProgress} from "@material-ui/core";
import LayoutDrawerContext from "../../layouts/Layout/LayoutDrawer/LayoutDrawerContext";

export const WATCH_PAGE_ROUTE = '/watch';

const WatchPage = React.lazy(() => import('./WatchPage'));

export default () => {
    const { actions } = useContext(LayoutDrawerContext);
    actions?.setVariant('temporary', false);

    return (
        <Suspense fallback={<LinearProgress />}>
            <WatchPage />
        </Suspense>
    );
}
