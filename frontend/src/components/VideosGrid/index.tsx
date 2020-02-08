import React, {Suspense} from "react";
import {VideoItemProps} from "../VideoItem";
import SuspenseFallback from "../SuspenseFallback";

const VideosGrid = React.lazy(() => import('./VideosGrid'));

const generateVideos = (): VideoItemProps[] => Array(12).fill(null).map((item, index) => ({
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

export default () => (
    <Suspense fallback={<SuspenseFallback />}>
        <VideosGrid items={generateVideos()} />
    </Suspense>
);

