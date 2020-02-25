import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";

export const PLAYLIST_PAGE_ROUTE = '/playlist';

const Page = React.lazy(() => import('./PlaylistPage'));

function PlaylistPage() {
	return (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
)
}

export default PlaylistPage;
