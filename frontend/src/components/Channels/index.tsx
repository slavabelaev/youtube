import React, {Suspense} from "react";
import SuspenseFallback from "../common/SuspenseFallback";
import {generateChannels} from "../../services/channelsService";

const Component = React.lazy(() => import('./Channels'));

function Channels() {
    return (
        <Suspense fallback={<SuspenseFallback/>}>
            <Component onLoad={generateChannels}/>
        </Suspense>
    )
}

export default Channels;

