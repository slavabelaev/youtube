import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";





const Page = React.lazy(() => import('./KeyboardShortcutsPage'));

function KeyboardShortcutsPage() {
	return (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
)
}

export default KeyboardShortcutsPage;
