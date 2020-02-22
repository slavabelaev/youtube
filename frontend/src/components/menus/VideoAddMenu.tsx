import React from "react";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import LinksMenu from "../common/LinksMenu";

function VideoAddMenu() {
	return (
    <LinksMenu items={[
        {
            title: 'Добавить видео',
            to: '/video/add',
            icon: () => <OndemandVideoIcon color="primary" />
        },
        {
            title: 'Начать трансляцию',
            to: '/video/streaming',
            icon: () => <LiveTvIcon color="primary" />
        }
    ]} />
)
}

export default VideoAddMenu;
