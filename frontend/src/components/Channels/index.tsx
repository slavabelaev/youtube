import React, {Suspense} from "react";
import SuspenseFallback from "../SuspenseFallback";
import {ChannelProps} from "../Channel";

const Component = React.lazy(() => import('./Channels'));

const generateChannels = (): ChannelProps[] => Array(10).fill(null).map((item, index) => ({
    id: `${index}`,
    title: `Название канала ${index}`,
    subscribersNumber: Math.round(Math.random() * 10000000),
    linkTo: `/channel/${index}`
}));

const Channels: React.FC = () => (
    <Suspense fallback={<SuspenseFallback />}>
        <Component
            items={generateChannels()}
        />
    </Suspense>
);

export default Channels;

