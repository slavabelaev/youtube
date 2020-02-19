import React from "react";
import VideoMenu from "./VideoMenu";
import PopoverButton from "../../buttons/PopoverButton";

const VideoPopoverButton: React.FC = () => (
    <PopoverButton
        edge="end"
        content={<VideoMenu />}
    />
);

export default VideoPopoverButton;
