import React, {Suspense} from "react";
import {PlaylistProps} from "./Playlists";
import SuspenseFallback from "../SuspenseFallback";

const Playlists = React.lazy(() => import('./Playlists'));

const generatePlaylists = (): PlaylistProps[] => Array(10).fill(null).map((item, index) => ({
   id: `${index}`,
   title: `Плэйлист ${index}`,
   linkTo: `/playlist/${index}`
}));

export default () => (
    <Suspense fallback={<SuspenseFallback />}>
        <Playlists items={generatePlaylists()} />
    </Suspense>
)
