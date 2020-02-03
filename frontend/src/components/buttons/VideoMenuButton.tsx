import React from "react";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import {IconButton} from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import Tooltip from "@material-ui/core/Tooltip";
import VideoMenu from "../menus/VideoMenu";

const VideoMenuButton: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const title = 'Создать видео или запись';

    const handleClose = () => {
        setAnchorEl(null);
    };

    const popover = (
        <Popover
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <VideoMenu />
        </Popover>
    );

    const button = (
        <Tooltip title={title}>
            <IconButton onClick={handleClick}>
                <VideoCallIcon />
            </IconButton>
        </Tooltip>
    );

    return (
        <>
            {button}
            {popover}
        </>
    )
};

export default VideoMenuButton;
