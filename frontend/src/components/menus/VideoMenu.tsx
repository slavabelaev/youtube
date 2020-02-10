import React from "react";
import List from "@material-ui/core/List";
import RouteListItem from "../RouteListItem";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import {IconProps} from "@material-ui/core";

const VideoMenu: React.FC = () => {
    const renderIcon = (Icon: React.FC<IconProps>) => (
        <Icon color="primary" />
    );

    return (
        <>
            <List>
                <RouteListItem
                    title={'Добавить видео'}
                    to={'/video/add'}
                    icon={() => renderIcon(OndemandVideoIcon)}
                />
                <RouteListItem
                    title={'Начать трансляцию'}
                    to={'/video/streaming'}
                    icon={() => renderIcon(LiveTvIcon)}
                />
            </List>
        </>
    )
};

export default VideoMenu;
