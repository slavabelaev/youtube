import React, {Suspense} from "react";
import SuspenseFallback from "../common/SuspenseFallback";
import {generateComments} from "../../services/commentsService";

const Component = React.lazy(() => import('./Comments'));

function Comments() {
	return (
    <Suspense fallback={<SuspenseFallback />}>
        <Component
            onLoad={generateComments}
        />
    </Suspense>
)
}

export default Comments;
