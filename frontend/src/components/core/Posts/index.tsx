import React, {Suspense} from "react";
import SuspenseFallback from "../../../layouts/SuspenseFallback";
import {PostsProps} from "./Posts";

const Component = React.lazy(() => import('./Posts'));

function Posts(props: PostsProps) {
    return (
        <Suspense fallback={<SuspenseFallback/>}>
            <Component {...props} />
        </Suspense>
    )
}

export default Posts;
