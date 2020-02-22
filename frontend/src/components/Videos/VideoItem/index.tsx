import React from "react";
import Component, {VideoItemBaseProps} from "./VideoItem";

export interface VideoModel {
    id: string;
    title: string;
    videoUrl: string;
    duration: number;
    previewUrl: string;
    channelName: string;
    channelUrl: string;
    channelAvatarUrl?: string;
    views?: number;
    isRecommended?: boolean;
    isNew?: boolean;
    verified?: boolean;
    createdAt: Date;
}

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
