import faker from "faker/locale/en";
import {VideoModel} from "../models/VideoModel";

export const generateGridVideos = async (): Promise<VideoModel[]> => Array(12)
    .fill(null)
    .map((item, index) => ({
        id: `${index}`,
        title: faker.lorem.sentence().replace('.', ''),
        duration: Math.round(Math.random() * 36000000),
        videoUrl: `/watch?v=${index}`,
        previewUrl: 'https://invalid_url',
        channelAvatarUrl: faker.image.avatar(),
        channelName: faker.company.companyName(),
        channelUrl: `/channel/${index}`,
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
        videoUrl: `/watch?v=${index}`,
        previewUrl: 'https://invalid_url',
        channelName: faker.company.companyName(),
        channelUrl: `/channel/${index}`,
        isNew: index % 2 === 0,
        isRecommended: index % 2 === 1,
        views: Math.round(Math.random() * 999999999),
        verified: Math.random() > 0.5,
        createdAt: faker.date.past()
    }));
