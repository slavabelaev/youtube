import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton, {IconButtonProps} from "@material-ui/core/IconButton";

export interface ChannelNotificationsButtonProps extends IconButtonProps {}

const ChannelNotificationsButton: React.FC<ChannelNotificationsButtonProps> = (props) => {
    return (
        <IconButton {...props}>
            <NotificationsIcon />
        </IconButton>
    )
};

export default ChannelNotificationsButton;
