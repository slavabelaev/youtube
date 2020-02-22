import {PlaylistModel} from "../components/Playlists/Playlist";
import faker from "faker/locale/en";

export const generatePlaylists = async (): Promise<PlaylistModel[]> => Array(10)
    .fill(null)
    .map((item, index) => ({
        id: `${index}`,
        title: faker.lorem.sentence(4),
        linkTo: `/playlist/${index}`
    }));
