import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import {Popover} from "@material-ui/core";
import VideoPopoverMenu from "./VideoPopoverMenu";

export interface VideoPopupButtonProps {}

const VideoPopoverButton: React.FC<VideoPopupButtonProps> = (props) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const popover = (
        <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            disableScrollLock
            onClose={handleClose}
        >
            <VideoPopoverMenu />
        </Popover>
    );

    const button = (
        <IconButton
            edge="end"
            onClick={handleClick}
        >
            <MoreVertIcon />
        </IconButton>
    );

    return (
        <>
            {button}
            {popover}
        </>
    )
};

export default VideoPopoverButton;
