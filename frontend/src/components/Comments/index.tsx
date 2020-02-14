import React, {Suspense} from "react";
import SuspenseFallback from "../SuspenseFallback";
import {generateComments} from "../../services/commentsService";

const Component = React.lazy(() => import('./Comments'));

const Comments: React.FC = () => (
    <Suspense fallback={<SuspenseFallback />}>
        <Component
            onLoad={generateComments}
        />
    </Suspense>
);

export default Comments;
