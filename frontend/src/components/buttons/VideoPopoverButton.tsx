import React from "react";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import VideoAddMenu from "../menus/VideoAddMenu";
import PopoverButton from "./PopoverButton";

function VideoPopoverButton() {
	return (
    <PopoverButton
        renderContent={() => <VideoAddMenu />}
        tooltip="Create video or post"
    >
        <VideoCallIcon />
    </PopoverButton>
)
}

export default VideoPopoverButton;
