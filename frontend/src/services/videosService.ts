import {VideoItemProps} from "../components/VideoItem";
import faker from "faker/locale/en";

export const generateGridVideos = async (): Promise<VideoItemProps[]> => Array(12)
    .fill(null)
    .map((item, index) => ({
        id: `${index}`,
        title: faker.lorem.sentence().replace('.', ''),
        linkTo: `/watch?v=${index}`,
        imageUrl: 'https://invalid_url',
        channelImageUrl: faker.image.avatar(),
        channelName: faker.company.companyName(),
        channelLinkTo: `/channel/${index}`,
        views: Math.round(Math.random() * 999999999),
        createdAt: new Date(),
        variant: 'vertical'
    }));

export const generateListVideos = async (): Promise<VideoItemProps[]> => Array(12)
    .fill(null)
    .map((item, index) => ({
        id: `${index}`,
        title: faker.lorem.sentence().replace('.', ''),
        linkTo: `/watch?v=${index}`,
        imageUrl: 'https://invalid_url',
        channelName: faker.company.companyName(),
        channelLinkTo: `/channel/${index}`,
        isNew: index % 2 === 0,
        isRecommended: index % 2 === 1,
        views: Math.round(Math.random() * 999999999)
    }));
