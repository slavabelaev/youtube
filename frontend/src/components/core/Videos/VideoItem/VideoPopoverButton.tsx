import React from "react";
import VideoMenu from "./VideoMenu";
import PopoverButton from "../../../buttons/PopoverButton";

function VideoPopoverButton() {
    return (
        <PopoverButton
            edge="end"
            renderContent={() => <VideoMenu />}
        />
    )
}

export default VideoPopoverButton;
