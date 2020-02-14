import {ChannelProps} from "../components/Channel";
import faker from "faker/locale/en";

export const generateChannels = async (): Promise<ChannelProps[]> => Array(10)
    .fill(null)
    .map((item, index) => ({
        id: `${index}`,
        title: faker.company.companyName(),
        avatarUrl: faker.image.avatar(),
        subscribersNumber: Math.round(Math.random() * 10000000),
        linkTo: `/channel/${index}`
    }));

