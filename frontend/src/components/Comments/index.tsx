import React, {Suspense} from "react";
import SuspenseFallback from "../SuspenseFallback";
import {findAllComments} from "../../services/commentsService";

const Component = React.lazy(() => import('./Comments'));

const Comments: React.FC = () => (
    <Suspense fallback={<SuspenseFallback />}>
        <Component
            onLoad={async skip => await findAllComments(undefined, skip)}
        />
    </Suspense>
);

export default Comments;
