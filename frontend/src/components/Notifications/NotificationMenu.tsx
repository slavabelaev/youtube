import React from "react";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Menu from "../common/Menu";

function NotificationMenu() {
	return (
    <Menu
        items={[
            { title: 'Скрыть уведомление', icon: <VisibilityOffIcon /> },
            { title: 'Отключить все уведомления о канале', icon: <></> },
        ]}
    />
)
}

export default NotificationMenu;
