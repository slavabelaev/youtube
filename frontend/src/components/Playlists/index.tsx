import React, {Suspense} from "react";
import {CircularProgress} from "@material-ui/core";
import {PlaylistProps} from "./Playlists";

const Playlists = React.lazy(() => import('./Playlists'));

const generatePlaylists = (): PlaylistProps[] => Array(10).fill(null).map((item, index) => ({
   id: `${index}`,
   title: `Плэйлист ${index}`,
   linkTo: `/playlist/${index}`
}));

export default () => (
    <Suspense fallback={<CircularProgress />}>
        <Playlists items={generatePlaylists()} />
    </Suspense>
)
