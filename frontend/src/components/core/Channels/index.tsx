import React, {Suspense} from "react";
import SuspenseFallback from "../../../layouts/SuspenseFallback";
import {generateChannels} from "../../../services/channelsService";
import {ChannelModel} from "../../../models/ChannelModel";
import {CHANNEL_PAGE_ROUTE} from "../../../pages/ChannelPage";

const Component = React.lazy(() => import('./Channels'));

function Channels() {
    return (
        <Suspense fallback={<SuspenseFallback/>}>
            <Component
                onLoad={generateChannels}
                itemToProps={(channel: ChannelModel) => ({
                    title: channel.title,
                    to: CHANNEL_PAGE_ROUTE.replace(':id', channel.id),
                    subscribersNumber: channel.subscribersNumber,
                    avatarSrc: channel.avatarUrl
                })}
            />
        </Suspense>
    )
}

export default Channels;

