import React, {Suspense, useContext} from "react";
import {LinearProgress, Theme, useMediaQuery} from "@material-ui/core";
import LayoutDrawerContext from "../../layouts/Layout/LayoutDrawer/LayoutDrawerContext";

export const HOME_PAGE_ROUTE = '/';

const HomePage = React.lazy(() => import('./HomePage'));

export default () => {
    const isScreenDownSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const { actions } = useContext(LayoutDrawerContext);

    if (isScreenDownSm) {
        actions?.setVariant('temporary', false);
    } else {
        actions?.setVariant('permanent', true);
    }

    return (
        <Suspense fallback={<LinearProgress />}>
            <HomePage />
        </Suspense>
    );
}
