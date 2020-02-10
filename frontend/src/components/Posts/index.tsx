import React, {Suspense} from "react";
import SuspenseFallback from "../SuspenseFallback";
import postsService from "./postsService";

const Component = React.lazy(() => import('./Posts'));

const Posts: React.FC = () => (
    <Suspense fallback={<SuspenseFallback />}>
        <Component items={postsService.getAll()} />
    </Suspense>
);

export default Posts;
