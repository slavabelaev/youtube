import {ChannelProps} from "../components/Channel";

export const generateChannels = async (): Promise<ChannelProps[]> => Array(10)
    .fill(null)
    .map((item, index) => ({
        id: `${index}`,
        title: `Название канала ${index}`,
        subscribersNumber: Math.round(Math.random() * 10000000),
        linkTo: `/channel/${index}`
    }));

