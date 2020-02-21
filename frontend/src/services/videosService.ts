import {VideoModel} from "../components/Videos/VideoItem/VideoItem";
import faker from "faker/locale/en";

export const generateGridVideos = async (): Promise<VideoModel[]> => Array(12)
    .fill(null)
    .map((item, index) => ({
        id: `${index}`,
        title: faker.lorem.sentence().replace('.', ''),
        duration: Math.round(Math.random() * 36000000),
        linkTo: `/watch?v=${index}`,
        imageSrc: 'https://invalid_url',
        channelImageUrl: faker.image.avatar(),
        channelName: faker.company.companyName(),
        channelLinkTo: `/channel/${index}`,
        views: Math.round(Math.random() * 999999999),
        verified: Math.random() > 0.5,
        createdAt: faker.date.past()
    }));

export const generateListVideos = async (): Promise<VideoModel[]> => Array(12)
    .fill(null)
    .map((item, index) => ({
        id: `${index}`,
        title: faker.lorem.sentence().replace('.', ''),
        duration: Math.round(Math.random() * 36000000),
        linkTo: `/watch?v=${index}`,
        imageSrc: 'https://invalid_url',
        channelName: faker.company.companyName(),
        channelLinkTo: `/channel/${index}`,
        isNew: index % 2 === 0,
        isRecommended: index % 2 === 1,
        views: Math.round(Math.random() * 999999999),
        verified: Math.random() > 0.5,
        createdAt: faker.date.past()
    }));
