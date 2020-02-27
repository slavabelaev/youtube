import React from "react";
import Component, {VideoItemBaseProps} from "./VideoItem";
import {VideoModel} from "../../../../models/VideoModel";

export interface VideoItemProps extends VideoItemBaseProps, VideoModel {}

function VideoItem(props: VideoItemProps) {
    return (
        <Component
            {...props}
            primaryText={props.title}
            primaryTextTo={props.videoUrl}
            durationSeconds={props.duration}
            imageSrc={props.previewUrl}
            secondaryText={props.channelName}
            secondaryTextTo={props.channelUrl}
            avatarSrc={props.channelAvatarUrl}
            views={props.views}
            captionText={props.isRecommended ? 'Recommended for you' : null}
            labelText={props.isNew ? 'New' : null}
            showCheckIcon={props.verified}
            createdAt={props.createdAt}
        />
    )
}

export default VideoItem;
