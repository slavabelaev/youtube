import React from "react";
import {MenuListItemProps} from "../../common/MenuListItem";
import FlagIcon from "@material-ui/icons/Flag";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import Divider from "@material-ui/core/Divider";
import Menu from "../../common/Menu";

function VideoMenu() {
    const primaryMenuItems: MenuListItemProps[] = [
        { title: 'Add to queue', icon: <PlaylistPlayIcon />, onClick: () => null },
        { title: 'Save to "Watch later"', icon: <WatchLaterIcon />, onClick: () => null },
        { title: 'Save to playlist', icon: <PlaylistAddIcon />, onClick: () => null },
    ];

    const secondaryMenuItems: MenuListItemProps[] = [
        { title: 'Not interested', icon: <NotInterestedIcon />, onClick: () => null },
        { title: 'Don\'t recommend channel', icon: <RemoveCircleOutlineIcon />, onClick: () => null },
        { title: 'Report', icon: <FlagIcon />, onClick: () => null },
    ];

    return (
        <div>
            <Menu items={primaryMenuItems} />
            <Divider />
            <Menu items={secondaryMenuItems} />
        </div>
    )
}

export default VideoMenu;
