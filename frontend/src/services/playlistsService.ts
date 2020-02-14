import {PlaylistProps} from "../components/Playlists/Playlists";
import faker from "faker/locale/en";

export const generatePlaylists = async (): Promise<PlaylistProps[]> => Array(10)
    .fill(null)
    .map((item, index) => ({
        id: `${index}`,
        title: faker.lorem.sentence(),
        linkTo: `/playlist/${index}`
    }));
