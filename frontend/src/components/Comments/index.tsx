import React, {Suspense} from "react";
import SuspenseFallback from "../common/SuspenseFallback";
import {CommentsProps} from "./Comments";

const Component = React.lazy(() => import('./Comments'));

function Comments(props: CommentsProps) {
    return (
        <Suspense fallback={<SuspenseFallback/>}>
            <Component {...props} />
        </Suspense>
    )
}

export default Comments;
