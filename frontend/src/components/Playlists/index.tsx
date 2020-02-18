import React, {Suspense} from "react";
import SuspenseFallback from "../common/SuspenseFallback";
import {generatePlaylists} from "../../services/playlistsService";

const Playlists = React.lazy(() => import('./Playlists'));

export default () => (
    <Suspense fallback={<SuspenseFallback />}>
        <Playlists onLoad={generatePlaylists} />
    </Suspense>
)
