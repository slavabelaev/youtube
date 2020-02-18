import React from "react";
import {MenuListItemProps} from "../MenuListItem";
import FlagIcon from "@material-ui/icons/Flag";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import Divider from "@material-ui/core/Divider";
import Menu from "../Menu";

const VideoMenu: React.FC = () => {
    const primaryMenuItems: MenuListItemProps[] = [
        { title: 'Добавить в очередь', icon: <PlaylistPlayIcon />, onClick: () => null },
        { title: 'Добавить в плейлист "Смотреть позже"', icon: <WatchLaterIcon />, onClick: () => null },
        { title: 'Добавить в плейлист', icon: <PlaylistAddIcon />, onClick: () => null },
    ];

    const secondaryMenuItems: MenuListItemProps[] = [
        { title: 'Не интересует', icon: <NotInterestedIcon />, onClick: () => null },
        { title: 'Не рекомендовать видео с этого канала', icon: <RemoveCircleOutlineIcon />, onClick: () => null },
        { title: 'Пожаловаться', icon: <FlagIcon />, onClick: () => null },
    ];

    return (
        <div>
            <Menu items={primaryMenuItems} />
            <Divider />
            <Menu items={secondaryMenuItems} />
        </div>
    )
};

export default VideoMenu;
