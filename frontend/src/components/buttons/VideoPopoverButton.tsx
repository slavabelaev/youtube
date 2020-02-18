import React from "react";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import VideoAddMenu from "../menus/VideoAddMenu";
import PopoverButton from "./PopoverButton";

const VideoPopoverButton: React.FC = () => (
    <PopoverButton
        content={<VideoAddMenu />}
        tooltip="Создать видео или запись"
    >
        <VideoCallIcon />
    </PopoverButton>
);

export default VideoPopoverButton;