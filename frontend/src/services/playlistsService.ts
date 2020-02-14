import {PlaylistProps} from "../components/Playlists/Playlists";

export const generatePlaylists = async (): Promise<PlaylistProps[]> => Array(10)
    .fill(null)
    .map((item, index) => ({
        id: `${index}`,
        title: `Плэйлист ${index}`,
        linkTo: `/playlist/${index}`
    }));
