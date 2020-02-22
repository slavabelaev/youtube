import React, {Suspense} from "react";
import SuspenseFallback from "../common/SuspenseFallback";
import {generatePosts} from "../../services/postsService";

const Component = React.lazy(() => import('./Posts'));

function Posts() {
    return (
        <Suspense fallback={<SuspenseFallback/>}>
            <Component onLoad={generatePosts}/>
        </Suspense>
    )
}

export default Posts;
