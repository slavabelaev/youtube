import {VideoItemProps} from "../components/VideoItem";

export const generateGridVideos = async (): Promise<VideoItemProps[]> => Array(12)
    .fill(null)
    .map((item, index) => ({
        id: `${index}`,
        title: `Очень длинный заголовок видеоролика для предстваления ${index}`,
        linkTo: `/watch?v=${index}`,
        imageUrl: 'https://invalid_url',
        channelImageUrl: null,
        channelName: 'Название канала',
        channelLinkTo: `/channel/${index}`,
        views: Math.round(Math.random() * 999999999),
        createdAt: new Date(),
        variant: 'vertical'
    }));

export const generateListVideos = async (): Promise<VideoItemProps[]> => Array(12)
    .fill(null)
    .map((item, index) => ({
        id: `${index}`,
        title: `Очень длинный заголовок видеоролика для предстваления ${index}`,
        linkTo: `/watch?v=${index}`,
        imageUrl: 'https://invalid_url',
        channelName: 'Название канала',
        channelLinkTo: `/channel/${index}`,
        isNew: index % 2 === 0,
        isRecommended: index % 2 === 1,
        views: Math.round(Math.random() * 999999999)
    }));
