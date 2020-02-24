import faker from "faker/locale/en";
import {PlaylistModel} from "../models/PlaylistModel";

export const generatePlaylists = async (): Promise<PlaylistModel[]> => Array(10)
    .fill(null)
    .map((item, index) => ({
        id: `${index}`,
        title: faker.lorem.sentence(4)
    }));
