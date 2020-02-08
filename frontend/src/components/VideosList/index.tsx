import React, {Suspense} from "react";
import {VideoItemProps} from "../VideoItem";
import SuspenseFallback from "../SuspenseFallback";

const VideosList = React.lazy(() => import('./VideosList'));

const generateVideos = (): VideoItemProps[] => Array(12).fill(null).map((item, index) => ({
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

export default () => (
    <Suspense fallback={<SuspenseFallback />}>
        <VideosList items={generateVideos()} />
    </Suspense>
);
