import {ChannelModel} from "../components/Channel";
import faker from "faker/locale/en";

export const generateChannels = async (): Promise<ChannelModel[]> => Array(10)
    .fill(null)
    .map((item, index) => ({
        id: `${index}`,
        title: faker.company.companyName(),
        avatarSrc: faker.image.avatar(),
        subscribersNumber: Math.round(Math.random() * 10000000),
        linkTo: `/channel/${index}`
    }));

