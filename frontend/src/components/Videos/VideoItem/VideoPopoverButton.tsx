import React from "react";
import VideoMenu from "./VideoMenu";
import PopoverButton from "../../buttons/PopoverButton";

function VideoPopoverButton() {
	return (
    <PopoverButton
        edge="end"
        content={<VideoMenu />}
    />
)
}

export default VideoPopoverButton;
